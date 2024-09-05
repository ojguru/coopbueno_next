import React from "react";
import Image from "next/image";
import { getImageURL } from "@/lib/api";
import Cta from "@/components/Cta";
import Editor from "@/components/editor.js/Editor";
import styles from "./HomePromo.module.scss";

interface HomePromoProps {
  home?: any;
}
const HomePromo = ({ home }: HomePromoProps) => {
  const informacion = home.informacion;

  return informacion ? (
    <section className={styles.section}>
      <div className={styles.container}>
        <Image
          src={getImageURL(informacion.imagen.data.attributes.url)}
          alt={informacion.titulo}
          width={1080}
          height={1080}
        />
        <div>
          <h2 className={styles.title}>{informacion.titulo}</h2>
          <div className={styles.description}>
            <Editor content={informacion.descripcion} />
          </div>
          <Cta cta={informacion.cta} />
        </div>
      </div>
    </section>
  ) : null;
};

export default HomePromo;

