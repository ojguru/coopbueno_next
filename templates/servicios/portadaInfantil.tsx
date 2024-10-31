import React from "react";
import Image from "next/image";
import Cta from "@/components/Cta";
import { Servicio } from "@/gql/graphql";
import { getImageURL } from "@/lib/api";
import space from "@/public/ahorro-infantil/cover_space.webp";
import styles from "./portadaInfantil.module.scss";

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
          <Cta cta={cta} />
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
                      height={1911.6}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.space}>
            <Image
              src={space}
              alt="Universo Coopbueno Espacio Portada"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default Portada;
