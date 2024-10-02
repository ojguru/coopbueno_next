import React from "react";
import Portada from "@/templates/servicios/portadaInfantil";
import Producto from "@/templates/servicios/producto";
import Ventajas from "@/templates/servicios/ventajas";
import Requisitos from "@/templates/servicios/requisitos";
import Beneficios from "@/templates/servicios/beneficios";
import Conversion from "@/templates/servicios/conversion";
import Video from "@/templates/servicios/serviceVideo";
import NavegadorServicios from "@/templates/home/HomeServicios";
import styles from "./page.module.scss";

import Insignias from "@/templates/servicios/insignias";
import Image from "next/image";
import planeta1 from "@/public/ahorro-infantil/planeta1.webp";
import planeta2 from "@/public/ahorro-infantil/planeta2.webp";
import planeta3 from "@/public/ahorro-infantil/planeta3.webp";
import sol from "@/public/ahorro-infantil/sol.webp";
import copimoneda from "@/public/ahorro-infantil/copimoneda.webp";
import space from "@/public/ahorro-infantil/space.webp";

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
    variables: { ...queryVars, ...params, slug: "cuenta-de-ahorro-infantil" },
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
    variables: { ...queryVars, ...params, slug: "cuenta-de-ahorro-infantil" },
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
        {/* <Insignias /> */}
        <Ventajas servicio={servicio} />
        <Beneficios servicio={servicio} />
        {/* REQUISITOS */}
        <div className={styles.requisitosDeco}>
          <Requisitos servicio={servicio} />
          <div className={styles.planeta1}>
            <Image src={planeta1} alt={"Universo Coopbueno Planeta"} />
          </div>
          <div className={styles.planeta2}>
            <Image src={planeta2} alt={"Universo Coopbueno Planeta"} />
          </div>
          <div className={styles.moneda1}>
            <Image src={copimoneda} alt={"Universo Coopbueno Copimoneda"} />
          </div>
          <div className={styles.moneda2}>
            <Image src={copimoneda} alt={"Universo Coopbueno Copimoneda"} />
          </div>
          <div className={styles.moneda3}>
            <Image src={copimoneda} alt={"Universo Coopbueno Copimoneda"} />
          </div>
        </div>
        {/* FORMULARIO */}
        <div className={styles.conversionDeco}>
          <Conversion formulario={formulario} />
          <div className={styles.planeta3}>
            <Image src={planeta3} alt={"Universo Coopbueno Planeta"} />
          </div>
          <div className={styles.sol}>
            <Image src={sol} alt={"Universo Coopbueno Sol"} />
          </div>
        </div>
      </section>
      {/* NAVEGADOR DE SERVICIOS */}
      <div className={styles.navegacionDeco}>
        <NavegadorServicios servicios={servicios} />
        <div className={styles.space}>
          <Image src={space} alt={"Universo Coopbueno Espacio"} />
        </div>
      </div>
    </>
  ) : null;
}
