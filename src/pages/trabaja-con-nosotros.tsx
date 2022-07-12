import React from "react";
import styled from "@emotion/styled";
import { container } from "components/grid";
import Layout from "components/Layout";
import Formulario from "components/Formulario";
import { ComponentGeneralFormulario } from "client";

const TrabajaConNosotros = () => {
  const formulario: ComponentGeneralFormulario = {
    id: "formulario-2f4be6c7-cf07-4ca6-be13-ea67ff4ad4b0",
    formId: "2f4be6c7-cf07-4ca6-be13-ea67ff4ad4b0",
  };
  return (
    <Layout>
      <Section space>
        <Title>Trabaja con nosotros</Title>
        <Formulario formulario={formulario} />
      </Section>
    </Layout>
  );
};

export default TrabajaConNosotros;

const Section = styled.div`
  ${container}
`;

const Title = styled.h1`
  display: none;
`;
