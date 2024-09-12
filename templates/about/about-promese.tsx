import React from "react";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";

const Promese = () => {
  return (
    <Section>
      <Container space>
        <div>
          <Subtitle>Misión</Subtitle>
          <p>
            Somos una institución de economía solidaria que apoya el crecimiento
            sostenible de las comunidades, creando valor a los sueños de los
            asociados, ofreciendo soluciones integrales a sus necesidades
            financieras.
          </p>
        </div>
        <div>
          <Subtitle>Visión</Subtitle>
          <p>
            Ser reconocida como una cooperativa comprometida con el apoyo socio
            ambiental, la innovación y el mejoramiento económico de sus
            asociados mediante el crecimiento sostenible.
          </p>
        </div>
        <div>
          <Subtitle>Valores</Subtitle>
          <p>COOPBUENO se caracteriza por los siguientes valores:</p>
          <ul>
            <li>Empatía</li>
            <li>Solidaridad</li>
            <li>Integridad</li>
            <li>Eficiencia</li>
            <li>Transparencia</li>
          </ul>
        </div>
      </Container>
    </Section>
  );
};

export default Promese;

const Section = styled.section`
  ${container}
  padding: 0;
`;

const Container = styled.div`
  ${container}
  display: grid;
  gap: 3rem;
  @include mq(md) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Subtitle = styled.h2`
  text-transform: uppercase;
`;
