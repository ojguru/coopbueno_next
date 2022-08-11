import React from "react";
import styled from "@emotion/styled";
import { container } from "components/grid";
import { h1 } from "styles/tipography";
import { ComponentGeneralFormulario, Servicio } from "client";
import Formulario from "components/Formulario";

interface ConversionProps {
  formulario: ComponentGeneralFormulario;
}

const Conversion = ({ formulario }: ConversionProps) => {
  return formulario ? (
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
  padding: 3rem 4rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
  border-radius: 1.5rem;

  iframe {
    width: 100% !important;
  }
`;
