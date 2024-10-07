import React from "react";
import Meta from "./ArticuloMeta";
import Imagen from "next/image";
import { NoticiaEntity } from "@/gql/graphql";
import { getImageURL } from "@/lib/api";
import Editor from "@/components/editor.js/Editor";
import styles from "./articuloBody.module.scss";

interface ArticuloBodyProps {
  articulo: NoticiaEntity | undefined;
}
const ArticuloBody = ({ articulo }: ArticuloBodyProps) => {
  const post = articulo?.attributes;
  const imagen = post?.imagen?.data?.attributes;

  return post ? (
    <article className={styles.article}>
      <div className={styles.mediaContainer}>
        <div className={styles.media}>
          <Imagen
            src={getImageURL(imagen?.url)}
            alt={post?.titulo}
            width={1920}
            height={1080}
            priority
          />
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.postHeader}>
          <h1
            className={`${styles.titulo} heading-size-1`}
            dangerouslySetInnerHTML={{ __html: post?.titulo || "" }}
          />

          {/* The post's metadata like author, publish date, and comments */}
          <Meta articulo={post} />
        </div>
        <div className={styles.content}>
          <Editor content={post.contenido} />
        </div>
      </div>
    </article>
  ) : null;
};

export default ArticuloBody;
