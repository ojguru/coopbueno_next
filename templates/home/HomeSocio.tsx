import React from "react";
import Image from "next/image";
import { getImageURL } from "@/lib/api";
import Cta from "@/components/Cta";
import Editor from "@/components/editor.js/Editor";
import styles from "./HomeSocio.module.scss"

interface HomeSocioProps {
  home: any;
}
const HomeSocio = ({ home }: HomeSocioProps) => {
  const razones = home.razones;

  return home.razones ? (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.media}>
          <Image
            src={getImageURL(razones.imagen.data.attributes.url)}
            alt={razones.imagen.data.attributes.alternativeText}
            width={1080}
            height={1080}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{razones.titulo}</h2>
          <div className={styles.description}>
            <Editor content={razones.descripcion} />
          </div>
          <Cta cta={razones.cta} />
        </div>
      </div>
    </section>
  ) : null;
};

export default HomeSocio;
