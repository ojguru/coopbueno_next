import React from "react";
import Portada from "templates/contacto/portada";
import ContactOffices from "templates/contacto/oficinas";

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
  const sucursales = query.sucursals({
    pagination: {
      pageSize: 100,
    },
    sort: ["orden:asc"],
  })?.data;

  if (query.$state.isLoading) {
    return <Loading full />;
  }

  return (
    <Layout>
      <Portada />
      <ContactOffices sucursales={sucursales} />
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
