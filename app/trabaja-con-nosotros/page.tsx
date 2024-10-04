import React from "react";
import Formulario from "@/components/Formulario";
import { ComponentGeneralFormulario } from "@/gql/graphql";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import styles from "./page.module.scss";

export const metadata = {
  title: `Trabaja con nosotros - ${SITE_NAME}`,
  description: "Aplica para una de nuestras vacantes.",
  openGraph: {
    title: "Trabaja con nosotros",
    description: "Aplica para una de nuestras vacantes.",
    url: `${SITE_URL}`,
    siteName: SITE_NAME,
    // images: [
    //   {
    //     url: image.src,
    //     width: 800,
    //     height: 600,
    //   },
    // ],
  },
};

export default async function Page() {
  const formulario: ComponentGeneralFormulario = {
    id: "formulario-2f4be6c7-cf07-4ca6-be13-ea67ff4ad4b0",
    formId: "2f4be6c7-cf07-4ca6-be13-ea67ff4ad4b0",
  };
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.title}>Trabaja con nosotros</h1>
        <Formulario formulario={formulario} />
      </section>
    </>
  );
}
