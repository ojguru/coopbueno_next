import React from "react";
import Archivo from "@/templates/academia/archivo";

import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { fetchAPI } from "@/lib/api";
import { ImageFragment } from "@/fragments/GeneralSettings";
import { ArticleEntity, CategoryEntity } from "@/gql/graphql";

const QUERY = `
  query DataHome {
    articles ( pagination: {pageSize: 16},sort: ["createdAt:desc"]){
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
    categories ( pagination: {pageSize: 16}) {
        data{
            attributes{
                name
                slug
                icon{
                    ${ImageFragment}
                }
            }
        }
    }
  }
`;

const queryVars = {};

export const metadata = {
  title: `Academia de sueños - ${SITE_NAME}`,
  description: "Conocimiento que te acerca a tus sueños.",
  openGraph: {
    title: `Academia de sueños - ${SITE_NAME}`,
    description: "Conocimiento que te acerca a tus sueños",
    url: `${SITE_URL}`,
    siteName: SITE_NAME,
    images: [
      {
        url: "/especialidades.jpg", //arreglar
        width: 800,
        height: 600,
      },
    ],
  },
};

export default async function Page() {
  const data = await fetchAPI(QUERY, { variables: queryVars });

  const articulos: ArticleEntity[] = data.articles.data;
  const categorias: CategoryEntity[] = data.categories.data;

  return (
    <>
      <Archivo
        titulo="Academia de sueños"
        descripcion="Conocimiento que te acerca a tus sueños"
        articulos={articulos}
        categorias={categorias}
      />
    </>
  );
}
