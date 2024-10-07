import React from "react";
import PageHeader from "@/components/PageHeader";
import { Enum_Servicio_Categoria, ServicioEntity } from "@/gql/graphql";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import styles from "./page.module.scss";
import { fetchAPI } from "@/lib/api";

const QUERY = `
  query TarifarioQuery {
    servicios ( pagination: {pageSize: 100},sort: ["nombre:asc"]){
      data{
        attributes{
          nombre
          slug
          tarifario{
            tarifas{
                nombre
                valor
            }
            nota
          }
        }
      }
    }
  }
`;

const queryVars = {};

export const metadata = {
  metadatabase: new URL(SITE_URL),
  title: `Tarifario de servicios - ${SITE_NAME}`,
  description: "Conoce las tarifas de nuestros servicios.",
  openGraph: {
    title: "Tarifario de servicios",
    description: "Conoce las tarifas de nuestros servicios.",
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
  const servicios: ServicioEntity[] = data.servicios.data;

  return servicios?.length ? (
    <>
      <section className={styles.section}>
        <PageHeader title={"Tarifario de servicios"} />
        <div className={styles.services}>
          {servicios.map((item, index) => {
            const service = item.attributes;
            const rates = service?.tarifario?.tarifas;
            const nota = service?.tarifario?.nota;

            return rates?.length ? (
              <div
                className={styles.service}
                key={index}
                //   order={parseInt(service.meta_box['rate-order'])}
              >
                <h2 className={styles.serviceName}>{service?.nombre}</h2>
                <table className={styles.table}>
                  <tbody className={styles.tbody}>
                    {rates.map((item, index) => {
                      return (
                        <tr className={styles.tr} key={index}>
                          <td className={styles.td}>{item?.nombre}</td>
                          <td className={styles.td}>{item?.valor}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {nota && <p className={styles.note}>{nota}</p>}
              </div>
            ) : null;
          })}
        </div>
      </section>
    </>
  ) : null;
}
