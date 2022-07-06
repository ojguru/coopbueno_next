import React from "react";
import Archivo from "templates/academia/archivo";

import { GetStaticProps } from "next";

import { useQuery, prepareReactRender, useHydrateCache } from "client";
import { PropsWithServerCache } from "@gqty/react";
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
  const categoria = query.categories({
    filters: {
      slug: {
        eq: slug,
      },
    },
  })?.data[0];

  const articulos = query.articles({
    filters: {
      category: {
        slug: {
          eq: slug,
        },
      },
    },
    pagination: {
      pageSize: 16,
    },
  })?.data;

  const categorias = query.categories({
    pagination: {
      pageSize: 100,
    },
  })?.data;

  if (query.$state.isLoading) {
    return <Loading full />;
  }

  return (
    <Layout>
      <Archivo
        titulo={categoria?.attributes?.name}
        descripcion={categoria?.attributes?.description}
        articulos={articulos}
        categorias={categorias}
      />
    </Layout>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx: any) => {
  const slug = _ctx.params.slug.toString();

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
