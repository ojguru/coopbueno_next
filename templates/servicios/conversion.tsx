import React from "react";
import { ComponentGeneralFormulario, Servicio } from "@/gql/graphql";
import Formulario from "@/components/Formulario";
import styles from "./conversion.module.scss";

interface ConversionProps {
  formulario: ComponentGeneralFormulario;
}

const Conversion = ({ formulario }: ConversionProps) => {
  return formulario?.id ? (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Solicitar información</h2>
        <div className={styles.formBox}>
          <Formulario formulario={formulario} />
        </div>
      </div>
    </section>
  ) : null;
};

export default Conversion;
