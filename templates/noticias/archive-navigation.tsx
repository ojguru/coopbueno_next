"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { CategoryEntity } from "@/gql/graphql";
import { getImageURL } from "@/lib/api";
import styles from "./archiveNavigation.module.scss";

interface NavigationProps {
  categorias: CategoryEntity[];
  fixed?: boolean;
  inView?: boolean;
}
const Navigation = ({ categorias, fixed, inView }: NavigationProps) => {
  return (
    <div
      className={`${styles.categoryNav} ${inView ? "inView" : ""} ${
        fixed ? "fixed" : ""
      }`}
    >
      <div className={styles.container}>
        <div className={`${styles.categoryList} ${inView ? "inView" : ""}`}>
          {categorias.map((item, index) => {
            const categoria = item.attributes;
            const icon = categoria?.icon?.data?.attributes;
            return (
              <Link
                href={`/academia/categoria/${categoria?.slug}`}
                key={index}
                className={styles.link}
              >
                <div className={`${styles.category} ${inView ? "inView" : ""}`}>
                  <div
                    className={`${styles.categoryMedia} ${
                      inView ? "inView" : ""
                    }`}
                  >
                    <div className={styles.media}>
                      <Image
                        src={getImageURL(icon?.url)}
                        alt={categoria?.name ?? ""}
                        width={1080}
                        height={1080}
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.categoryInfo} ${
                      inView ? "inView" : ""
                    }`}
                  >
                    <span className={styles.categoryName}>
                      {categoria?.name}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface PostNavigationProps {
  categorias: CategoryEntity[];
}
const PostsNavigation = ({ categorias }: PostNavigationProps) => {
  // const { ref, inView} = useInView({ triggerOnce: false});
  const [ref, inView] = useInView({ initialInView: true });

  return categorias.length ? (
    <div className={styles.navigationBar} ref={ref}>
      {/* Navegación principal aparece en el top de la página */}
      <Navigation {...{ categorias }} inView={true} />
      {/* Navegación fija cuando se hace scroll */}
      <Navigation fixed {...{ categorias, inView }} />
    </div>
  ) : null;
};

export default PostsNavigation;
