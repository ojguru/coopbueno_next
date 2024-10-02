import React from "react";
import Image from "next/image";
import imagen from "@/public/contacto.png";
import Formulario from "@/components/Formulario";
import { ComponentGeneralFormulario } from "@/gql/graphql";
import styles from "./portada.module.scss";

const Portada = () => {
  const formulario: ComponentGeneralFormulario = {
    id: "formulairo-862702b9-c601-459d-82ac-f51aa43ebbe6",
    formId: "862702b9-c601-459d-82ac-f51aa43ebbe6",
  };

  return (
    <section className={styles.section}>
      <div className={styles.deco} />
      <div className={styles.header}>
        <h1 className={styles.title}>Contacto</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.contactImage}>
          <Image src={imagen} alt="Contacto Coopbueno" priority />
        </div>
        <div className={styles.contactForm}>
          <Formulario formulario={formulario} />
        </div>
      </div>
    </section>
  );
};

export default Portada;
