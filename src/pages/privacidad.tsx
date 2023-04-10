import React, { Suspense } from "react";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";
import PageHeader from "components/PageHeader";
import { h3 } from "styles/tipography";

import { GetStaticProps } from "next";

import {
  useQuery,
  prepareReactRender,
  useHydrateCache,
  Servicio,
} from "client";
import { PropsWithServerCache } from "@gqty/react";
import Layout from "components/Layout";
import Loading from "components/loading";
import { NextSeo } from "next-seo";
import { SITE_NAME, SITE_URL } from "lib/constants";

type PageProps = PropsWithServerCache<{}>;
const Page = ({ cacheSnapshot }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });

  const query = useQuery();
  const servicios = query.servicios({
    pagination: {
      pageSize: 100,
    },
  })?.data;

  return servicios?.length ? (
    <Suspense fallback={<Loading full />}>
      <NextSeo
        title="Política de privacidad Coopbueno Móvil"
        description="Política de privacidad aplicación Coopbueno Móvil"
        openGraph={{
          url: `${SITE_URL}`,
          title: "Política de privacidad Coopbueno Móvil",
          description: "Política de privacidad aplicación Coopbueno Móvil",
          site_name: SITE_NAME,
        }}
      />
      <Layout>
        <Section space>
          <PageHeader title={"Política de privacidad Coopbueno Móvil"} />
          <h2>Seguridad de los datos</h2>
          <p>
            El desarrollador ha proporcionado esta información sobre cómo la
            aplicación recoge, comparte y trata tus datos.
          </p>
          <h3>No se ha declarado ninguna recogida de datos</h3>
          <p>
            El desarrollador indica que esta aplicación no recoge datos de
            usuario.
          </p>
          <h3>No se comparten datos con terceros</h3>
          <p>
            El desarrollador indica que esta aplicación no comparte datos de
            usuario con otras empresas u organizaciones.
          </p>
        </Section>
      </Layout>
    </Suspense>
  ) : null;
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx: any) => {
  const { cacheSnapshot } = await prepareReactRender(<Page />);

  return {
    props: { cacheSnapshot },
  };
};

const Section = styled.section`
  ${container}
`;

const Services = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;
  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }
  ${mq.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Service = styled.div``;

const ServiceName = styled.h2`
  ${h3}
  margin-bottom: 5px;
`;

const Table = styled.table`
  margin: 0;
  border: initial;
`;

const TBody = styled.tbody``;

const Tr = styled.tr`
  &:nth-of-type(odd) {
    background-color: #f5f5f5;
  }
`;
const Td = styled.td`
  font-weight: normal;
  vertical-align: top;
  padding: 10px;
  border: initial;
  word-break: initial;
  &:first-of-type {
    font-weight: bold;
  }
`;

const Note = styled.p`
  font-style: italic;
`;
