import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AcademiaIcon } from "@/components/icons";

import { getImageURL } from "@/lib/api";
import { ArticleEntity } from "@/gql/graphql";
import styles from "./HomeAcademy.module.scss";

interface HomeAcademyProps {
  posts?: ArticleEntity[];
}
const HomeAcademy = ({ posts }: HomeAcademyProps) => {
  return posts?.length ? (
    <section className={styles.section}>
      <Link href={"/academia"}>
        <h2 className={styles.sectionTitle}>Academia de sueños</h2>
        <div className={styles.sectionImage}>
          <AcademiaIcon />
        </div>
      </Link>
      <div className={styles.body}>
        {posts.map((item, index) => {
          const post = item.attributes;
          const image = post?.image?.data?.attributes;
          return post ? (
            <div className={styles.slide} key={index}>
              <div className={styles.post}>
                <Link
                  href={`/academia/${post.slug}`}
                  className={styles.postLink}
                >
                  <div className={styles.mediaWrapper}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={getImageURL(image?.url)}
                        alt={image?.alternativeText || ""}
                        width={1920}
                        height={1080}
                      />
                    </div>
                  </div>
                  <h3 className={styles.title}>{post.title}</h3>
                  <div className={styles.excerpt}
                    dangerouslySetInnerHTML={{
                      __html: post.description || "",
                    }}
                  />
                </Link>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </section>
  ) : null;
};

export default HomeAcademy;