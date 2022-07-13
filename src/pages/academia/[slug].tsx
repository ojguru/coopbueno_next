import React from "react";

import { GetStaticProps } from "next";

import {
  useQuery,
  prepareReactRender,
  useHydrateCache,
  ENUM_COMPONENTSHAREDMETASOCIAL_SOCIALNETWORK,
} from "client";
import { PropsWithServerCache } from "@gqty/react";
import ArticuloBody from "templates/academia/ArticuloBody";
import ArticuloAside from "templates/academia/ArticuloAside";
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

  const articuloEntidad = query?.articles({
    filters: {
      slug: {
        eq: slug,
      },
    },
  })?.data[0];

  const categoria = articuloEntidad?.attributes?.category?.data?.attributes;

  const relacionados =
    query.articles({
      pagination: {
        pageSize: 4,
      },
      filters: {
        category: {
          slug: {
            eq: categoria?.slug,
          },
        },
        slug: {
          notContains: slug,
        },
      },
    })?.data || [];

  if (query.$state.isLoading) {
    return <Loading full />;
  }

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
    <>
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
        noindex={seo?.metaRobots?.includes("noindex")}
        nofollow={seo?.metaRobots?.includes("nofollow")}
      />
      <Layout>
        <ArticuloBody articulo={articuloEntidad} />
        <ArticuloAside articulo={articuloEntidad} relacionados={relacionados} />
      </Layout>
    </>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx: any) => {
  const slug = _ctx.params.slug;

  const { cacheSnapshot } = await prepareReactRender(<Page slug={slug} />);

  return {
    props: { cacheSnapshot, slug },
  };
};

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
