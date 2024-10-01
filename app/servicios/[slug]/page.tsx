import React from "react";
import Portada from "@/templates/servicios/portada";
import Producto from "@/templates/servicios/producto";
import Ventajas from "@/templates/servicios/ventajas";
import Requisitos from "@/templates/servicios/requisitos";
import Beneficios from "@/templates/servicios/beneficios";
import Conversion from "@/templates/servicios/conversion";
import Video from "@/templates/servicios/serviceVideo";
import NavegadorServicios from "@/templates/home/HomeServicios";
import styles from "./page.module.scss";

import {
  ComponentGeneralFormulario,
  Enum_Componentsharedmetasocial_Socialnetwork,
  Enum_Servicio_Categoria,
  ServicioEntity,
} from "@/gql/graphql";

import { fetchAPI, getImageURL } from "@/lib/api";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import {
  BenefitFragment,
  CTAFragment,
  FormFragment,
  ImageFragment,
  SEOFragment,
} from "@/fragments/GeneralSettings";
import { notFound } from "next/navigation";

const QUERY = `
  query ServicioQuery($slug:String!) {  
    servicio: servicios ( filters:{slug:{eq:$slug}} ){
      data{
        attributes{
          nombre
          slug
          descripcion
          portada{
            titular
            copy
            imagen{
              ${ImageFragment}
            }
            ${CTAFragment}
          }
          ventajas{
            ventaja
          }
          beneficios{
            ${BenefitFragment}
          }
          video
          categoria
          tipo
          icono{
            ${ImageFragment}
          }
          requisitos(pagination:{pageSize:100}){
            requisito
          }
          ${FormFragment}
          ${SEOFragment}
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
      slug:{ne:$slug}
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
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetchAPI(QUERY, {
    variables: { ...queryVars, ...params },
  });

  const servicioEntidad: ServicioEntity = data.servicio.data[0];

  const servicio = servicioEntidad?.attributes;
  const image = servicio?.portada.imagen?.data?.attributes;

  const seo = servicio?.seo;

  const facebookMeta = seo?.metaSocial?.filter(
    (item) =>
      item?.socialNetwork ===
      Enum_Componentsharedmetasocial_Socialnetwork.Facebook
  )[0];

  const facebookMetaImage = facebookMeta?.image?.data?.attributes;

  return {
    title: `${seo?.metaTitle || servicio?.nombre} - ${SITE_NAME}`,
    description: seo?.metaDescription || servicio?.portada?.copy,
    canonical: seo?.canonicalURL || `${SITE_URL}/${servicio?.slug}`,
    openGraph: {
      title: facebookMeta?.title || servicio?.nombre,
      description: facebookMeta?.description || servicio?.portada?.copy,
      url: `${SITE_URL}/${servicio?.slug}`,
      siteName: SITE_NAME,
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
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetchAPI(QUERY, {
    variables: { ...queryVars, ...params },
  });

  const servicioEntidad: ServicioEntity = data.servicio.data[0];

  const servicios: ServicioEntity[] = data.servicios.data;

  const servicio = servicioEntidad?.attributes;

  if (!servicio) {
    notFound();
  }

  // EVITA PETICIÓN EXTRA A GRAPHQL
  const formulario: ComponentGeneralFormulario = {
    id: servicio?.formulario?.id || "",
    formId: servicio?.formulario?.formId || "",
    redireccion: servicio?.formulario?.redireccion || "",
    mensaje: servicio?.formulario?.mensaje || "",
    titulo: servicio?.formulario?.titulo || "",
  };

  return servicio ? (
    <>
      <section className={styles.section}>
        <Portada servicio={servicio} />
        <Producto servicio={servicio} />
        <Video servicio={servicio} />
        <Ventajas servicio={servicio} />
        <Beneficios servicio={servicio} />
        <Requisitos servicio={servicio} />
        <Conversion formulario={formulario} />
      </section>
      <NavegadorServicios servicios={servicios} />
    </>
  ) : null;
}
