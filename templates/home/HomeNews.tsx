import React from "react";
import Link from "next/link";
import Image from "next/image";

import { getImageURL } from "@/lib/api";
import styles from "./HomeNews.module.scss";

interface HomeNewsProps {
  noticias?: any[];
}
const HomeNews = ({ noticias = [] }: HomeNewsProps) => {
  return noticias.length ? (
    <section className={styles.section}>
      <Link href="/noticias" className={styles.link}>
        <h2 className={styles.sectionTitle}>Noticias</h2>
      </Link>
      <div className={styles.body}>
        {noticias.map((item, index) => {
          const post = item.attributes;
          return (
            <div className={styles.slide} key={index}>
              <div className={styles.post}>
                <Link
                  href={"/noticias/" + (post.slug ?? "")}
                  className={styles.link}
                >
                  <div className={styles.mediaWrapper}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={getImageURL(post.imagen.data.attributes.url)}
                        alt={post.titulo}
                        width={1920}
                        height={1080}
                      />
                    </div>
                  </div>
                  <h3 className={styles.title}>{post.titulo}</h3>
                  <div
                    className={styles.excerpt}
                    dangerouslySetInnerHTML={{
                      __html: post.descripcion,
                    }}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  ) : null;
};

export default HomeNews;
