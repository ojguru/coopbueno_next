import React from "react";
import Archivo from "templates/noticias/archivo";

import { GetStaticProps } from "next";

import { useQuery, prepareReactRender, useHydrateCache } from "client";
import { PropsWithServerCache } from "@gqty/react";
import Layout from "components/Layout";
import Loading from "components/loading";

type PageProps = PropsWithServerCache<{}>;
const Page = ({ cacheSnapshot }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });

  const query = useQuery();
  const articulos = query.noticias({
    pagination: {
      pageSize: 16,
    },
  })?.data;

  if (query.$state.isLoading) {
    return <Loading full />;
  }

  return (
    <Layout>
      <Archivo titulo="Noticias" descripcion="Noticias" articulos={articulos} />
    </Layout>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx: any) => {
  const { cacheSnapshot } = await prepareReactRender(<Page />);

  return {
    props: { cacheSnapshot },
  };
};
