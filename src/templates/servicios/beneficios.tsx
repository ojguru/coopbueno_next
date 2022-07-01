import React from "react";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";
import { h1, h5 } from "../../styles/tipography";
import Image from "next/image";
import Link from "next/link";
import colors from "styles/colors";
import { Servicio } from "client";
import { getImageURL } from "lib/api";

interface BeneficiosProps {
  servicio: Servicio;
}
const Benefits = ({ servicio }: BeneficiosProps) => {
  const beneficios = servicio?.beneficios()?.data;

  return beneficios?.length ? (
    <Section space>
      <Title>BENEFICIOS</Title>
      <BenefitsList
        as="ul"
        itemProp="isRelatedTo"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {beneficios.map((item, index) => {
          const beneficio = item.attributes;
          const name = beneficio?.nombre;
          const description = beneficio?.portada?.titular;
          const media = beneficio?.icono?.data?.attributes;
          return beneficio ? (
            <li
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/FinancialProduct"
            >
              <Link href={`/servicios/${beneficio.slug}`} passHref>
                <StyledLink>
                  <Benefit>
                    <BenefitMedia>
                      <Image
                        src={getImageURL(media?.url)}
                        alt={name}
                        width={1080}
                        height={1080}
                        objectFit="contain"
                      />
                    </BenefitMedia>
                    <BenefitBody>
                      <BenefitName itemProp="name">{name}</BenefitName>
                      <BenefitDescription
                        dangerouslySetInnerHTML={{ __html: description || "" }}
                      />
                    </BenefitBody>
                  </Benefit>
                </StyledLink>
              </Link>
            </li>
          ) : null;
        })}
      </BenefitsList>
    </Section>
  ) : null;
};

export default Benefits;

const Section = styled.section`
  ${container}
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
  text-transform: uppercase;
  ${h1}
`;

const BenefitsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  gap: 3rem;
  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }
  ${mq.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const Benefit = styled.div`
  margin: 0;
  margin-bottom: 4rem;
  list-style: none;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: auto 3fr;
`;

const BenefitBody = styled.div``;

const BenefitName = styled.h3`
  ${h5}
  text-transform: uppercase;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const BenefitDescription = styled.div``;

const BenefitMedia = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${colors.gray.lighter};
  color: white;
  box-sizing: border-box;
  padding: 20%;
`;
