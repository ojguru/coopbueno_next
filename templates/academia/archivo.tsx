import React from "react";
import Post from "@/templates/academia/post-item";
import ArchiveHeader from "@/templates/academia/archive-header";
// import Pagination from '../archive-pagination'
import Navigation from "@/templates/academia/archive-navigation";
import Link from "next/link";

import { AcademiaIcon } from "@/components/icons";
// import { CardActions } from "@material-ui/core";
import colors from "@/styles/colors";

import { CategoryEntity, ArticleEntity } from "@/gql/graphql";
import styles from "./archivo.module.scss";

interface ArchivoProps {
  titulo?: string;
  descripcion?: string;
  categorias?: CategoryEntity[];
  articulos?: ArticleEntity[];
}
const Archivo = ({
  titulo,
  descripcion,
  categorias,
  articulos,
}: ArchivoProps) => {
  return (
    <>
      <section className={styles.header}>
        <Link href="/academia">
          <div className={styles.sectionImage}>
            <div style={{ display: "table-column" }}>{titulo}</div>
            <AcademiaIcon />
          </div>
        </Link>
        <ArchiveHeader color={colors.text.light} title={titulo} titleHidden>
          <span>{descripcion}</span>
        </ArchiveHeader>
      </section>

      {categorias ? <Navigation categorias={categorias} /> : null}

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
