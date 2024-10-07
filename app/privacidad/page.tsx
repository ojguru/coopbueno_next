import React from "react";
import PageHeader from "@/components/PageHeader";

import { SITE_NAME, SITE_URL } from "@/lib/constants";
import styles from "./page.module.scss";

export const metadata = {
  metadatabase: new URL(SITE_URL),
  title: `Política de privacidad Coopbueno Móvil - ${SITE_NAME}`,
  description: "Política de privacidad aplicación Coopbueno Móvil",
  openGraph: {
    title: "Política de privacidad Coopbueno Móvil",
    description: "Política de privacidad aplicación Coopbueno Móvil",
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
  return (
    <>
      <section className={styles.section}>
        <PageHeader title={"Política de privacidad Coopbueno Móvil"} />
        <h2>Seguridad de los datos</h2>
        <p>
          El desarrollador ha proporcionado esta información sobre cómo la
          aplicación recoge, comparte y trata tus datos.
        </p>
        <h3>No se ha declarado ninguna recogida de datos</h3>
        <p>
          El desarrollador indica que esta aplicación no recoge datos de
          usuario.
        </p>
        <h3>No se comparten datos con terceros</h3>
        <p>
          El desarrollador indica que esta aplicación no comparte datos de
          usuario con otras empresas u organizaciones.
        </p>
      </section>
    </>
  );
}
