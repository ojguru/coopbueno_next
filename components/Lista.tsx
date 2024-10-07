import React from "react";
import { ComponentGeneralLista } from "@/gql/graphql";
import styles from "./Lista.module.scss";

interface ListaProps {
  lista: ComponentGeneralLista;
}
const Lista = ({ lista }: ListaProps) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{lista.titulo}</h2>
      <ul className={styles.list}>
        {lista.items.map((benefit, index) => {
          return (
            <li className={styles.item} key={index}>
              {benefit?.texto}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Lista;
