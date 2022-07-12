import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";
import Loading from "components/loading";
import FeaturedMedia from "next/image";
import colors from "styles/colors";
import imagen from "../../../public/contacto.png";
import Formulario from "components/Formulario";
import { ComponentGeneralFormulario } from "client";

const Portada = () => {
  const [loaded, setLoaded] = useState(false);

  const formulario: ComponentGeneralFormulario = {
    id: "formulairo-862702b9-c601-459d-82ac-f51aa43ebbe6",
    formId: "862702b9-c601-459d-82ac-f51aa43ebbe6",
  };

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <>
      <StyledSection space>
        <Deco />
        <Header>
          <Title>Contacto</Title>
        </Header>
        <Container>
          <ContactImage>
            <FeaturedMedia src={imagen} alt="Contacto Coopbueno" priority />
          </ContactImage>
          <ContactForm>
            {loaded ? <Formulario formulario={formulario} /> : <Loading />}
          </ContactForm>
        </Container>
      </StyledSection>
    </>
  );
};

export default Portada;

const StyledSection = styled.section`
  ${container}
  padding: 0;
`;

const Container = styled.div`
  ${container}
  text-align: center;
  font-size: 0;
  display: grid;
  ${mq.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Header = styled.div`
  ${container}
`;

const ContactImage = styled.div`
  margin-bottom: 4rem;
  min-height: 100%;
`;

const ContactForm = styled.div`
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  border-radius: 1.5rem;
  position: relative;
  background-color: white;
  min-height: 50rem;
  display: grid;
  align-items: center;
  ${mq.lg} {
    padding: 2rem 2rem;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15rem;
    padding-bottom: 15rem;
    background-color: ${colors.green.base};
    box-shadow: 0 1rem 1.5rem ${colors.green.base};
    border-radius: 1.5rem;
    transform: translate(15%, 15%);
    z-index: -1;
    opacity: 0.4;
  }
`;

const Deco = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30rem;
  padding-bottom: 30rem;
  background-color: ${colors.green.base};
  box-shadow: 0 1.5rem 3rem ${colors.green.base};
  border-radius: 5rem;
  transform: translate(15%, 15%);
  z-index: -1;
  opacity: 0.7;
  transform: translate(-50%, 0) rotate(30deg);
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 20%;
    width: 20%;
    padding-bottom: 20%;
    background-color: ${colors.secondary.base};
    border-radius: 50%;
    transform: translate(0, -50%);
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  text-align: center;
  margin-bottom: 2.5rem;
  ${mq.md} {
    margin-bottom: 5rem;
  }
`;
