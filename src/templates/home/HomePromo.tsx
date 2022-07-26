import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq, container } from "components/grid";
import Image from "next/image";
import { h1 } from "styles/tipography";
import { getImageURL } from "lib/api";
import colors from "styles/colors";
import Cta from "components/Cta";

interface HomePromoProps {
  home?: any;
}
const HomePromo = ({ home }: HomePromoProps) => {
  const informacion = home.informacion;

  return informacion ? (
    <Section fluid space>
      <Container>
        <Image
          src={getImageURL(informacion.imagen.data.attributes.url)}
          alt={informacion.titulo}
          width={1080}
          height={1080}
          objectFit="contain"
        />
        <div>
          <Title>{informacion.titulo}</Title>
          <Description
            dangerouslySetInnerHTML={{ __html: informacion.descripcion }}
          />
          <Cta cta={informacion.cta} />
        </div>
      </Container>
    </Section>
  ) : null;
};

export default HomePromo;

const Section = styled.section`
  ${container}
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15%;
    padding-bottom: 15%;
    background-color: ${colors.primary.base};
    border-radius: 4rem;
    transform: translate(50%, 0) rotate(30deg);
    box-shadow: 0 1.5rem 5rem ${colors.primary.base};
    opacity: 0.7;
    z-index: -1;
  }
`;

const Container = styled.div`
  ${container}
  padding: 0;
  display: grid;

  ${mq.md} {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  ${mq.lg} {
    gap: 8rem;
  }
`;

const Title = styled.h2`
  ${({ color = "#75C151" }) => css`
    color: ${color};
    text-transform: uppercase;
    font-weight: 900;
    text-align: center;
    margin-bottom: 4rem;
    ${h1}
    ${mq.md} {
      text-align: left;
    }
  `}
`;

const Description = styled.div`
  ul,
  ol {
    padding-left: initial;
    margin-left: initial;
  }
`;

const LinkBox = styled.div`
  text-align: center;
  ${mq.md} {
    text-align: left;
  }
`;
