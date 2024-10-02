import React from "react";
import { PhoneIcon, ClockIcon } from "@/components/icons";
import { SucursalEntity } from "@/gql/graphql";
import styles from "./oficinas.module.scss";
import Phone from "./phone";

interface OficinasProps {
  sucursales?: SucursalEntity[];
}
const Oficinas = ({ sucursales }: OficinasProps) => {
  return sucursales?.length ? (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>Habla con nosotros</h2>
          {sucursales.map((item, index) => {
            const sucursal = item.attributes;

            return sucursal ? (
              <div className={styles.sucursal} key={index}>
                <p className={styles.name}>{sucursal.nombre}</p>
                <div className={styles.schedule}>
                  <ClockIcon />
                  <span className={styles.infoWrapper}>{sucursal.horario}</span>
                </div>
                <div className={styles.phoneBox}>
                  <PhoneIcon />
                  <div className={styles.phoneList}>
                    {sucursal.telefonos.map((item, index) => {
                      const phone = item?.telefono;

                      return <Phone phone={phone} />;
                    })}
                  </div>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </section>
    </>
  ) : null;
};

export default Oficinas;
