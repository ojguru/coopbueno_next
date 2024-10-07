"use client";
import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Switch, FormControlLabel, withStyles } from "@material-ui/core";
import useModal from "@/hooks/useModal";

import ctas from "@/styles/cta";

import { useForm } from "react-hook-form";
// import { ErrorMessage } from "@hookform/error-message";
import { h4 } from "@/styles/tipography";
import colors from "@/styles/colors";
import PageHeader from "@/components/PageHeader";
import { ComponentGeneralFormulario } from "@/gql/graphql";
import Formulario from "@/components/Formulario";
import styles from "./calculadora.module.scss";

const Calculadora = () => {
  const formulario: ComponentGeneralFormulario = {
    id: "formulario-b845c8ab-9eea-48c1-90ca-278bef416e72",
    formId: "b845c8ab-9eea-48c1-90ca-278bef416e72",
  };

  const formatNumber = new Intl.NumberFormat("en-US");

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
  } = useForm();

  const [isFormSubmiting, setFormSubmiting] = useState(false);
  const [amortizationReady, setAmortizationReady] = useState(false);
  const [showAmortization, setShowAmortization] = useState(false);
  const [valueTotalInterest, setInterest] = useState(0);

  const resu: any = {
    monthlyPayment: 0,
    monthlyInterest: 0,
    monthlyCapital: 0,
    totalPayment: 0,
    totalInterest: 0,
    isResult: false,
    amortization: {
      header: [],
      body: [],
    },
  };
  const [results, setResults] = useState(resu);

  const [errorMessages, setErrorMessages] = useState([]);

  const onSubmit = async (data: any) => {
    setFormSubmiting(true);

    // Parámetros iniciales
    const amount: number = Number(data.amount);
    const rateType: boolean = data.rate_type; // Define si la tasa es anual o mensual;
    const rate: number = rateType ? Number(data.rate) * 12 : Number(data.rate); // Se transforma a meses
    const periodType: boolean = data.period_type;
    const duration: number = periodType
      ? Number(data.period)
      : Number(data.period) * 12; //Se transforma a meses
    const method: boolean = data.method; //Define el metodo de calculo

    //Retorna si los valores principales no existen
    if (!amount || !rate || !duration) {
      return;
    }

    const {
      monthlyPayment,
      monthlyInterest,
      monthlyCapital,
      totalPayment,
      totalInterest,
      isResult,
    } = calculate(method, amount, duration, rate, false);

    const { amortization } = amortize(method, amount, duration, rate);

    setResults({
      monthlyPayment,
      monthlyInterest,
      monthlyCapital,
      totalPayment,
      totalInterest,
      isResult,
      amortization,
    });

    setFormSubmiting(false);
  };

  //Closure
  const anotherFunction = () => {
    let count = 0;
    const remember = (value: number, duration?: number) => {
      if (duration == 1) {
        return (count = 0);
      } else {
        return (count += Number(value));
      }
    };
    return remember;
  };

  const remember = anotherFunction();

  const calculate = (
    iMethod: boolean,
    iAmount: number,
    iDuration: number,
    iRate: number,
    active: boolean
  ) => {
    // Parámetros iniciales
    const amount = iAmount;
    const rate = iRate / 100 / 12; // Se transforma a meses
    const duration = iDuration;

    if (iMethod) {
      // Cálculos Cuota Fija
      const capital = amount / duration;
      const interest = amount * rate;
      const monthly = capital + interest;

      //Logica de la suma de los  intereses compuesto.
      if (active && duration !== 1) {
        remember(interest, duration);
      } else if (duration == 1) {
        const value = remember(interest);
        setInterest(value);
      }

      const monthlyPaymentCalculated = Number(monthly.toFixed(2));
      const monthlyInterest = Number(interest.toFixed(2));
      const monthlyCapital = Number(capital.toFixed(2));
      const totalPaymentCalculated = Number(amount.toFixed(2));
      const totalInterestCalculated = Number(duration.toFixed(2));

      return {
        monthlyPayment: monthlyPaymentCalculated,
        monthlyInterest,
        monthlyCapital,
        totalPayment: totalPaymentCalculated,
        totalInterest: totalInterestCalculated,
        amount: amount,
        balance: amount - Number(monthlyCapital),
        remainingDuration: duration - 1,
        isResult: true,
      };
    } else {
      // Cálculos Cuota Fija
      const x = Math.pow(1 + rate, duration);
      const monthly = (amount * x * rate) / (x - 1);
      const interest = amount * rate;
      const capital = monthly - interest;

      const monthlyPaymentCalculated = Number(monthly.toFixed(2));
      const monthlyInterest = Number(interest.toFixed(2));
      const monthlyCapital = Number(capital.toFixed(2));
      const totalPaymentCalculated = Number((monthly * duration).toFixed(2));
      const totalInterestCalculated = Number(
        (monthly * duration - amount).toFixed(2)
      );

      // Set up results to the state to be displayed to the user
      return {
        monthlyPayment: monthlyPaymentCalculated,
        monthlyInterest,
        monthlyCapital,
        totalPayment: totalPaymentCalculated,
        totalInterest: totalInterestCalculated,
        amount: amount,
        balance: amount - monthlyCapital,
        remainingDuration: duration - 1,
        isResult: true,
      };
    }
  };

  const amortize = (
    iMethod: boolean,
    amount: number,
    duration: number,
    rate: number
  ) => {
    let body = [];
    let result = {
      monthlyPayment: 0,
      monthlyInterest: 0,
      monthlyCapital: 0,
      totalPayment: 0,
      totalInterest: 0,
      amount: 0,
      balance: 0,
      remainingDuration: 0,
      isResult: false,
    };
    for (var i = 0; i < duration; i++) {
      if (i < 1) {
        result = calculate(iMethod, amount, duration, rate, true);
      } else {
        result = calculate(
          iMethod,
          result.balance,
          result.remainingDuration,
          rate,
          true
        );
      }

      setAmortizationReady(true);
      body.push([
        i + 1,
        result.monthlyPayment,
        result.monthlyCapital,
        result.monthlyInterest,
        result.balance,
      ]);
    }

    setAmortizationReady(true);

    return {
      amortization: {
        head: ["pago", "Cuota", "Capital", "Intereses", "Balance"],
        body,
      },
    };
  };

  const changeRateAmount = () => {
    const { rate, rate_type } = getValues();

    setValue("rate_type", !rate_type);

    !rate_type
      ? setValue("rate", (rate / 12).toFixed(2))
      : setValue("rate", rate * 12);
  };

  const changePeriodAmount = () => {
    const { period, period_type } = getValues();

    setValue("period_type", !period_type);
    !period_type
      ? setValue("period", period * 12)
      : setValue("period", period / 12);
  };

  const { method } = getValues();

  const { ModalUI, openModal } = useModal();

  return (
    <>
      <div className={styles.container}>
        <PageHeader title="Calculadora de préstamos" />
        <div className={styles.calculator}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputs}>
              <FormControlLabel
                control={<SSwitch {...register("method")} />}
                label="Cuota fija / Capital fijo"
              />
              <div className={styles.inputWrapper}>
                <input
                  className={styles.input}
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="Monto"
                  disabled={isFormSubmiting}
                  {...register("amount", {
                    required: "Este campo es requerido",
                  })}
                />
                {/* {errors["amount"] ? (
                  <ErrorMessage
                    errors={errors}
                    name="amount"
                    render={({ message }) => <p>{message}</p>}
                  />
                ) : null} */}
              </div>
              <FormControlLabel
                control={
                  <SSwitch
                    name="period_type"
                    inputRef={register("period_type").ref}
                    onChange={(e) => changePeriodAmount()}
                  />
                }
                label="Periodo: Años / Meses"
              />
              <div className={styles.inputWrapper}>
                <input
                  className={styles.input}
                  type="number"
                  min="1"
                  step="1"
                  placeholder="Tiempo"
                  disabled={isFormSubmiting}
                  {...register("period", {
                    required: "Este campo es requerido",
                  })}
                />
                {/* {errors["period"] ? (
                  <ErrorMessage
                    errors={errors}
                    name="period"
                    render={({ message }) => <p>{message}</p>}
                  />
                ) : null} */}
              </div>
              <FormControlLabel
                control={
                  <SSwitch
                    name="rate_type"
                    inputRef={register("rate_type").ref}
                    onChange={(e) => changeRateAmount()}
                  />
                }
                label="Tasa: Anual / Mensual"
              />

              <div className={styles.inputWrapper}>
                <input
                  className={styles.input}
                  type="number"
                  min="0.01"
                  step="0.01"
                  placeholder="Tasa"
                  disabled={isFormSubmiting}
                  {...register("rate", {
                    required: "Este campo es requerido",
                  })}
                />
                {/* {errors["rate"] ? (
                  <ErrorMessage
                    errors={errors}
                    name="rate"
                    render={({ message }) => <p>{message}</p>}
                  />
                ) : null} */}
              </div>
              {errorMessages.length > 0 && (
                <div className={styles.errorMessages}>
                  {errorMessages.map((item: any, index) => {
                    return (
                      <p className={styles.errorMsg} key={index}>
                        {item.message}
                      </p>
                    );
                  })}
                </div>
              )}

              <div className={styles.buttonBox}>
                <input
                  className={styles.submit}
                  type="submit"
                  value="Calcular"
                />
              </div>
            </div>

            <div className={styles.results}>
              <div className={styles.result}>
                <h2 className={styles.resultTitle}>Cuota mensual</h2>
                <h3 className={styles.resultValue}>
                  {formatNumber.format(results.monthlyPayment)}
                </h3>
              </div>
              <div className={styles.result}>
                <h2 className={styles.resultTitle}>Monto Total</h2>
                <h3 className={styles.resultValue}>
                  {formatNumber.format(
                    method
                      ? Number(
                          (results.totalPayment + valueTotalInterest).toFixed(2)
                        )
                      : results.totalPayment
                  )}
                </h3>
              </div>
              <div className={styles.result}>
                <h2 className={styles.resultTitle}>Total Intereses</h2>
                <h3 className={styles.resultValue}>
                  {formatNumber.format(
                    method
                      ? Number(valueTotalInterest.toFixed(2))
                      : results.totalInterest
                  )}
                </h3>
              </div>
            </div>

            <div className={styles.buttonBox}>
              <button
                className={styles.button}
                color={colors.primary.light}
                disabled={!amortizationReady}
                onClick={(e) => {
                  setShowAmortization(true);
                }}
              >
                Amortizar
              </button>
              <button
                className={styles.button}
                color={colors.primary.light}
                disabled={!amortizationReady}
                onClick={openModal}
              >
                Solicitar
              </button>
            </div>
          </form>

          {showAmortization ? (
            <div className={styles.amortizationBox}>
              <div className={styles.amortization}>
                <table className={styles.table}>
                  <thead className={styles.thead}>
                    <tr className={styles.tr}>
                      {results.amortization.head.map(
                        (item: any, index: number) => {
                          return (
                            <th className={styles.th} key={index}>
                              {item}
                            </th>
                          );
                        }
                      )}
                    </tr>
                  </thead>
                  <tbody className={styles.tbody}>
                    {results.amortization.body.map(
                      (item: any, index: number) => {
                        const fees = item;

                        return (
                          <tr className={styles.tr} key={index}>
                            {fees.map((item: any, index: number) => {
                              return (
                                <td className={styles.td} key={index}>
                                  {formatNumber.format(item)}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>
              <div className={styles.buttonBox}>
                <button
                  className={styles.button}
                  color={colors.primary.light}
                  disabled={!amortizationReady}
                  onClick={openModal}
                >
                  Solicitar
                </button>
              </div>
            </div>
          ) : null}

          <section className={styles.section}>
            <p className={styles.note}>
              Estos montos son una estimación y pueden variar dependiendo de
              diversos factores, como: pagos a capital, atrasos, pagos
              incompletos, entre otros.
            </p>
          </section>

          <ModalUI title="Contáctanos">
            <Formulario formulario={formulario} />
          </ModalUI>
        </div>
      </div>
    </>
  );
};

export default Calculadora;

const SSwitch = withStyles({
  switchBase: {
    color: "green",
    "&$checked": {
      color: "green",
    },
    "&$checked + $track": {
      backgroundColor: "darkgreen",
    },
  },
  checked: {
    "& + $track": {
      backgroundColor: "green",
      color: "green",
    },
  },
  track: {
    color: "blue",
    backgroundColor: "green",
    "&$checked": {
      backgroundColor: "green",
    },
  },
})(Switch);
