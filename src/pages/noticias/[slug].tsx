import React from "react";

import { GetStaticProps } from "next";

import {
  useQuery,
  prepareReactRender,
  useHydrateCache,
  ENUM_COMPONENTSHAREDMETASOCIAL_SOCIALNETWORK,
} from "client";
import { PropsWithServerCache } from "@gqty/react";
import ArticuloBody from "templates/noticias/ArticuloBody";
import ArticuloAside from "templates/noticias/ArticuloAside";
import Layout from "components/Layout";
import Loading from "components/loading";
import { NextSeo } from "next-seo";
import { SITE_NAME, SITE_URL } from "lib/constants";
import { getImageURL } from "lib/api";

type PageProps = PropsWithServerCache<{
  slug: string;
}>;
const Page = ({ cacheSnapshot, slug }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });

  const query = useQuery();

  const articuloEntidad = query.noticias({
    filters: {
      slug: {
        eq: slug,
      },
    },
  })?.data[0];

  const relacionados = query.noticias({
    pagination: {
      pageSize: 4,
    },
    filters: {
      slug: {
        notContains: slug,
      },
    },
  })?.data;

  if (query.$state.isLoading) {
    return <Loading full />;
  }

  //SEO
  const articulo = articuloEntidad?.attributes;
  const image = articulo?.imagen?.data?.attributes;

  const seo = articulo?.seo;

  const facebookMeta = seo
    ?.metaSocial()
    ?.filter(
      (item) =>
        item?.socialNetwork ===
        ENUM_COMPONENTSHAREDMETASOCIAL_SOCIALNETWORK.Facebook
    )[0];

  const facebookMetaImage = facebookMeta?.image?.data?.attributes;

  return (
    <>
      <NextSeo
        title={seo?.metaTitle || articulo?.titulo}
        description={seo?.metaDescription || articulo?.descripcion}
        canonical={seo?.canonicalURL || `${SITE_URL}/${articulo?.slug}`}
        openGraph={{
          url: `${SITE_URL}/${articulo?.slug}`,
          title: facebookMeta?.title || articulo?.titulo,
          description: facebookMeta?.description || articulo?.descripcion,
          images: [
            {
              url: getImageURL(facebookMetaImage?.url || image?.url),
              width: facebookMetaImage?.width || image?.width || 900,
              height: facebookMetaImage?.height || image?.height || 800,
              alt:
                facebookMetaImage?.alternativeText ||
                image?.alternativeText ||
                articulo?.titulo,
              type: facebookMetaImage?.mime || image?.mime,
            },
          ],
          site_name: SITE_NAME,
        }}
        noindex={seo?.metaRobots?.includes("noindex")}
        nofollow={seo?.metaRobots?.includes("nofollow")}
      />
      <Layout>
        <ArticuloBody articulo={articuloEntidad} />
        <ArticuloAside relacionados={relacionados} articulo={articuloEntidad} />
      </Layout>
    </>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx: any) => {
  const slug = _ctx.params.slug.toString();

  const { cacheSnapshot } = await prepareReactRender(<Page slug={slug} />);

  // NOT FOUND - DETERMINAMOS SI NO EXISTEN DATOS EN LA CONSULTA DEL SNAPSHOT
  const snapShot: any = await JSON.parse(cacheSnapshot);
  const cache = await snapShot.cache;
  const keys = Object.keys(cache).filter((key) => key.includes("noticias"));

  const notFound =
    keys.filter(
      (key) =>
        cache[key]?.data?.filter((item: any) => item.attributes?.slug === slug)
          .length > 0
    ).length === 0;

  return {
    notFound: notFound,
    props: { cacheSnapshot, slug },
  };
};

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
