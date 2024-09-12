import React, { Suspense } from "react";
import Archivo from "templates/noticias/archivo";

import { GetStaticProps } from "next";

import { useQuery, prepareReactRender, useHydrateCache } from "@/gql/graphql";
import { PropsWithServerCache } from "@gqty/react";
import Layout from "@/components/Layout";
import Loading from "@/components/loading";
import { NextSeo } from "next-seo";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { getImageURL } from "@/lib/api";

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
    sort: ["createdAt:desc"],
  })?.data;

  return (
    <Suspense fallback={<Loading full />}>
      <NextSeo
        title="Noticias"
        description="Listado de nocitias de Coopbueno."
        openGraph={{
          url: `${SITE_URL}`,
          title: "Noticias",
          description: "Listado de nocitias de Coopbueno.",
          site_name: SITE_NAME,
        }}
      />
      <Layout>
        <Archivo
          titulo="Noticias"
          descripcion="Noticias"
          articulos={articulos}
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
