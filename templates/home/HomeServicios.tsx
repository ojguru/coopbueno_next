'use client';

import React from "react";
import { CarouselProvider, Slider, Dot } from "pure-react-carousel";
import ServicesCards from "./HomeServicioCard";
import { Enum_Servicio_Tipo, ServicioEntity } from "@/gql/graphql";
import styles from "./HomeServicios.module.scss"
import 'pure-react-carousel/dist/react-carousel.es.css';

interface HomeServiciosProps {
  servicios?: ServicioEntity[];
}
const HomeServicios = ({ servicios = [] }: HomeServiciosProps) => {
  const mainItems = Object.values(Enum_Servicio_Tipo)
    .filter((item) => item !== "beneficios")
    .reverse();

  return servicios.length ? (
    <section id="servicios" className={styles.section} >
      <CarouselProvider
        naturalSlideWidth={16}
        naturalSlideHeight={9}
        totalSlides={mainItems.length}
        isIntrinsicHeight={true}
        isPlaying={false}
        lockOnWindowScroll
        dragEnabled={false}
        touchEnabled={false}
      >
        <div className={styles.tabs}>
          {mainItems.map((item, index) => {
            return (
              <Dot key={index} slide={index} className={styles.tab}>
                {item}
              </Dot>
            );
          })}
        </div>

        <Slider>
          {mainItems.map((mainItem, index) => {
            const items = servicios.filter(
              (servicio) => servicio?.attributes?.tipo === mainItem
            );
            return <ServicesCards key={index} {...{ items }} />;
          })}
        </Slider>
      </CarouselProvider>
    </section>
  ) : null;
};

export default HomeServicios;

