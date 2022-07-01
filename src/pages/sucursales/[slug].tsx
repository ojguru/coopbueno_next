import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";
import Image from "next/image";
import Link from "next/link";
import {
  LocationIcon,
  ClockIcon,
  PhoneIcon,
  SucursalIMG,
} from "components/icons";

import { GetStaticProps } from "next";
import { useQuery, prepareReactRender, useHydrateCache } from "client";
import { PropsWithServerCache } from "@gqty/react";
import { getImageURL } from "lib/api";
import colors from "styles/colors";
import Layout from "components/Layout";

type PageProps = PropsWithServerCache<{
  slug: string;
}>;
const Page = ({ cacheSnapshot, slug }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });

  const query = useQuery();
  const sucursalEntidad = query.sucursals({
    filters: {
      slug: {
        eq: slug,
      },
    },
  })?.data[0];

  const sucursal = sucursalEntidad?.attributes;

  return sucursal ? (
    <Layout>
      <Section fluid spaceBottom>
        <CardImage>
          <SucursalImage
            src={getImageURL(sucursal?.imagen?.data?.attributes?.url)}
            alt={sucursal.nombre}
            width={1920}
            height={1080}
            objectFit="cover"
            priority
            //   sizeXL="40%"
          />
        </CardImage>
        <Container>
          <SucursalCard>
            <Content>
              <CardHeader>
                <SucursalName>{sucursal.nombre}</SucursalName>
              </CardHeader>
              <CardBody>
                <SucursalAddress>
                  <LocationIcon />
                  <InfoWrapper>{sucursal.direccion}</InfoWrapper>
                </SucursalAddress>
                <SucursalSchedule>
                  <ClockIcon />
                  <InfoWrapper>{sucursal.horario}</InfoWrapper>
                </SucursalSchedule>
                <SucursalPhoneBox>
                  <PhoneIcon />
                  <InfoWrapper>
                    {sucursal.telefonos().map((item, index) => {
                      const phone = item?.telefono;

                      return (
                        <Link href={`tel:+${phone}`} key={index} passHref>
                          <SucursalPhone>{phone}</SucursalPhone>
                        </Link>
                      );
                    })}
                  </InfoWrapper>
                </SucursalPhoneBox>
              </CardBody>
              <LinkBox>
                <ReadMore href={sucursal.ubicacion ?? ""}>Ubicación</ReadMore>
              </LinkBox>
            </Content>
            <SucursalIMG />
          </SucursalCard>
        </Container>
      </Section>
    </Layout>
  ) : null;
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx: any) => {
  const slug = _ctx.params.slug.toString();
  const { cacheSnapshot } = await prepareReactRender(<Page slug={slug} />);

  return {
    props: {
      cacheSnapshot,
      slug,
    },
  };
};

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

const Section = styled.section`
  ${container}
  padding: 0;
`;

const Container = styled.div`
  ${container}
`;

const SucursalCard = styled.div`
  box-shadow: 1rem 1rem 2.5rem rgba(0, 0, 0, 0.15);
  border-radius: 3rem;
  margin-top: -10%;
  background-color: white;
  position: relative;
  padding: 1.5rem;
  display: grid;
  gap: 3rem;
  ${mq.sm} {
    padding: 5%;
  }
  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    height: 0;
    width: 8%;
    padding-bottom: 8%;
    background-color: ${colors.primary.base};
    transform: translate(50%, -50%);
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 1rem;
    height: 0;
    width: 8%;
    padding-bottom: 6%;
    background-color: ${colors.primary.light};
    box-shadow: 0.5rem 0.5rem 1.5rem ${colors.primary.light};
    transform: translate(-75%, -50%);
  }
`;

const Content = styled.div``;

const CardImage = styled.div`
  width: 100%;
  display: grid;
  overflow: hidden;
  clip-path: ellipse(75% 100% at 50% 0%);
  ${mq.lg} {
    height: 70vh;
  }
`;

const SucursalImage = styled(Image)``;

const CardHeader = styled.div``;

const SucursalName = styled.h1`
  margin: 10px 0;
  text-transform: uppercase;
`;

const CardBody = styled.div`
  div :first-child {
    margin-top: 0.6rem;
  }
`;
const iconStyle = css`
  display: flex;
  align-items: flex-start;
  line-height: 1.8rem;
  svg {
    flex-basis: 1.8rem;
    color: green;
    width: 2.5rem;
    margin-right: 1rem;
  }
`;

const SucursalAddress = styled.p`
  ${iconStyle}
`;

const SucursalSchedule = styled.p`
  ${iconStyle}
`;

const SucursalPhoneBox = styled.div`
  ${iconStyle}
`;

const InfoWrapper = styled.span`
  display: inline-block;
  vertical-align: top;
  flex: 1;
`;

const SucursalPhone = styled.a`
  text-decoration: none;
  display: block;
  margin: 11px 0;
`;

const LinkBox = styled.div`
  margin-top: 4rem;
`;

const ReadMore = styled(Link)`
  cursor: pointer;
  color: ${colors.primary.base};
  text-decoration: none;
  &:after {
    content: " ▶";
  }
`;
