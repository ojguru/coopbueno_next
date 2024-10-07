import React from "react";

import {
  Enum_Componentsharedmetasocial_Socialnetwork,
  ArticleEntity,
  Article,
} from "@/gql/graphql";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { fetchAPI, getImageURL } from "@/lib/api";

import ArticuloBody from "@/templates/academia/ArticuloBody";
import ArticuloAside from "@/templates/academia/ArticuloAside";
import { ImageFragment } from "@/fragments/GeneralSettings";

const QUERY = `
  query ArticleQuery($slug:String!) {
    articles ( filters:{slug:{eq:$slug}}){
      data{
        attributes{
          title
          slug
          description
          content
          image{
            ${ImageFragment}
          }
          category{
            data{
              attributes{
                name
                slug
              }
            }
          }
          publishedAt
        }
      }
    }
    relacionados: articles ( filters:{slug:{ne:$slug}}, pagination: {pageSize: 4},sort: ["publishedAt:desc"]){
      data{
        attributes{
          title
          slug
          description
          image{
            ${ImageFragment}
          }
          category{
            data{
              attributes{
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;

const queryVars = {};

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetchAPI(QUERY, {
    variables: { ...queryVars, ...params },
  });

  const articulo: Article = data.articles.data[0].attributes;
  const seo = articulo.seo;

  const facebookMeta = seo?.metaSocial?.filter(
    (item) =>
      item?.socialNetwork ===
      Enum_Componentsharedmetasocial_Socialnetwork.Facebook
  )[0];

  return {
    metadatabase: new URL(SITE_URL),
    title: seo?.metaTitle || articulo?.title,
    description: seo?.metaDescription || articulo?.description,
    openGraph: {
      title: facebookMeta?.title || articulo?.title,
      description: facebookMeta?.description || articulo?.description,
      url: `${SITE_URL}/${articulo.slug}`,
      siteName: SITE_NAME,
      images: [
        {
          url: getImageURL(articulo?.image?.data?.attributes?.url),
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await fetchAPI(QUERY, {
    variables: { ...queryVars, ...params },
  });

  const articuloEntidad: ArticleEntity = data.articles.data[0];

  const relacionados = data.relacionados.data;

  return (
    <>
      <ArticuloBody articulo={articuloEntidad} />
      <ArticuloAside articulo={articuloEntidad} relacionados={relacionados} />
    </>
  );
};

export default Page;
