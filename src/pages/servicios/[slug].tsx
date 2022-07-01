import React from "react";
import styled from "@emotion/styled";
import { container } from "components/grid";
import Layout from "components/Layout";
import Portada from "templates/servicios/portada";
import Producto from "templates/servicios/producto";
import Ventajas from "templates/servicios/ventajas";
import Requisitos from "templates/servicios/requisitos";
import Beneficios from "templates/servicios/beneficios";
import Conversion from "templates/servicios/conversion";
import Video from "templates/servicios/video";

import { GetStaticProps } from "next";

import { useQuery, prepareReactRender, useHydrateCache } from "client";
import { PropsWithServerCache } from "@gqty/react";

type PageProps = PropsWithServerCache<{
  slug?: string;
}>;
const Page = ({ cacheSnapshot, slug }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });

  const query = useQuery();
  const servicioEntidad = query.servicios({
    filters: {
      slug: {
        eq: slug,
      },
    },
  })?.data[0];

  const servicio = servicioEntidad?.attributes;

  return servicio ? (
    <Layout>
      <Section space>
        <Portada servicio={servicio} />
        <Producto servicio={servicio} />
        <Video servicio={servicio} />
        <Ventajas servicio={servicio} />
        <Beneficios servicio={servicio} />
        <Requisitos servicio={servicio} />
        <Conversion servicio={servicio} />
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
`;
