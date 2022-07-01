import React from "react";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";
import Image from "next/image";
import { Servicio } from "client";
import { getImageURL } from "lib/api";

interface ProductProps {
  servicio: Servicio;
}
const Producto = ({ servicio }: ProductProps) => {
  const nombre = servicio?.nombre;
  const descripcion = servicio?.descripcion;
  const imagen = servicio?.icono?.data?.attributes;

  return (
    <Section id="descripcion" space>
      <Container>
        <InfoContainer>
          <Title>{nombre}</Title>
          <Description
            dangerouslySetInnerHTML={{ __html: descripcion || "" }}
          />
        </InfoContainer>
        <MediaContainer>
          <Image
            src={getImageURL(imagen?.url)}
            alt={imagen?.alternativeText || ""}
            width={1080}
            height={1080}
            objectFit="contain"
          />
        </MediaContainer>
      </Container>
    </Section>
  );
};

export default Producto;

const Section = styled.section`
  ${container}
  padding: 0;
`;

const Container = styled.div`
  ${container}
  display: grid;
  gap: 3rem;
  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

const InfoContainer = styled.div`
  ${mq.md} {
    order: 2;
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
`;

const MediaContainer = styled.div`
  max-width: 30rem;
  margin: 0 auto;
  ${mq.md} {
    order: 1;
  }
`;

const Description = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: green;
    z-index: -1;
    opacity: 0.25;
    transform: translate(-50%, -50%);
  }
`;
