import React from "react";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";
import { h1 } from "styles/tipography";
import { Servicio } from "client";

interface VentajasProps {
  servicio: Servicio;
}
const Ventajas = ({ servicio }: VentajasProps) => {
  const ventajas = servicio.ventajas();

  return ventajas?.length ? (
    <Section>
      <Container itemScope itemType="https://schema.org/ItemList">
        <Title itemProp="name">VENTAJAS</Title>
        <RequirementsList>
          {ventajas.map((item, index) => {
            const ventaja = item?.ventaja;
            return (
              <Requirement key={index} itemProp="itemListElement">
                {ventaja}
              </Requirement>
            );
          })}
        </RequirementsList>
      </Container>
    </Section>
  ) : null;
};

export default Ventajas;

const Section = styled.section``;

const Container = styled.div`
  ${container}
  display: grid;
  gap: 1.5rem 3rem;
`;

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  ${h1}
  ${mq.md} {
    grid-column: 1 / span 2;
  }
`;

const RequirementsList = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1.5rem 3rem;

  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Requirement = styled.li``;
