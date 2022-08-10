import React, { Suspense } from "react";
import styled from "@emotion/styled";
import { container } from "components/grid";
import Layout from "components/Layout";
import Portada from "templates/servicios/portada";
import Producto from "templates/servicios/producto";
import Ventajas from "templates/servicios/ventajas";
import Requisitos from "templates/servicios/requisitos";
import Beneficios from "templates/servicios/beneficios";

import dynamic from "next/dynamic";
const Conversion = dynamic(() => import("templates/servicios/conversion"), {
  ssr: false,
});

import Video from "templates/servicios/video";
import Loading from "components/loading";
import { NextSeo } from "next-seo";

import { GetStaticProps } from "next";

import {
  useQuery,
  prepareReactRender,
  useHydrateCache,
  ENUM_COMPONENTSHAREDMETASOCIAL_SOCIALNETWORK,
} from "client";
import { PropsWithServerCache } from "@gqty/react";
import { getImageURL } from "lib/api";
import { SITE_NAME, SITE_URL } from "lib/constants";

type PageProps = PropsWithServerCache<{
  slug?: string;
}>;
const Page = ({ cacheSnapshot, slug }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });

  const query = useQuery();

  const servicioEntidad = query.servicios({
    filters: {
      slug: {
        eq: slug,
      },
    },
  })?.data[0];

  const servicio = servicioEntidad?.attributes;

  //SEO
  const image = servicio?.portada?.imagen?.data?.attributes;

  const seo = servicio?.seo;

  const facebookMeta = seo
    ?.metaSocial()
    ?.filter(
      (item) =>
        item?.socialNetwork ===
        ENUM_COMPONENTSHAREDMETASOCIAL_SOCIALNETWORK.Facebook
    )[0];

  const facebookMetaImage = facebookMeta?.image?.data?.attributes;

  return servicio ? (
    <Suspense fallback={<Loading full />}>
      <NextSeo
        title={seo?.metaTitle || servicio?.nombre}
        description={seo?.metaDescription || servicio?.portada?.copy}
        canonical={seo?.canonicalURL || `${SITE_URL}/${servicio?.slug}`}
        openGraph={{
          url: `${SITE_URL}/${servicio?.slug}`,
          title: facebookMeta?.title || servicio?.nombre,
          description: facebookMeta?.description || servicio?.portada?.copy,
          images: [
            {
              url: getImageURL(facebookMetaImage?.url || image?.url),
              width: facebookMetaImage?.width || image?.width || 900,
              height: facebookMetaImage?.height || image?.height || 800,
              alt:
                facebookMetaImage?.alternativeText ||
                image?.alternativeText ||
                servicio?.nombre,
              type: facebookMetaImage?.mime || image?.mime,
            },
          ],
          site_name: SITE_NAME,
        }}
        noindex={seo?.metaRobots?.includes("noindex")}
        nofollow={seo?.metaRobots?.includes("nofollow")}
      />
      <Layout>
        <Section space>
          <Portada servicio={servicio} />
          <Producto servicio={servicio} />
          <Video servicio={servicio} />
          <Ventajas servicio={servicio} />
          <Beneficios servicio={servicio} />
          <Requisitos servicio={servicio} />
          <Conversion servicio={servicio} />
        </Section>
      </Layout>
    </Suspense>
  ) : null;
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx: any) => {
  const slug = _ctx.params.slug.toString();

  const { cacheSnapshot } = await prepareReactRender(<Page slug={slug} />);

  // NOT FOUND - DETERMINAMOS SI NO EXISTEN DATOS EN LA CONSULTA DEL SNAPSHOT
  const snapShot: any = await JSON.parse(cacheSnapshot);
  const cache = await snapShot.cache;
  const keys = Object.keys(cache).filter((key) => key.includes("servicios"));

  const notFound =
    keys.filter(
      (key) =>
        cache[key]?.data?.filter((item: any) => item.attributes?.slug === slug)
          .length > 0
    ).length === 0;

  return {
    notFound: notFound,
    props: {
      cacheSnapshot,
      slug,
    },
  };
};

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

const Section = styled.section`
  ${container}
`;
