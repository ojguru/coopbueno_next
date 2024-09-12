import React from "react";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";
import Image from "next/image";
import imagen from "../../../public/nosotros.jpg";
import colors from "styles/colors";

const Cover = () => {
  return (
    <Section space>
      <Container>
        <MediaWrapper>
          <Media>
            <Image
              src={imagen}
              alt="Coopbueno"
              width={1920}
              height={1920}
              objectFit="cover"
              priority
            />
          </Media>
        </MediaWrapper>
        <Content>
          <Title>Nosotros</Title>
          <p>
            La Cooperativa de Ahorro y Crédito Momón Bueno, Inc. con sede
            principal en el municipio de Partido, Dajabón fue fundada el 26 de
            junio de 1968.
          </p>
          <p>
            Motivados por el deseo de crecer, de comercializar sus productos
            agrícolas y de ofrecer otros servicios al municipio de Partido, doce
            hombres de esta progresista comunidad se reúnen con el ideal de
            formar una organización para dichos fines. Bajo la asesoría de la
            iglesia católica y del Instituto de Desarrollo y Crédito Cooperativo
            (IDECOOP) la entidad al final varía sus objetivos y da origen a lo
            que hoy conocemos como Cooperativa de Ahorro y Crédito Momón Bueno,
            Inc, una institución con solidez, proyección y visión de desarrollo
            individual y colectivo.
          </p>
        </Content>
      </Container>
    </Section>
  );
};

export default Cover;

const Section = styled.section`
  ${container}
  padding: 0;
`;

const Container = styled.div`
  ${container}
  @include mq(lg) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  @include mq(lg) {
    order: 1;
  }
`;

const MediaWrapper = styled.div`
  position: relative;
  margin-top: -25%;
  transform: scale(1.2) translate(25%, 0);
  height: auto;
  @include mq(lg) {
    order: 2;
    transform-origin: 0 50%;
    transform: scale(1.3) translate(5%, 0);
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 10%;
    left: 10%;
    width: 10%;
    padding-bottom: 10%;
    background-color: ${colors.secondary.base};
    z-index: 2;
    border-radius: 50%;
  }
`;

const Media = styled.div`
  border-radius: 50%;
  overflow: hidden;
  font-size: 0;
`;
