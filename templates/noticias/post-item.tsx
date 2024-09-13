import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Maybe, Noticia } from "@/gql/graphql";
import { getImageURL } from "@/lib/api";
import styles from "./postItem.module.scss";

interface PostProps {
  articulo?: Noticia | Maybe<Noticia>;
  isFirstItem?: boolean;
  isMainItem?: boolean;
  isWideItem?: boolean;
  maxWidth?: string;
}
const Post = ({
  articulo,
  isFirstItem = false,
  isMainItem = false,
}: PostProps) => {
  if (!articulo) {
    return null;
  }
  const { titulo, descripcion, slug } = articulo;

  const imagen = articulo?.imagen?.data?.attributes;

  return articulo ? (
    <article
      className={`${styles.article} ${isFirstItem ? "isFirstItem" : ""} ${
        isMainItem ? "isMainItem" : ""
      }`}
    >
      <Link className={styles.link} href={`/noticias/${slug}`}>
        <div className={styles.media}>
          <Image
            src={getImageURL(imagen?.url)}
            alt={titulo}
            width={1920}
            height={1080}
          />
        </div>
      </Link>
      <div className={styles.info}>
        <Link className={styles.link} href={`/noticias/${slug}`}>
          <h3 className={`${styles.title} ${isFirstItem ? "isFirstItem" : ""}`}>
            {titulo}
          </h3>
          <div
            className={`${styles.excerpt} ${isFirstItem ? "isVisible" : ""}`}
            dangerouslySetInnerHTML={{ __html: descripcion || "" }}
          />
        </Link>
      </div>
    </article>
  ) : null;
};

export default Post;
