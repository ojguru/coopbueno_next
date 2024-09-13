import React from "react";
import { CalendarIcon } from "@/components/icons";
import ScreenReaderText from "@/styles/screen-reader";
import { Noticia } from "@/gql/graphql";
import moment from "moment";
import styles from "./articuloMeta.module.scss";

interface ArticuloMetaProps {
  articulo?: Noticia;
}
const ArticuloMeta = ({ articulo }: ArticuloMetaProps) => {
  const date = new Date(articulo?.publishedAt || "");

  return articulo ? (
    <div className={styles.postMetaWrapper}>
      <ul className={styles.postMetaList}>
        {date ? (
          <li className={styles.postMetaItem}>
            <span className={styles.metaIcon}>
              <ScreenReaderText>Fecha de publicación</ScreenReaderText>
              <CalendarIcon />
            </span>

            <span className={styles.metaText}>
              {moment(date).format("DD-MM-YYYY")}
            </span>
          </li>
        ) : null}
      </ul>
    </div>
  ) : null;
};

export default ArticuloMeta;
