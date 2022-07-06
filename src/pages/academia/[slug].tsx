import React from "react";

import { GetStaticProps } from "next";

import { useQuery, prepareReactRender, useHydrateCache } from "client";
import { PropsWithServerCache } from "@gqty/react";
import ArticuloBody from "templates/academia/ArticuloBody";
import ArticuloAside from "templates/academia/ArticuloAside";
import Layout from "components/Layout";
import Loading from "components/loading";

type PageProps = PropsWithServerCache<{
  slug: string;
}>;
const Page = ({ cacheSnapshot, slug }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });

  const query = useQuery();

  const articuloEntidad = query?.articles({
    filters: {
      slug: {
        eq: slug,
      },
    },
  })?.data[0];

  const categoria = articuloEntidad?.attributes?.category?.data?.attributes;

  if (query.$state.isLoading) {
    return <Loading full />;
  }

  return (
    <Layout>
      <ArticuloBody articulo={articuloEntidad} />
      <ArticuloAside articulo={articuloEntidad} />
    </Layout>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx: any) => {
  const slug = _ctx.params.slug;

  const { cacheSnapshot } = await prepareReactRender(<Page slug={slug} />);

  return {
    props: { cacheSnapshot, slug },
  };
};

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
