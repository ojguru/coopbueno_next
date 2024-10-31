import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Servicio } from "@/gql/graphql";
import { getImageURL } from "@/lib/api";
import styles from "./beneficios.module.scss";

interface BeneficiosProps {
  servicio: Servicio;
}
const Benefits = ({ servicio }: BeneficiosProps) => {
  const beneficios = servicio.beneficios?.data;

  return beneficios?.length ? (
    <section className={styles.section}>
      <h2 className={styles.title}>BENEFICIOS</h2>
      <ul
        className={styles.benefitsList}
        itemProp="isRelatedTo"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {beneficios.map((item, index) => {
          const beneficio = item.attributes;
          const name = beneficio?.nombre ?? "";
          const description = beneficio?.portada?.titular;
          const media = beneficio?.icono?.data?.attributes;
          return beneficio ? (
            <li
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/FinancialProduct"
            >
              <Link
                href={`/servicios/${beneficio.slug}`}
                className={styles.benefit}
              >
                <div className={styles.media}>
                  <Image
                    src={getImageURL(media?.url)}
                    alt={name}
                    width={1080}
                    height={1080}
                  />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.name} itemProp="name">
                    {name}
                  </h3>
                  <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: description || "" }}
                  />
                </div>
              </Link>
            </li>
          ) : null;
        })}
      </ul>
    </section>
  ) : null;
};

export default Benefits;
