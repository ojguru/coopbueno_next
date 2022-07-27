import React, { Suspense } from "react";
import Archivo from "templates/academia/archivo";

import { GetStaticProps } from "next";

import { useQuery, prepareReactRender, useHydrateCache } from "client";
import { PropsWithServerCache } from "@gqty/react";
import Layout from "components/Layout";
import Loading from "components/loading";
import { NextSeo } from "next-seo";
import { SITE_NAME, SITE_URL } from "lib/constants";
import { getImageURL } from "lib/api";

type PageProps = PropsWithServerCache<{}>;
const Page = ({ cacheSnapshot }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });

  const query = useQuery();
  const articulos = query.articles({
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

  return (
    <Suspense fallback={<Loading full />}>
      <NextSeo
        title="Academia de sueños"
        description="Conocimiento que te acerca a tus sueños."
        openGraph={{
          url: `${SITE_URL}`,
          title: "Academia de sueños",
          description: "Conocimiento que te acerca a tus sueños.",
          site_name: SITE_NAME,
        }}
      />
      <Layout>
        <Archivo
          titulo="Academia de sueños"
          descripcion="Conocimiento que te acerca a tus sueños"
          articulos={articulos}
          categorias={categorias}
        />
      </Layout>
    </Suspense>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx: any) => {
  const { cacheSnapshot } = await prepareReactRender(<Page />);

  return {
    props: { cacheSnapshot },
  };
};
