import React from "react";
import styled from "@emotion/styled";
import { container, mq } from "@/components/grid";
import { h1 } from "../../styles/tipography";
import { Servicio } from "@/gql/graphql";
import colors from "@/styles/colors";

interface RequisitosProps {
  servicio: Servicio;
}
const Requirements = ({ servicio }: RequisitosProps) => {
  const requisitos = servicio?.requisitos({
    pagination: {
      pageSize: 100,
    },
  });

  return requisitos?.length ? (
    <Section space itemScope itemType="https://schema.org/ItemList">
      <Title itemProp="name">REQUISITOS</Title>
      <RequirementsBox>
        <RequirementsList as="ul">
          {requisitos.map((item, index) => {
            return (
              <Requirement key={index} itemProp="itemListElement">
                {item?.requisito}
              </Requirement>
            );
          })}
        </RequirementsList>
      </RequirementsBox>
    </Section>
  ) : null;
};

export default Requirements;

const Section = styled.section`
  ${container}
`;

const Title = styled.h2`
  text-align: left;
  text-transform: uppercase;
  ${h1}
`;

const RequirementsList = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1.5rem 3rem;
  @include mq(md) {
    grid-template-columns: 1fr 1fr;
  }
  @include mq(lg) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Requirement = styled.li`
  margin-bottom: 1rem;
  text-align: left;
  @include mq(md) {
    text-align: left;
  }
`;

const RequirementsBox = styled.div`
  padding: 10%;
  border-radius: 1.5rem;
  position: relative;
  @include mq(md) {
    padding: 5%;
    border-radius: 2.5rem;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.primary.base};
    opacity: 0.15;
    border-radius: 2.5rem;
  }
`;
