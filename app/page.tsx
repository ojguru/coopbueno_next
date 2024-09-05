
import React, { Suspense } from "react";
import styled from "@emotion/styled";

import HomeCover from "@/templates/home/HomeCover";
import HomeAcademy from "@/templates/home/HomeAcademy";
import HomeNews from "@/templates/home/HomeNews";
import HomeSocio from "@/templates/home/HomeSocio";
import HomePromo from "@/templates/home/HomePromo";
import HomeSlider from "@/templates/home/HomeSlider";
import HomeServicios from "@/templates/home/HomeServicios";
import styles from "./page.module.scss"

import { Homepage, Enum_Servicio_Categoria } from "@/gql/graphql";

import Loading from "@/components/loading";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { fetchAPI, getImageURL } from "@/lib/api";
import {
  CTAFragment,
  ImageFragment,
} from "@/fragments/GeneralSettings";

const QUERY = `
  query DataHome {
    homepage {
      data {
        attributes {
          portada{
            titular
            copy
            imagen {
              ${ImageFragment}
            }
            ${CTAFragment}
          }
          razones{
            titulo
            descripcion
            ${CTAFragment}
            imagen {
              ${ImageFragment}
            }
          }
          informacion{
            titulo
            descripcion
            imagen{
              ${ImageFragment}
            }
            ${CTAFragment}
          }
        }
      }
    }
    articles ( pagination: {pageSize: 3},sort: ["publishedAt:desc"]){
      data{
        attributes{
          title
          slug
          description
          image{
            ${ImageFragment}
          }
        }
      }
    }
    noticias ( pagination: {pageSize: 2},sort: ["publishedAt:desc"]){
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
    slides ( sort: ["publishedAt:desc"]){
      data{
        attributes{
          titular
          copy
          ${CTAFragment}
          imagen{
            ${ImageFragment}
          }
        }
      }
    }
    servicios ( pagination: {pageSize: 100},filters: {
      categoria: {
        in: [
          "${Enum_Servicio_Categoria.Ahorro}",
          "${Enum_Servicio_Categoria.Prestamos}",
          "${Enum_Servicio_Categoria.Facilidades}",
        ],
      },
    },sort: ["nombre:asc"]){
      data{
        attributes{
          nombre
          slug
          categoria
          tipo
          icono{
            ${ImageFragment}
          }
        }
      }
    }
  }
`;

const queryVars = {};

// Dynamic metadata
export async function generateMetadata({ params }: { params: any }) {
  const data = await fetchAPI(QUERY, { variables: queryVars });

  const { portada }: Homepage = data.homepage.data.attributes;

  return {
    title: `${portada.titular} - ${SITE_NAME}`,
    description: portada.copy,
    openGraph: {
      title: portada.titular,
      description: portada.copy,
      url: `${SITE_URL}`,
      siteName: SITE_NAME,
      images: [
        {
          url: getImageURL(portada?.imagen.data?.attributes?.url),
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function Home() {
  const data = await fetchAPI(QUERY, { variables: queryVars });

  const home: Homepage = data.homepage.data.attributes;

  const posts = data.articles.data;
  const noticias = data.noticias.data;
  const slides = data.slides.data;
  const servicios = data.servicios.data;

  //SEO
  const image = home?.portada?.imagen.data?.attributes;

  return (
    <>
      <h1 className={styles.title}>Coopbueno</h1>
      <HomeCover portada={home?.portada} />
      <HomeSlider slides={slides} />
      <HomeServicios {...{ servicios }} />
      <HomeSocio {...{ home }} />
      <HomeAcademy posts={posts} />
      <HomeNews noticias={noticias} />
      <HomePromo {...{ home }} />
    </>
  );
}

