import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CloseIcon } from "@/components/icons";
import styles from "./HomeServicioCard.module.scss";

import { Slide } from "pure-react-carousel";


import { InView } from "react-intersection-observer";
import { Enum_Servicio_Categoria, ServicioEntity } from "@/gql/graphql";

import ahorro from "@/public/ahorro.svg";
import prestamos from "@/public/prestamos.svg";
import facilidades from "@/public/facilidades.svg";

interface HomeServiciosCardProps {
  items: ServicioEntity[];
}

type categoria = {
  nombre: string;
  icono: any;
};
const HomeServiciosCard = ({ items }: HomeServiciosCardProps) => {
  const [active, setActive] = useState(-1);

  const categorias = [
    {
      nombre: Enum_Servicio_Categoria.Ahorro,
      icono: ahorro,
    },
    {
      nombre: Enum_Servicio_Categoria.Prestamos,
      icono: prestamos,
    },
    {
      nombre: Enum_Servicio_Categoria.Facilidades,
      icono: facilidades,
    },
  ];

  return (
    <InView threshold={0.3}>
      {({ ref, inView }) => (
        <Slide index={0} tag="li" className={styles.slide}>
          <div ref={ref}>
            <div className={styles.container}>
              {categorias.map((item: categoria, index: number) => {
                const isActive = active === index;

                return (
                  <div
                    className={`${styles.card} ${isActive?"active":""}`}
                    key={index}
                    hidden={active !== -1 && !isActive}
                  >
                    <div className={`${styles.serviceCard} ${isActive?"active":""}`}>
                      <div
                        onClick={(e) => {
                          setActive(index);
                        }}
                      >
                        <div className={`${styles.cardImage} ${isActive?"active":""}`}>
                          <div className={styles.media}>
                            <div className={styles.imageWrapper}>
                              <Image
                                src={item.icono}
                                alt={item.nombre}
                                width={1080}
                                height={1080}
                              />
                            </div>
                          </div>
                        </div>
                        <div className={`${styles.cardContent} ${isActive?"active":""}`}>
                          <h3 className={`${styles.cardTitle} ${isActive?"active":""}`} >
                            {item.nombre}
                          </h3>
                          <div
                            className={`${styles.cardServices} ${isActive?"active":""}`}
                          >
                            {items
                              .filter((service) => {
                                return (
                                  service?.attributes?.categoria === item.nombre
                                );
                              })
                              .map((service, index) => {
                                const servicio = service.attributes;

                                return servicio ? (
                                  <Link
                                    key={index}
                                    href={`/servicios/${servicio.slug}`}
                                    passHref
                                    className={styles.link}
                                  >
                                      <div
                                        className={styles.service}
                                        key={index}
                                      >
                                        {servicio.nombre}
                                      </div>
                                  </Link>
                                ) : null;
                              })}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles.cardCloseBtn} ${isActive?"active":""}`}
                        onClick={(e) => {
                          setActive(-1);
                        }}
                      >
                        <CloseIcon />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Slide>
      )}
    </InView>
  );
};

export default HomeServiciosCard;
