import React from "react";
import styled from "@emotion/styled";
import { container } from "components/grid";
import Layout from "components/Layout";
import Formulario from "components/Formulario";
import { ComponentGeneralFormulario } from "client";
import { NextSeo } from "next-seo";
import { SITE_NAME, SITE_URL } from "lib/constants";
import { getImageURL } from "lib/api";

const TrabajaConNosotros = () => {
  const formulario: ComponentGeneralFormulario = {
    id: "formulario-2f4be6c7-cf07-4ca6-be13-ea67ff4ad4b0",
    formId: "2f4be6c7-cf07-4ca6-be13-ea67ff4ad4b0",
  };
  return (
    <>
      <NextSeo
        title="Trabaja con nosotros"
        description="Aplica para una de nuestras vacantes."
        canonical={`${SITE_URL}`}
        openGraph={{
          url: `${SITE_URL}`,
          title: "Trabaja con nosotros",
          description: "Aplica para una de nuestras vacantes.",
          site_name: SITE_NAME,
        }}
      />
      <Layout>
        <Section space>
          <Title>Trabaja con nosotros</Title>
          <Formulario formulario={formulario} />
        </Section>
      </Layout>
    </>
  );
};

export default TrabajaConNosotros;

const Section = styled.div`
  ${container}
`;

const Title = styled.h1`
  display: none;
`;
