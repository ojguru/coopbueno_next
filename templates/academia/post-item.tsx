import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article, Maybe } from "@/gql/graphql";
import { getImageURL } from "@/lib/api";
import styles from "./postItem.module.scss";

interface PostProps {
  articulo?: Article | Maybe<Article>;
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
  const { title, description, slug } = articulo;

  const imagen = articulo?.image?.data?.attributes;
  const category = articulo?.category?.data?.attributes;

  return articulo ? (
    <article
      className={`${styles.article} ${isFirstItem ? "isFirstItem" : ""} ${
        isMainItem ? "isMainItem" : ""
      }`}
    >
      <Link className={styles.link} href={`/academia/${slug}`}>
        <div className={styles.media}>
          <Image
            src={getImageURL(imagen?.url)}
            alt={title}
            width={1920}
            height={1080}
          />
        </div>
      </Link>
      <div className={styles.info}>
        {category ? (
          <Link
            className={styles.link}
            href={`/academia/categoria/${category.slug}`}
          >
            <span className={styles.category}>{category.name}</span>
          </Link>
        ) : null}
        <Link className={styles.link} href={`/academia/${slug}`}>
          <h3 className={`${styles.title} ${isFirstItem ? "isFirstItem" : ""}`}>
            {title}
          </h3>
          <div
            className={`${styles.excerpt} ${isFirstItem ? "isVisible" : ""}`}
            dangerouslySetInnerHTML={{ __html: description || "" }}
          />
        </Link>
      </div>
    </article>
  ) : null;
};

export default Post;
