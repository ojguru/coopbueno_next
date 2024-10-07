import React from "react";
import Archivo from "@/templates/noticias/archivo";

import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { fetchAPI } from "@/lib/api";
import { ImageFragment } from "@/fragments/GeneralSettings";
import { NoticiaEntity } from "@/gql/graphql";

const QUERY = `
  query DataHome {
    noticias ( pagination: {pageSize: 16},sort: ["createdAt:desc"]){
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

export const metadata = {
  metadatabase: new URL(SITE_URL),
  title: `Academia de sueños - ${SITE_NAME}`,
  description: "Conocimiento que te acerca a tus sueños.",
  openGraph: {
    title: `Academia de sueños - ${SITE_NAME}`,
    description: "Conocimiento que te acerca a tus sueños",
    url: `${SITE_URL}`,
    siteName: SITE_NAME,
    images: [
      {
        url: "/academia.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default async function Page() {
  const data = await fetchAPI(QUERY, { variables: queryVars });

  const articulos: NoticiaEntity[] = data.noticias.data;

  return (
    <>
      <Archivo
        titulo="Noticias"
        descripcion="Mantente informado"
        articulos={articulos}
      />
    </>
  );
}
