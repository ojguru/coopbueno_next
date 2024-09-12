import React from "react";
import styled from "@emotion/styled";
import { container, mq } from "@/components/grid";
import { h1 } from "@/styles/tipography";
import { ComponentGeneralFormulario, Servicio } from "@/gql/graphql";
import Formulario from "@/components/Formulario";

interface ConversionProps {
  formulario: ComponentGeneralFormulario;
}

const Conversion = ({ formulario }: ConversionProps) => {
  return formulario?.id ? (
    <Section space>
      <Container>
        <Title>Solicitar información</Title>
        <FormBox>
          <Formulario formulario={formulario} />
        </FormBox>
      </Container>
    </Section>
  ) : null;
};

export default Conversion;

const Section = styled.section`
  ${container}
  padding: 0;
`;

const Container = styled.div`
  ${container}
`;

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  ${h1}
`;

const FormBox = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
  border-radius: 1.5rem;
  background-color: white;
  @include mq(md) {
    padding: 3rem 4rem;
  }
  iframe {
    width: 100% !important;
  }
`;
