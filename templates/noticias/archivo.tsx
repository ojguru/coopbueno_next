import React from "react";
import Post from "@/templates/noticias/post-item";
import ArchiveHeader from "@/templates/noticias/archive-header";
// import Pagination from '../archive-pagination'
import Link from "next/link";

import { AcademiaIcon } from "@/components/icons";
// import { CardActions } from "@material-ui/core";
import colors from "@/styles/colors";

import { NoticiaEntity } from "@/gql/graphql";
import styles from "./archivo.module.scss";

interface ArchivoProps {
  titulo?: string;
  descripcion?: string;
  articulos?: NoticiaEntity[];
}
const Archivo = ({ titulo, descripcion, articulos }: ArchivoProps) => {
  return (
    <>
      <section className={styles.header}>
        <Link href="/noticias">
          <ArchiveHeader color={colors.primary.base} title={titulo} />
        </Link>
      </section>

      {articulos?.length ? (
        <div className={styles.main}>
          <div className="mpost">
            {articulos.map((props, index) => {
              const articuloEntidad = articulos[index];
              const articulo = articuloEntidad?.attributes;
              const isFirstItem = index === 0;
              const isMainItem = index <= 3;
              return isFirstItem && articulo ? (
                <div className={styles.apost} key={index}>
                  <Post articulo={articulo} {...{ isMainItem, isFirstItem }} />
                </div>
              ) : null;
            })}
          </div>
          <div className={styles.spost}>
            {articulos.map((props, index) => {
              const articuloEntidad = articulos[index];
              const articulo = articuloEntidad.attributes;
              const isFirstItem = index === 0;
              const isMainItem = index <= 3;
              return isMainItem && !isFirstItem ? (
                <div className={styles.apost} key={index}>
                  <Post articulo={articulo} {...{ isMainItem, isFirstItem }} />
                </div>
              ) : null;
            })}
          </div>
          <div className={styles.secondary}>
            {articulos.map((props, index) => {
              const articuloEntidad = articulos[index];
              const articulo = articuloEntidad.attributes;
              const isMainItem = index <= 3;
              const rightDeco = (index + 1) % 24 == 0;
              const leftDeco = (index + 2) % 12 == 0;
              return !isMainItem ? (
                <div className={styles.apost} key={index}>
                  <Post articulo={articulo} {...{ leftDeco, rightDeco }} />
                </div>
              ) : null;
            })}
          </div>
        </div>
      ) : null}

      {/* {data.totalPages > 1 && <Pagination size="thin" />} */}
    </>
  );
};

export default Archivo;
