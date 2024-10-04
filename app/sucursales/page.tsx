import React from "react";
import Image from "next/image";
import { LocationIcon, ClockIcon, PhoneIcon } from "@/components/icons";
import { SucursalEntity } from "@/gql/graphql";
import { fetchAPI, getImageURL } from "@/lib/api";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { ImageFragment } from "@/fragments/GeneralSettings";
import styles from "./page.module.scss";
import ReadMore from "./ReadMore";
import Phone from "./Phone";

const QUERY = `
  query DataHome {
    sucursals ( pagination: {pageSize: 100}, sort: ["orden:asc"]){
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

export async function generateMetadata({ params }: { params: any }) {
  const data = await fetchAPI(QUERY, { variables: queryVars });

  const sucursales: SucursalEntity[] = data.sucursals.data;
  const image = sucursales[0].attributes?.imagen.data?.attributes;
  return {
    title: `Sucursales - ${SITE_NAME}`,
    description: "Conoce nuestras sucursales.",
    openGraph: {
      title: "Sucursales",
      description: "Conoce nuestras sucursales.",
      url: `${SITE_URL}`,
      siteName: SITE_NAME,
      images: [
        {
          url: getImageURL(image?.url),
          width: 800,
          height: 600,
          alt: "Sucursales Coopbueno",
          type: image?.mime,
        },
      ],
    },
  };
}

export default async function Page() {
  const data = await fetchAPI(QUERY, { variables: queryVars });

  const sucursales: SucursalEntity[] = data.sucursals.data;

  return (
    <>
      <section className={styles.section}>
        <div className={styles.deco} />
        <div className={styles.container}>
          <h1 className={styles.title}>Sucursales</h1>
          {sucursales?.map((item, index, items) => {
            const sucursal = item.attributes;
            const featuredMedia = sucursal?.imagen?.data?.attributes;
            const location = sucursal?.ubicacion;
            const isPrincipal = index == 0;

            return (
              <div
                className={`${styles.sucursalCard} ${
                  isPrincipal ? "principal" : ""
                }`}
                key={index}
              >
                <div
                  className={`${styles.cardImage} ${
                    isPrincipal ? "principal" : ""
                  }`}
                >
                  <Image
                    src={getImageURL(featuredMedia?.url)}
                    alt={sucursal?.nombre ?? ""}
                    width={1920}
                    height={1080}
                    priority={index <= 3 ? true : false}
                  />
                </div>
                <div
                  className={`${styles.content} ${
                    index % 2 != 0 && index != items.length - 1
                      ? "contentStyle1"
                      : ""
                  } ${(index + 1) % 3 === 0 ? "contentStyle2" : ""}`}
                >
                  <div className={styles.cardHeader}>
                    <h2
                      className={`${styles.sucursalName} ${
                        isPrincipal ? "principal" : ""
                      }`}
                    >
                      {sucursal?.nombre}
                    </h2>
                  </div>
                  <div className={styles.cardBody}>
                    <p className={styles.sucursalAddress}>
                      <LocationIcon />
                      <span className={styles.infoWrapper}>
                        {sucursal?.direccion}
                      </span>
                    </p>
                    <p className={styles.sucursalSchedule}>
                      <ClockIcon />
                      <span className={styles.infoWrapper}>
                        {sucursal?.horario}
                      </span>
                    </p>
                    <div className={styles.sucursalPhoneBox}>
                      <PhoneIcon />
                      <span className={styles.infoWrapper}>
                        {sucursal?.telefonos.map((item, index) => {
                          const phone = item?.telefono;

                          return phone ? <Phone phone={phone} /> : null;
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.linkBox}>
                  <ReadMore location={location}>Ubicación</ReadMore>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
