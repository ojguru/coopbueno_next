import React from "react";
import Image from "next/image";
import Cta from "@/components/Cta";
import { Servicio } from "@/gql/graphql";
import { getImageURL } from "@/lib/api";
import styles from "./portada.module.scss";

interface PortadaProps {
  servicio?: Servicio;
}
const Portada = ({ servicio }: PortadaProps) => {
  const portada = servicio?.portada;
  const title = portada?.titular;
  const copy = portada?.copy;
  const media = portada?.imagen?.data?.attributes?.url;
  const cta = {
    ...portada?.cta,
    uri: "#descripcion",
  };

  return portada ? (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title} itemProp="slogan">
            {title}
          </h2>
          <p className={styles.copy} itemProp="disambiguatingDescription">
            {copy}
          </p>
          <Cta cta={cta} fbqEvent={"serviceCTA"} />
        </div>
        <div className={styles.imageBlock}>
          <div className={styles.media}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageContainer}>
                <div className={styles.mediaWrapper}>
                  <div className={styles.sImage}>
                    <Image
                      src={getImageURL(media)}
                      alt={servicio.nombre}
                      width={1080}
                      height={1080}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default Portada;
