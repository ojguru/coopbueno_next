const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const SITE_URL = process.env.SITE_URL;
console.log(API_URL, SITE_URL);

import Head from "next/head";
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
  })?.data;
  const noticias = query.noticias({
    pagination: {
      pageSize: 3,
    },
  })?.data;
  const slides = query.slides()?.data;
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

  if (query.$state.isLoading) {
    return <Loading full />;
  }

  return (
    <Layout>
      <HomeCover portada={home?.portada} />
      <HomeSlider slides={slides} />
      <HomeServicios {...{ servicios }} />
      <HomeSocio {...{ home }} />
      <HomeAcademy posts={posts} />
      <HomeNews noticias={noticias} />
      <HomePromo {...{ home }} />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async (_ctx: any) => {
  const { cacheSnapshot } = await prepareReactRender(<Home />);

  return {
    props: { cacheSnapshot },
  };
};
