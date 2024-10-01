import React from "react";
import { Servicio } from "@/gql/graphql";
import styles from "./requisitos.module.scss";

interface RequisitosProps {
  servicio: Servicio;
}
const Requirements = ({ servicio }: RequisitosProps) => {
  const requisitos = servicio.requisitos;

  return requisitos?.length ? (
    <section
      className={styles.section}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <h2 className={styles.title} itemProp="name">
        REQUISITOS
      </h2>
      <div className={styles.box}>
        <ul className={styles.list}>
          {requisitos.map((item, index) => {
            return (
              <li
                className={styles.requirement}
                key={index}
                itemProp="itemListElement"
              >
                {item?.requisito}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  ) : null;
};

export default Requirements;
