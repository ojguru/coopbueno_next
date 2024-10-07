import React from "react";

import {
  Enum_Componentsharedmetasocial_Socialnetwork,
  NoticiaEntity,
  Noticia,
} from "@/gql/graphql";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { fetchAPI, getImageURL } from "@/lib/api";

import ArticuloBody from "@/templates/noticias/ArticuloBody";
import ArticuloAside from "@/templates/noticias/ArticuloAside";
import { ImageFragment } from "@/fragments/GeneralSettings";

const QUERY = `
  query NoticiasQuery($slug:String!) {
    noticias ( filters:{slug:{eq:$slug}}){
      data{
        attributes{
          titulo
          slug
          descripcion
          contenido
          imagen{
            ${ImageFragment}
          }
          publishedAt
        }
      }
    }
    relacionados: noticias ( filters:{slug:{ne:$slug}}, pagination: {pageSize: 4},sort: ["publishedAt:desc"]){
      data{
        attributes{
          titulo
          slug
          descripcion
          imagen{
            ${ImageFragment}
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

  const articulo: Noticia = data.noticias.data[0].attributes;
  const seo = articulo.seo;

  const facebookMeta = seo?.metaSocial?.filter(
    (item) =>
      item?.socialNetwork ===
      Enum_Componentsharedmetasocial_Socialnetwork.Facebook
  )[0];

  return {
    metadatabase: new URL(SITE_URL),
    title: seo?.metaTitle || articulo?.titulo,
    description: seo?.metaDescription || articulo?.descripcion,
    openGraph: {
      title: facebookMeta?.title || articulo?.titulo,
      description: facebookMeta?.description || articulo?.descripcion,
      url: `${SITE_URL}/${articulo.slug}`,
      siteName: SITE_NAME,
      images: [
        {
          url: getImageURL(articulo?.imagen?.data?.attributes?.url),
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

  const articuloEntidad: NoticiaEntity = data.noticias.data[0];

  const relacionados = data.relacionados.data;

  return (
    <>
      <ArticuloBody articulo={articuloEntidad} />
      <ArticuloAside articulo={articuloEntidad} relacionados={relacionados} />
    </>
  );
};

export default Page;
