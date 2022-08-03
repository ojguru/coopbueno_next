import React from "react";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";
import Image from "next/image";
import { h1 } from "styles/tipography";
import colors from "styles/colors";
import { getImageURL } from "lib/api";
import Cta from "components/Cta";

interface HomeSocioProps {
  home: any;
}
const HomeSocio = ({ home }: HomeSocioProps) => {
  const razones = home.razones;

  return home.razones ? (
    <Section>
      <Container space>
        <Media>
          <Image
            src={getImageURL(razones.imagen.data.attributes.url)}
            alt={razones.imagen.data.attributes.alternativeText}
            width={1080}
            height={1080}
            objectFit="contain"
          />
        </Media>
        <Content>
          <Title>{razones.titulo}</Title>
          <Description
            dangerouslySetInnerHTML={{ __html: razones.descripcion }}
          />
          <Cta cta={razones.cta} />
        </Content>
      </Container>
    </Section>
  ) : null;
};

export default HomeSocio;

const Section = styled.section`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background-color: ${colors.green.lighter};
    border-radius: 5rem;
    opacity: 0.1;
    transform: translate(-100%, -75%) rotate(15deg);
    z-index: -1;
    ${mq.md} {
      padding-bottom: 40%;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    padding-bottom: 20%;
    background-color: ${colors.yellow.base};
    border-radius: 50%;
    transform: translate(50%, 0);
    opacity: 0.3;
    z-index: -1;
    ${mq.md} {
      width: 10%;
      padding-bottom: 10%;
    }
  }
`;

const Container = styled.div`
  ${container}
  ${mq.lg} {
    display: grid;
    gap: 3rem;
    grid-template-columns: 2fr 3fr;
  }
`;

const Media = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  ${mq.lg} {
    margin: 0;
  }
`;

const Content = styled.div``;

const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 900;
  text-align: center;
  margin-bottom: 4rem;
  ${h1}
  ${mq.md} {
    text-align: left;
  }
`;

const Description = styled.div``;

const LinkBox = styled.div`
  text-align: center;
  ${mq.md} {
    text-align: left;
  }
`;
