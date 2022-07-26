import React from "react";
import Portada from "templates/contacto/portada";
import ContactOffices from "templates/contacto/oficinas";

import { GetStaticProps } from "next";

import { useQuery, prepareReactRender, useHydrateCache } from "client";
import { PropsWithServerCache } from "@gqty/react";
import Layout from "components/Layout";
import Loading from "components/loading";
import { NextSeo } from "next-seo";
import { SITE_NAME, SITE_URL } from "lib/constants";
import { getImageURL } from "lib/api";
import image from "../../public/contacto.png";

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
    <>
      <NextSeo
        title="Contacto"
        description="Haz contacto con nosotros a través de los canales que tenesmos disponibles para ti."
        openGraph={{
          url: `${SITE_URL}`,
          title: "Contacto",
          description:
            "Haz contacto con nosotros a través de los canales que tenesmos disponibles para ti.",
          images: [
            {
              url: getImageURL(image?.src),
              width: image?.width || 900,
              height: image?.height || 800,
              alt: "Contacto Coopbueno",
              // type: image?.mime,
            },
          ],
          site_name: SITE_NAME,
        }}
      />
      <Layout>
        <Portada />
        <ContactOffices sucursales={sucursales} />
      </Layout>
    </>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx: any) => {
  const { cacheSnapshot } = await prepareReactRender(<Page />);

  return {
    props: { cacheSnapshot },
  };
};
