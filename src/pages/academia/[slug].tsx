import React, { Suspense } from "react";

import { GetStaticProps } from "next";

import {
  useQuery,
  prepareReactRender,
  useHydrateCache,
  ENUM_COMPONENTSHAREDMETASOCIAL_SOCIALNETWORK,
} from "client";
import { PropsWithServerCache } from "@gqty/react";
import Layout from "components/Layout";
import Loading from "components/loading";
import { NextSeo } from "next-seo";
import { SITE_NAME, SITE_URL } from "lib/constants";
import { getImageURL } from "lib/api";

import ArticuloBody from "templates/academia/ArticuloBody";
import dynamic from "next/dynamic";
const ArticuloAside = dynamic(
  () => import("templates/academia/ArticuloAside"),
  { ssr: true }
);

type PageProps = PropsWithServerCache<{
  slug: string;
}>;
const Page = ({ cacheSnapshot, slug }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });

  const query = useQuery();

  const articuloEntidad = query?.articles({
    filters: {
      slug: {
        eq: slug,
      },
    },
  })?.data[0];

  // const categoria = articuloEntidad?.attributes?.category?.data?.attributes;

  const relacionados =
    query.articles({
      pagination: {
        pageSize: 4,
      },
      filters: {
        // category: {
        //   slug: {
        //     eq: categoria?.slug,
        //   },
        // },
        slug: {
          notContains: slug,
        },
      },
      sort: ["createdAt:desc"],
    })?.data || [];

  const articulo = articuloEntidad?.attributes;
  const image = articulo?.image?.data?.attributes;

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
    <Suspense fallback={<Loading full />}>
      <NextSeo
        title={seo?.metaTitle || articulo?.title}
        description={seo?.metaDescription || articulo?.description}
        canonical={seo?.canonicalURL || `${SITE_URL}/${articulo?.slug}`}
        openGraph={{
          url: `${SITE_URL}/${articulo?.slug}`,
          title: facebookMeta?.title || articulo?.title,
          description: facebookMeta?.description || articulo?.description,
          images: [
            {
              url: getImageURL(facebookMetaImage?.url || image?.url),
              width: facebookMetaImage?.width || image?.width || 900,
              height: facebookMetaImage?.height || image?.height || 800,
              alt:
                facebookMetaImage?.alternativeText ||
                image?.alternativeText ||
                articulo?.title,
              type: facebookMetaImage?.mime || image?.mime,
            },
          ],
          site_name: SITE_NAME,
        }}
        noindex={
          seo?.metaRobots?.includes("noindex") ||
          process.env.NODE_ENV === "development"
        }
        nofollow={
          seo?.metaRobots?.includes("nofollow") ||
          process.env.NODE_ENV === "development"
        }
      />
      <Layout>
        <ArticuloBody articulo={articuloEntidad} />
        <ArticuloAside articulo={articuloEntidad} relacionados={relacionados} />
      </Layout>
    </Suspense>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx: any) => {
  const slug = _ctx.params.slug;

  const { cacheSnapshot } = await prepareReactRender(<Page slug={slug} />);

  // NOT FOUND - DETERMINAMOS SI NO EXISTEN DATOS EN LA CONSULTA DEL SNAPSHOT
  const snapShot: any = await JSON.parse(cacheSnapshot);
  const cache = await snapShot.cache;
  const keys = Object.keys(cache).filter((key) => key.includes("articles"));

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
