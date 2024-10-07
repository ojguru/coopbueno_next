import React from "react";
import Image from "next/image";
import {
  LocationIcon,
  ClockIcon,
  PhoneIcon,
  SucursalIMG,
} from "@/components/icons";

import { Sucursal, SucursalEntity } from "@/gql/graphql";
import { fetchAPI, getImageURL } from "@/lib/api";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import styles from "./page.module.scss";
import { ImageFragment } from "@/fragments/GeneralSettings";
import { notFound } from "next/navigation";
import ReadMore from "./ReadMore";
import Phone from "./Phone";

const QUERY = `
  query SucursalQuery($slug:String!) {
    sucursals ( filters:{slug:{eq:$slug}}){
      data{
        attributes{
            nombre
            slug
            ubicacion
            direccion
            horario
            telefonos{
                telefono
            }
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

  const sucursal: Sucursal = data.sucursals.data[0].attributes;
  const image = sucursal.imagen.data?.attributes;

  return {
    title: `Sucursal ${sucursal?.nombre} - ${SITE_NAME}`,
    description: `Sucursal Coopbueno ${sucursal?.nombre}`,
    openGraph: {
      title: `Sucursal ${sucursal?.nombre}`,
      description: `Sucursal Coopbueno ${sucursal?.nombre}`,
      url: `${SITE_URL}/${sucursal?.slug}`,
      siteName: SITE_NAME,
      images: [
        {
          url: getImageURL(image?.url),
          width: image?.width || 900,
          height: image?.height || 800,
          alt: image?.alternativeText || sucursal?.nombre,
          type: image?.mime,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetchAPI(QUERY, {
    variables: { ...queryVars, ...params },
  });

  const sucursalEntidad: SucursalEntity = data.sucursals.data[0];
  const sucursal = sucursalEntidad?.attributes;

  if (!sucursal) {
    notFound();
  }

  return sucursal ? (
    <>
      <section className={styles.section}>
        <div className={styles.cardImage}>
          <Image
            className={styles.sucursalImage}
            src={getImageURL(sucursal?.imagen?.data?.attributes?.url)}
            alt={sucursal.nombre}
            width={1920}
            height={1080}
            priority
          />
        </div>
        <div className={styles.container}>
          <div className={styles.sucursalCard}>
            <div className={styles.content}>
              <div className={styles.cardHeader}>
                <h1 className={styles.sucursalName}>{sucursal.nombre}</h1>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.sucursalAddress}>
                  <LocationIcon />
                  <span className={styles.infoWrapper}>
                    {sucursal.direccion}
                  </span>
                </p>
                <p className={styles.sucursalSchedule}>
                  <ClockIcon />
                  <span className={styles.infoWrapper}>{sucursal.horario}</span>
                </p>
                <div className={styles.sucursalPhoneBox}>
                  <PhoneIcon />
                  <span className={styles.infoWrapper}>
                    {sucursal.telefonos.map((item, index) => {
                      const phone = item?.telefono;

                      return (
                        <Phone phone={phone} key={index}>
                          {phone}
                        </Phone>
                      );
                    })}
                  </span>
                </div>
              </div>
              <div className={styles.linkBox}>
                <ReadMore sucursal={sucursal}>Ubicación</ReadMore>
              </div>
            </div>
            <SucursalIMG />
          </div>
        </div>
      </section>
    </>
  ) : null;
}
