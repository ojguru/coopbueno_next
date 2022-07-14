import React from "react";
import Archivo from "templates/academia/archivo";

import { GetStaticProps } from "next";

import { useQuery, prepareReactRender, useHydrateCache } from "client";
import { PropsWithServerCache } from "@gqty/react";
import Layout from "components/Layout";
import Loading from "components/loading";
import { NextSeo } from "next-seo";
import { SITE_NAME, SITE_URL } from "lib/constants";

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
    sort: ["createdAt:desc"],
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
    <>
      <NextSeo
        title={`Categoría ${categoria?.attributes?.name} - Academia de Sueños`}
        description={categoria?.attributes?.description}
        canonical={`${SITE_URL}/${categoria?.attributes?.slug}`}
        openGraph={{
          url: `${SITE_URL}/${categoria?.attributes?.slug}`,
          title: `Categoría ${categoria?.attributes?.name} - Academia de Sueños`,
          description: categoria?.attributes?.description,
          site_name: SITE_NAME,
        }}
      />
      <Layout>
        <Archivo
          titulo={categoria?.attributes?.name}
          descripcion={categoria?.attributes?.description}
          articulos={articulos}
          categorias={categorias}
        />
      </Layout>
    </>
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
