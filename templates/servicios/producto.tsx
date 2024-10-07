import React from "react";
import Image from "next/image";
import { Servicio } from "@/gql/graphql";
import { getImageURL } from "@/lib/api";
import Editor from "@/components/editor.js/Editor";
import styles from "./producto.module.scss";

interface ProductProps {
  servicio: Servicio;
}
const Producto = ({ servicio }: ProductProps) => {
  const nombre = servicio?.nombre;
  const descripcion = servicio?.descripcion;
  const imagen = servicio?.icono?.data?.attributes;

  return (
    <section id="descripcion" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{nombre}</h1>
          <div className={styles.description}>
            <Editor content={descripcion} />
          </div>
        </div>
        <div className={styles.mediaContainer}>
          <Image
            src={getImageURL(imagen?.url)}
            alt={imagen?.alternativeText || ""}
            width={1080}
            height={1080}
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Producto;
