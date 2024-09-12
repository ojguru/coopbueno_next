import Layout from "@/components/Layout";
import { getImageURL } from "@/lib/api";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { NextSeo } from "next-seo";
import React, { Suspense } from "react";
import Cover from "templates/about/about-cover";
import Promese from "templates/about/about-promese";
import Slides from "templates/about/about-slides";
import image from "../../public/nosotros.jpg";

import { GetStaticProps } from "next";
import { prepareReactRender, useHydrateCache } from "@/gql/graphql";
import { PropsWithServerCache } from "@gqty/react";
import Loading from "@/components/loading";

type PageProps = PropsWithServerCache<{}>;
const Page = ({ cacheSnapshot }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });

  return (
    <Suspense fallback={<Loading full />}>
      <NextSeo
        title="Nosotros"
        description="Conoce nuestra historia."
        openGraph={{
          url: `${SITE_URL}`,
          title: "Nosotros",
          description: "Conoce nuestra historia.",
          images: [
            {
              url: getImageURL(image?.src),
              width: image?.width || 900,
              height: image?.height || 800,
              alt: "Sobre nosotros",
              // type: image?.,
            },
          ],
          site_name: SITE_NAME,
        }}
      />
      <Layout>
        <Cover />
        <Promese />
        <Slides />
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
