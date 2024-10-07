import React from "react";
import Image from "next/image";
import imagen from "@/public/nosotros.jpg";
import styles from "./about-cover.module.scss";

const Cover = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.mediaWrapper}>
          <div className={styles.media}>
            <Image
              src={imagen}
              alt="Coopbueno"
              width={1920}
              height={1920}
              priority
            />
          </div>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Nosotros</h1>
          <p>
            La Cooperativa de Ahorro y Crédito Momón Bueno, Inc. con sede
            principal en el municipio de Partido, Dajabón fue fundada el 26 de
            junio de 1968.
          </p>
          <p>
            Motivados por el deseo de crecer, de comercializar sus productos
            agrícolas y de ofrecer otros servicios al municipio de Partido, doce
            hombres de esta progresista comunidad se reúnen con el ideal de
            formar una organización para dichos fines. Bajo la asesoría de la
            iglesia católica y del Instituto de Desarrollo y Crédito Cooperativo
            (IDECOOP) la entidad al final varía sus objetivos y da origen a lo
            que hoy conocemos como Cooperativa de Ahorro y Crédito Momón Bueno,
            Inc, una institución con solidez, proyección y visión de desarrollo
            individual y colectivo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cover;
