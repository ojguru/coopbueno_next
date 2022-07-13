import styled from "@emotion/styled";
import { mq } from "components/grid";
import container, { mwLG, mwXL, gap } from "components/grid/container";
import Image from "next/image";
import colors from "styles/colors";
import { h6 } from "styles/tipography";
import Cta from "components/Cta";
import { getImageURL } from "lib/api";

interface HomeCoverProps {
  portada: any;
}
const HomeCover = ({ portada }: HomeCoverProps) => {
  const imagen = portada.imagen?.data?.attributes.url;

  return (
    <Cover as="section" fluid spaceBottom>
      <ImageContainer>
        <Image
          src={getImageURL(imagen)}
          width={1920}
          height={1080}
          priority
          objectFit="cover"
          objectPosition="75% 0%"
        />
      </ImageContainer>
      <Content>
        <Title>{portada.titular}</Title>

        <Copy>{portada.copy}</Copy>

        <LinkBox>
          <Cta cta={portada.cta} />
        </LinkBox>
      </Content>
    </Cover>
  );
};

export default HomeCover;

const Cover = styled.section`
  ${container}
  display: grid;
  align-items: center;
  max-width: initial;
  ${mq.lg} {
    grid-template-columns: 5% 95%;
    max-width: ${mwLG};
  }
  ${mq.xl} {
    max-width: ${mwXL};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  right: 0;
  margin: 0 -${gap};
  z-index: -1;
  ${mq.lg} {
    order: 2;
    min-width: 100rem;
  }
  ${mq.xl} {
    min-width: 130rem;
  }
`;

const Content = styled.div`
  padding-top: 2rem;
  text-align: center;
  text-shadow: 0.1rem 0.1rem 0.1rem white;
  ${mq.lg} {
    order: 1;
    min-width: 50rem;
    padding-top: 10rem;
    padding-bottom: 15rem;
    text-align: left;
  }
`;

const Title = styled.h2`
  text-shadow: 1px 1px 2px ${colors.shadow.dark};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 3rem;
  color: ${colors.green.base};
  text-align: inherit;
  font-size: 2.9rem;
  font-weight: 900;
  line-height: 1.138888889;
  ${mq.sm} {
    font-size: 3.2rem;
  }
  ${mq.md} {
    font-size: 4rem;
  }
  ${mq.lg} {
    font-size: 4.5rem;
  }
  ${mq.xl} {
    font-size: 5rem;
  }
`;

const Copy = styled.p`
  margin-bottom: 40px;
  text-align: inherit;
  ${h6}
`;

const LinkBox = styled.div`
  text-align: inherit;
`;
