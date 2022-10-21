import React, { Suspense } from "react";
import styled from "@emotion/styled";

import HomeCover from "templates/home/HomeCover";
import HomeAcademy from "templates/home/HomeAcademy";
import HomeNews from "templates/home/HomeNews";
import HomeSocio from "templates/home/HomeSocio";
import HomePromo from "templates/home/HomePromo";
import HomeSlider from "templates/home/HomeSlider";
import HomeServicios from "templates/home/HomeServicios";
import { GetStaticProps } from "next";
import Layout from "components/Layout";

import {
  useQuery,
  prepareReactRender,
  useHydrateCache,
  ENUM_SERVICIO_CATEGORIA,
} from "client";
import { PropsWithServerCache } from "@gqty/react";
import Loading from "components/loading";
import { NextSeo } from "next-seo";
import { SITE_NAME, SITE_URL } from "lib/constants";
import { getImageURL } from "lib/api";

type HomeProps = PropsWithServerCache<{}>;
const Home = ({ cacheSnapshot }: HomeProps) => {
  useHydrateCache({
    cacheSnapshot,
  });

  const query = useQuery();
  const home = query?.homepage?.data?.attributes;
  const posts = query.articles({
    pagination: {
      pageSize: 3,
    },
    sort: ["publishedAt:desc"],
  })?.data;
  const noticias = query.noticias({
    pagination: {
      pageSize: 3,
    },
    sort: ["publishedAt:desc"],
  })?.data;
  const slides = query.slides({
    sort: ["publishedAt:desc"],
  })?.data;
  const servicios = query.servicios({
    pagination: {
      pageSize: 100,
    },
    filters: {
      categoria: {
        in: [
          ENUM_SERVICIO_CATEGORIA.ahorro,
          ENUM_SERVICIO_CATEGORIA.prestamos,
          ENUM_SERVICIO_CATEGORIA.facilidades,
        ],
      },
    },
    sort: ["nombre:asc"],
  })?.data;

  //SEO
  const image = home?.portada?.imagen.data?.attributes;

  return (
    <Suspense fallback={<Loading full />}>
      <NextSeo
        title="Apoyando tus sueños"
        description="En Coopbueno sabemos el valor de tus sueños, contamos con todas las herramientas financieras para alcanzar todo lo que te propongas."
        canonical={`${SITE_URL}`}
        openGraph={{
          url: `${SITE_URL}`,
          title: "Apoyando tus sueños",
          description:
            "En Coopbueno sabemos el valor de tus sueños, contamos con todas las herramientas financieras para alcanzar todo lo que te propongas.",
          images: [
            {
              url: getImageURL(image?.url),
              width: image?.width || 900,
              height: image?.height || 800,
              alt: image?.alternativeText || "Coopbueno apoyando tus sueños",
              type: image?.mime,
            },
          ],
          site_name: SITE_NAME,
        }}
      />
      <Layout>
        <Title>Coopbueno</Title>
        <HomeCover portada={home?.portada} />
        <HomeSlider slides={slides} />
        <HomeServicios {...{ servicios }} />
        <HomeSocio {...{ home }} />
        <HomeAcademy posts={posts} />
        <HomeNews noticias={noticias} />
        <HomePromo {...{ home }} />
      </Layout>
    </Suspense>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async (_ctx: any) => {
  const { cacheSnapshot } = await prepareReactRender(<Home />);

  return {
    props: { cacheSnapshot },
  };
};

const Title = styled.h1`
  display: none;
`;
