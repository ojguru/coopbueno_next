import React from "react";
import ScreenReaderText from "@/styles/screen-reader";
import Link from "next/link";
import { CategoryEntity } from "@/gql/graphql";
import { getURL } from "@/lib/api";
import styles from "./articuloCategorias.module.scss";

interface ArticuloCategoriasProps {
  categorias: CategoryEntity[];
}

const ArticuloCategorias = ({ categorias }: ArticuloCategoriasProps) => {
  return (
    <div className={styles.entryCategories}>
      <ScreenReaderText>Categorias</ScreenReaderText>

      <div className={styles.entryCategoriesInner}>
        {categorias.map((item, index) => {
          const categoria = item?.attributes;

          return categoria ? (
            <Link
              className={styles.categoryTag}
              key={index}
              href={getURL(`/academia/categoria/${categoria?.slug}`)}
            >
              {categoria?.name}
            </Link>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default ArticuloCategorias;
