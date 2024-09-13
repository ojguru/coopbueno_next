import React from "react";
import Archivo from "@/templates/academia/archivo";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { ImageFragment } from "@/fragments/GeneralSettings";
import { fetchAPI } from "@/lib/api";

const QUERY = `
  query CategoriesQuery($slug:String!) {
    category: categories ( filters:{slug:{eq:$slug}}) {
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
    articles ( pagination: {pageSize: 16},sort: ["createdAt:desc"], filters:{category:{slug:{eq:$slug}}}){
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

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetchAPI(QUERY, {
    variables: { ...queryVars, ...params },
  });
  const categoria = data.category.data[0];

  return {
    title: `Categoría ${categoria?.attributes?.name} - Academia de Sueños`,
    description: categoria?.attributes?.description,
    openGraph: {
      title: `Categoría ${categoria?.attributes?.name} - Academia de Sueños`,
      description: categoria?.attributes?.description,
      url: `${SITE_URL}/${categoria?.attributes?.slug}`,
      siteName: SITE_NAME,
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await fetchAPI(QUERY, {
    variables: { ...queryVars, ...params },
  });
  const categoria = data.category.data[0];

  const articulos = data.articles.data;

  const categorias = data.categories.data;

  return (
    <>
      <Archivo
        titulo={categoria?.attributes?.name}
        descripcion={categoria?.attributes?.description}
        articulos={articulos}
        categorias={categorias}
      />
    </>
  );
};

export default Page;
