import React from "react";
import Categorias from "./ArticuloCategorias";
import Meta from "./ArticuloMeta";
import Imagen from "next/image";
import { ArticleEntity } from "@/gql/graphql";
import { getImageURL } from "@/lib/api";
import Editor from "@/components/editor.js/Editor";
import styles from "./articuloBody.module.scss";

interface ArticuloBodyProps {
  articulo: ArticleEntity | undefined;
}
const ArticuloBody = ({ articulo }: ArticuloBodyProps) => {
  const post = articulo?.attributes;
  const imagen = post?.image?.data?.attributes;

  const categoria = post?.category?.data;
  const categorias = [];

  if (categoria) {
    categorias.push(categoria);
  }

  return post ? (
    <article className={styles.article}>
      <div className={styles.mediaContainer}>
        <div className={styles.media}>
          <Imagen
            src={getImageURL(imagen?.url)}
            alt={post?.title}
            width={1920}
            height={1080}
            priority
          />
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.postHeader}>
          <Categorias categorias={categorias} />

          <h1
            className={`${styles.title} heading-size-1`}
            dangerouslySetInnerHTML={{ __html: post?.title || "" }}
          />

          {/* The post's metadata like author, publish date, and comments */}
          <Meta articulo={post} />
        </div>
        <div className={styles.content}>
          <Editor content={post.content} />
        </div>
      </div>
    </article>
  ) : null;
};

export default ArticuloBody;
