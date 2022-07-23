import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Switch, FormControlLabel, withStyles } from "@material-ui/core";
import useModal from "hooks/useModal";
import Layout from "components/Layout";

import ctas from "styles/cta";
import { mq, container } from "components/grid";

import { useForm } from "react-hook-form";
import { ErrorMessage as InputError } from "@hookform/error-message";
import { h4 } from "styles/tipography";
import colors from "styles/colors";
import PageHeader from "components/PageHeader";
import { ComponentGeneralFormulario } from "client";
import { NextSeo } from "next-seo";
import { SITE_NAME, SITE_URL } from "lib/constants";
import Formulario from "components/Formulario";

const Page = ({}) => {
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
  return true ? (
    <>
      <NextSeo
        title="Calculadora de préstamos"
        description="Calcula tus préstamos y solicítalos con facilidad."
        canonical={`${SITE_URL}`}
        openGraph={{
          url: `${SITE_URL}`,
          title: "Calculadora de préstamos",
          description: "Calcula tus préstamos y solicítalos con facilidad.",
          site_name: SITE_NAME,
        }}
      />
      <Layout>
        <Container space>
          <PageHeader title="Calculadora de préstamos" />
          <Calculator>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Inputs>
                <FormControlLabel
                  control={<SSwitch {...register("method")} />}
                  label="Cuota fija / Capital fijo"
                />
                <InputWrapper>
                  <Input
                    type="number"
                    min="1"
                    step="0.01"
                    placeholder="Monto"
                    disabled={isFormSubmiting}
                    {...register("amount", {
                      required: "Este campo es requerido",
                    })}
                  />
                  {errors["amount"] ? (
                    <InputError
                      errors={errors}
                      name="amount"
                      render={({ message }) => <p>{message}</p>}
                    />
                  ) : null}
                </InputWrapper>
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
                <InputWrapper>
                  <Input
                    type="number"
                    min="1"
                    step="1"
                    placeholder="Tiempo"
                    disabled={isFormSubmiting}
                    {...register("period", {
                      required: "Este campo es requerido",
                    })}
                  />
                  {errors["period"] ? (
                    <InputError
                      errors={errors}
                      name="period"
                      render={({ message }) => <p>{message}</p>}
                    />
                  ) : null}
                </InputWrapper>
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

                <InputWrapper>
                  <Input
                    type="number"
                    min="0.01"
                    step="0.01"
                    placeholder="Tasa"
                    disabled={isFormSubmiting}
                    {...register("rate", {
                      required: "Este campo es requerido",
                    })}
                  />
                  {errors["rate"] ? (
                    <InputError
                      errors={errors}
                      name="rate"
                      render={({ message }) => <p>{message}</p>}
                    />
                  ) : null}
                </InputWrapper>
                {errorMessages.length > 0 && (
                  <ErrorMessages>
                    {errorMessages.map((item: any, index) => {
                      return (
                        <ErrorMessage key={index}>{item.message}</ErrorMessage>
                      );
                    })}
                  </ErrorMessages>
                )}

                <ButtonBox>
                  <Submit type="submit" value="Calcular" />
                </ButtonBox>
              </Inputs>

              <Results>
                <Result>
                  <ResultTitle>Cuota mensual</ResultTitle>
                  <ResultValue>
                    {formatNumber.format(results.monthlyPayment)}
                  </ResultValue>
                </Result>
                <Result>
                  <ResultTitle>Monto Total</ResultTitle>
                  <ResultValue>
                    {formatNumber.format(
                      method
                        ? Number(
                            (results.totalPayment + valueTotalInterest).toFixed(
                              2
                            )
                          )
                        : results.totalPayment
                    )}
                  </ResultValue>
                </Result>
                <Result>
                  <ResultTitle>Total Intereses</ResultTitle>
                  <ResultValue>
                    {formatNumber.format(
                      method
                        ? Number(valueTotalInterest.toFixed(2))
                        : results.totalInterest
                    )}
                  </ResultValue>
                </Result>
              </Results>

              <ButtonBox>
                <Button
                  bgColor="#F0F7F2"
                  color={colors.primary.light}
                  disabled={!amortizationReady}
                  onClick={(e) => {
                    setShowAmortization(true);
                  }}
                >
                  Amortizar
                </Button>
                <Button
                  bgColor="#F0F7F2"
                  color={colors.primary.light}
                  disabled={!amortizationReady}
                  onClick={openModal}
                >
                  Solicitar
                </Button>
              </ButtonBox>
            </Form>

            {showAmortization ? (
              <AmortizationBox>
                <Amortization>
                  <Table>
                    <THead>
                      <Tr>
                        {results.amortization.head.map(
                          (item: any, index: number) => {
                            return <Th key={index}>{item}</Th>;
                          }
                        )}
                      </Tr>
                    </THead>
                    <TBody>
                      {results.amortization.body.map(
                        (item: any, index: number) => {
                          const fees = item;

                          return (
                            <Tr key={index}>
                              {fees.map((item: any, index: number) => {
                                return (
                                  <Td key={index}>
                                    {formatNumber.format(item)}
                                  </Td>
                                );
                              })}
                            </Tr>
                          );
                        }
                      )}
                    </TBody>
                  </Table>
                </Amortization>
                <ButtonBox>
                  <Button
                    bgColor="#F0F7F2"
                    color={colors.primary.light}
                    disabled={!amortizationReady}
                    onClick={openModal}
                  >
                    Solicitar
                  </Button>
                </ButtonBox>
              </AmortizationBox>
            ) : null}

            <Section>
              <Note>
                Estos montos son una estimación y pueden variar dependiendo de
                diversos factores, como: pagos a capital, atrasos, pagos
                incompletos, entre otros.
              </Note>
            </Section>

            <ModalUI title="Contáctanos">
              <Formulario formulario={formulario} />
            </ModalUI>
          </Calculator>
        </Container>
      </Layout>
    </>
  ) : (
    <Layout>
      <MessageBox>
        <MessageTitle color={colors.primary.base}>Mensaje enviado</MessageTitle>
        <MessageText color={colors.primary.base}>
          Gracias por contactarnos. Tratamos de responder lo más rápido posible.
        </MessageText>
      </MessageBox>
    </Layout>
  );
};

export default Page;

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

const Section = styled.div``;

const Container = styled.div`
  ${container}
`;

const Calculator = styled.div`
  background-color: white;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  border-radius: 2rem;
  padding: 4rem 1.5rem;
  display: grid;
  gap: 3rem;
  ${mq.sm} {
    padding: 4rem 2rem;
  }
  ${mq.md} {
    padding: 3rem;
  }
  ${mq.lg} {
    padding: 4rem;
  }
`;

const Form = styled.form`
  border-radius: 2rem;
  background-color: white;
  margin: 0;
  display: grid;
  gap: 3rem;
  ${mq.lg} {
    grid-template-columns: 1.5fr 1fr 1fr;
  }
`;

const ButtonBox = styled.div`
  text-align: center;
  width: 100%;
`;

const Button = styled.button`
  ${ctas}
  margin: 0 1.5rem;
  margin-bottom: 2rem;
  padding: 15px 45px;
`;

const Inputs = styled.div``;

const InputWrapper = styled.div`
  margin-bottom: 2rem;
  p {
    color: red;
    font-weight: 600;
  }
`;

interface InputProps {
  bgColor?: string;
  textColor?: string;
}
const Input = styled.input`
  ${({ bgColor = "#F5F5F5", textColor = "green" }: InputProps) => css`
    display: block;
    width: 100%;
    margin: 0 auto;
    border: none;
    line-height: 1;
    padding: 15px;
    border-radius: 0.5rem;
    font-weight: bold;
    background-color: ${bgColor};
    color: ${textColor};
    &:focus {
      outline: initial;
      border-color: red;
    }
    ${mq.sm} {
      font-size: 20px;
    }
    ${mq.lg} {
      font-size: 20px;
    }
  `}
`;

// const InputError = styled.p`
//   color: ${colors.red.base};
// `;

const AmortizationBox = styled.div`
  overflow: auto;
  display: grid;
  gap: 2.5rem;
`;

const Amortization = styled.div`
  overflow: auto;
`;

const Submit = styled.input`
  ${ctas}
  margin: 0 auto;
  margin-top: 2rem;
  display: block;
  padding: 15px 45px;
`;

const ErrorMessages = styled.div``;

const ErrorMessage = styled.p`
  color: red;
`;

const Note = styled.p`
  margin: 2rem 0;
`;

const MessageBox = styled.div`
  border-radius: 2rem;
  background-color: white;
  padding: 2rem;
  margin: 0;
  ${mq.sm} {
    padding: 4rem;
  }
  ${mq.lg} {
    padding: 8rem;
    border-radius: 4rem;
  }
`;

const MessageTitle = styled.h3`
  ${({ color }) => css`
    color: ${color};
    text-align: center;
    width: 100%;
    margin-bottom: 2rem;
  `}
`;

const MessageText = styled.p``;

const Results = styled.div``;

const Result = styled.div`
  margin-bottom: 2rem;
`;

const ResultTitle = styled.h2`
  ${h4};
  color: #484848;
  text-transform: uppercase;
  font-weight: bold;
  text-align: left;
  margin: 0;
`;

const ResultValue = styled.h3`
  text-align: left;
  margin: 0;
  font-weight: 900;
`;

const Table = styled.table`
  margin: 0;
  border: initial;
  overflow: auto;
  width: 100%;
`;

const TBody = styled.tbody``;

const THead = styled.thead`
  font-weight: bold;
`;

const Tr = styled.tr`
  &:nth-of-type(odd) {
    background-color: #f5f5f5;
  }
`;

const Th = styled.th`
  font-weight: bold;
  vertical-align: top;
  padding: 10px;
  border: initial;
  word-break: initial;
`;

const Td = styled.td`
  font-weight: normal;
  vertical-align: top;
  padding: 10px;
  border: initial;
  word-break: initial;
`;
