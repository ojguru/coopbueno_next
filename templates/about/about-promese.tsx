import React from "react";
import styles from "./about-promese.module.scss";

const Promese = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>Misión</h2>
          <p>
            Somos una institución de economía solidaria que apoya el crecimiento
            sostenible de las comunidades, creando valor a los sueños de los
            asociados, ofreciendo soluciones integrales a sus necesidades
            financieras.
          </p>
        </div>
        <div>
          <h2 className={styles.title}>Visión</h2>
          <p>
            Ser reconocida como una cooperativa comprometida con el apoyo socio
            ambiental, la innovación y el mejoramiento económico de sus
            asociados mediante el crecimiento sostenible.
          </p>
        </div>
        <div>
          <h2 className={styles.title}>Valores</h2>
          <p>COOPBUENO se caracteriza por los siguientes valores:</p>
          <ul>
            <li>Empatía</li>
            <li>Solidaridad</li>
            <li>Integridad</li>
            <li>Eficiencia</li>
            <li>Transparencia</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Promese;
