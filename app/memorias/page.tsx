import React from "react";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

import { fetchAPI, getImageURL, getURL } from "@/lib/api";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { ImageFragment } from "@/fragments/GeneralSettings";
import { MemoriaAnualEntity } from "@/gql/graphql";

const QUERY = `
  query DataHome {
    memoriasAnuales ( pagination: {pageSize: 100}, sort: ["ano:desc"]){
      data{
        attributes{
            nombre
            ano
            imagen{
                ${ImageFragment}
            }
            archivo{
                data{
                    attributes{
                        url
                    }
                }
            }
        }
      }
    }
  }
`;

const queryVars = {};

export const metadata = {
  title: `Memorias anuales Coopbueno - ${SITE_NAME}`,
  description: "Se parte de nuestro crecimiento.",
  openGraph: {
    title: "Memorias anuales Coopbueno",
    description: "Se parte de nuestro crecimiento.",
    url: `${SITE_URL}`,
    siteName: SITE_NAME,
    // images: [
    //   {
    //     url: image.src,
    //     width: 800,
    //     height: 600,
    //   },
    // ],
  },
};

export default async function Page() {
  const data = await fetchAPI(QUERY, { variables: queryVars });

  const memorias: MemoriaAnualEntity[] = data.memoriasAnuales.data;

  return memorias?.length ? (
    <>
      <section className={styles.section}>
        <PageHeader title="Memorias Anuales" />
        <div className={styles.list}>
          {memorias.map((item, index) => {
            const memoria = item.attributes;

            return (
              <div className={styles.memoryCard} key={index}>
                <Link
                  className={styles.link}
                  href={getURL(memoria?.archivo?.data?.attributes?.url)}
                  download
                >
                  <div className={styles.cardImage}>
                    <Image
                      src={getImageURL(memoria?.imagen?.data?.attributes?.url)}
                      alt={memoria?.nombre ?? ""}
                      width={1080}
                      height={1404}
                    />
                  </div>
                  <h2 className={styles.memoryName}>{memoria?.ano}</h2>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  ) : null;
}
