import React from "react";
import styled from "@emotion/styled";

const Page = () => {
  return (
    <>
      <Section>
        <Title>Página no encontrada</Title>
      </Section>
    </>
  );
};

export default Page;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-transform: uppercase;
`;
