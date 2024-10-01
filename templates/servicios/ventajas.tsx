import React from "react";
import { Servicio } from "@/gql/graphql";
import styles from "./ventajas.module.scss";

interface VentajasProps {
  servicio: Servicio;
}
const Ventajas = ({ servicio }: VentajasProps) => {
  const ventajas = servicio.ventajas;

  return ventajas?.length ? (
    <section className={styles.section}>
      <div
        className={styles.container}
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <h2 className={styles.title} itemProp="name">
          VENTAJAS
        </h2>
        <ul className={styles.requirementsList}>
          {ventajas.map((item, index) => {
            const ventaja = item?.ventaja;
            return (
              <li
                className={styles.requirement}
                key={index}
                itemProp="itemListElement"
              >
                {ventaja}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  ) : null;
};

export default Ventajas;
