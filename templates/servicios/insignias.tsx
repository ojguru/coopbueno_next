import React from "react";
import Image from "next/image";
import insignia1 from "@/public/ahorro-infantil/insignia1.svg";
import insignia2 from "@/public/ahorro-infantil/insignia2.svg";
import insignia3 from "@/public/ahorro-infantil/insignia3.svg";
import insignia4 from "@/public/ahorro-infantil/insignia4.svg";
import album from "@/public/ahorro-infantil/album.webp";
import etiqueta1 from "@/public/ahorro-infantil/etiqueta1.svg";
import etiqueta2 from "@/public/ahorro-infantil/etiqueta2.svg";
import etiqueta3 from "@/public/ahorro-infantil/etiqueta3.svg";
import etiqueta4 from "@/public/ahorro-infantil/etiqueta4.svg";
import etiqueta5 from "@/public/ahorro-infantil/etiqueta5.svg";
import etiqueta6 from "@/public/ahorro-infantil/etiqueta6.svg";
import etiqueta7 from "@/public/ahorro-infantil/etiqueta7.svg";
import etiqueta8 from "@/public/ahorro-infantil/etiqueta8.svg";
import space from "@/public/ahorro-infantil/space.webp";
import styles from "./insignias.module.scss";

const Insignias = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Insignias</h2>
      </div>
      <div className={styles.body}>
        <div>
          <ul className={styles.lista}>
            <li className={styles.insignia}>
              <Image src={insignia1} alt="Universo Coopbueno Insignia" />
            </li>
            <li className={styles.insignia}>
              <Image src={insignia2} alt="Universo Coopbueno Insignia" />
            </li>
            <li className={styles.insignia}>
              <Image src={insignia3} alt="Universo Coopbueno Insignia" />
            </li>
            <li className={styles.insignia}>
              <Image src={insignia4} alt="Universo Coopbueno Insignia" />
            </li>
          </ul>
        </div>
        <p className={styles.contenido}>
          Confiamos en que nuestros socios buscan el bienestar de toda su
          familia, así que en cada una de nuestras sucursales ofrecemos el
          servicio de Ahorro Infantil, para que cualquier hijo o hija de
          nuestros miembros también se unan al hábito del ahorro. Así que cuando
          vengas, trae su acta de nacimiento y con un mínimo de RD$200, le
          regalarás a tus hijos la promesa de un mejor mañana.s.
        </p>
      </div>
      <div className={styles.albumContainer}>
        <div className={styles.album}>
          <Image src={album} alt="Universo Coopbueno Album" />
        </div>
        <ul className={styles.etiquetas}>
          <li className={styles.etiqueta}>
            <Image src={etiqueta1} alt="Universo Coopbueno Etiqueta" />
          </li>
          <li className={styles.etiqueta}>
            <Image src={etiqueta2} alt="Universo Coopbueno Etiqueta" />
          </li>
          <li className={styles.etiqueta}>
            <Image src={etiqueta3} alt="Universo Coopbueno Etiqueta" />
          </li>
          <li className={styles.etiqueta}>
            <Image src={etiqueta4} alt="Universo Coopbueno Etiqueta" />
          </li>
          <li className={styles.etiqueta}>
            <Image src={etiqueta5} alt="Universo Coopbueno Etiqueta" />
          </li>
          <li className={styles.etiqueta}>
            <Image src={etiqueta6} alt="Universo Coopbueno Etiqueta" />
          </li>
          <li className={styles.etiqueta}>
            <Image src={etiqueta7} alt="Universo Coopbueno Etiqueta" />
          </li>
          <li className={styles.etiqueta}>
            <Image src={etiqueta8} alt="Universo Coopbueno Etiqueta" />
          </li>
        </ul>
      </div>
      <div className={styles.space}>
        <Image src={space} alt="Universo Coopbueno Espacio" />
      </div>
    </section>
  );
};

export default Insignias;
