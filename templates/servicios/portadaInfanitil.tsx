import React from "react";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";
import Image from "next/image";
import { h1 } from "styles/tipography";
import Cta from "components/Cta";
import { Servicio } from "client";
import { getImageURL } from "lib/api";
import space from "../../../public/ahorro-infantil/cover_space.webp";

interface PortadaProps {
  servicio?: Servicio;
}
const Portada = ({ servicio }: PortadaProps) => {
  const portada = servicio?.portada;
  const title = portada?.titular;
  const copy = portada?.copy;
  const media = portada?.imagen?.data?.attributes?.url;
  const cta = {
    ...portada?.cta,
    uri: "#descripcion",
  };

  return portada ? (
    <Section space>
      <Container>
        <Content>
          <Title itemProp="slogan">{title}</Title>
          <Copy itemProp="disambiguatingDescription">{copy}</Copy>
          <Cta cta={cta} />
        </Content>
        <ImageBlock>
          <Media>
            <ImageWrapper>
              <ImageContainer>
                <MediaWrapper>
                  <SImage>
                    <Image
                      src={getImageURL(media)}
                      alt={servicio.nombre}
                      width={1080}
                      height={1911.6}
                      objectFit="cover"
                      objectPosition="50% 0%"
                      priority
                    />
                  </SImage>
                </MediaWrapper>
              </ImageContainer>
            </ImageWrapper>
          </Media>
          <Space>
            <Image
              src={space}
              alt="Universo Coopbueno Espacio Portada"
              priority
            />
          </Space>
        </ImageBlock>
      </Container>
    </Section>
  ) : null;
};

export default Portada;

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
    align-items: center;
  }
`;

const Content = styled.div`
  margin-bottom: 15rem;
  position: relative;
  z-index: 2;
  ${mq.lg} {
    margin-bottom: initial;
  }
`;

const Title = styled.h2`
  ${h1}
  text-transform: uppercase;
  margin-bottom: 0;
`;

const Copy = styled.p`
  margin-bottom: 4rem;
  margin-top: 2rem;
`;

const ImageBlock = styled.div`
  transform-origin: 0% 0%;
  transform: translate(0, 30%) rotate(-35deg);
  border-radius: 5rem;
  position: relative;
  ${mq.md} {
    transform: translate(0, 10%) rotate(-35deg);
  }
  ${mq.lg} {
    transform: translate(0, 40%) rotate(-35deg);
  }
`;

const Media = styled.div`
  border-radius: 5rem;
  /* overflow: hidden; */
  padding-top: 20rem;
  margin-top: -20rem;
  width: 200%;
  box-sizing: content-box;
`;

const ImageWrapper = styled.div`
  border-radius: inherit;
`;
const ImageContainer = styled.div`
  transform: rotate(35deg);
  width: calc(100% / 2);
`;

const MediaWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  transform: scale(0.8) translate(-15%, 35%);
`;

const SImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Space = styled.div`
  position: absolute;
  bottom: 0%;
  left: 0;
  width: 200%;
  z-index: -1;
  transform-origin: center center;
  transform: rotate(45deg) translate(-10%, 30%);
  ${mq.md} {
    width: 250%;
  }
`;
