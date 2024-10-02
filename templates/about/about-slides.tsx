"use client";

import React from "react";
import Image from "next/image";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import styles from "./about-slides.module.scss";
import "pure-react-carousel/dist/react-carousel.es.css";

const Slides = ({}) => {
  // const biographyImage = metabox['about-biography-image']
  //   const actualLogo = metabox["about-actual-logo"];
  //   const previousLogo = metabox["about-previous-logo"];
  //   const firstLogos = metabox["about-first-logos"];
  //   const firstOffices = metabox["about-first-offices"];

  return (
    <section className={styles.section}>
      <div className={styles.decoLeft} />
      {/* <div className={styles.decoRight} /> */}
      <CarouselProvider
        naturalSlideWidth={16}
        naturalSlideHeight={9}
        totalSlides={2}
        currentSlide={1}
        isIntrinsicHeight={true}
        isPlaying={false}
        dragEnabled={false}
        lockOnWindowScroll={true}
        // css={carouselProviderStyles}
      >
        <div className={styles.navigation}>
          <div className={styles.navWrapper}>
            <div className={styles.navItem}>
              <Dot slide={0}>Biografía</Dot>
            </div>
            <div className={styles.navItem}>
              <Dot slide={1}>Directiva</Dot>
            </div>
          </div>
        </div>
        <Slider className={styles.sliderX} trayTag="div">
          <Slide className={styles.slideX} index={0} key={0} tag="div">
            <h2 className={styles.title}>
              Biografía Manuel Ramón Bueno Caba (Momón)
            </h2>
            <div className={styles.bLayout}>
              {/* <div>
                <Image src={biographyImage} />
              </div> */}
              <div>
                <p>
                  Nació en el año 1906, hijo de los señores Mercedes Bueno y
                  doña Julia Caba, ambos oriundos de la comunidad de Partido
                  Arriba.
                </p>
                <p>
                  Cursó el 3er. Grado de la primaria, ya que era el nivel más
                  alto de esos tiempos, según sus progenitores. Dedicándose
                  luego a la agricultura junto a su padre.
                </p>
                <p>
                  En el año 1938 se casó con Amelia Dolores Peralta, procreando
                  una familia de (12) hijos (8 hembras y 4 varones), que hoy
                  siguen su ejemplo. Desarrolló un comportamiento social, sin
                  lugar a dudas con una conducta incuestionable, manteniendo
                  notable su participación en la religión Católica, destacando
                  su lucha y apoyo tanto físico como económico, hasta ver
                  construido el templo.
                </p>
                <p>
                  Fue un comunitario de grandes sentimientos y entrega, así como
                  a la familia, sirviendo de mediador y consejero de la
                  comunidad. En sus momentos libres disfrutada de un cigarro,
                  siempre sentado en una mecedora, comúnmente por la noche, ya
                  que no lo hacia en momentos de trabajo ni de actividades
                  sociales. El 7 de marzo del 1969 fue sorprendido por un
                  infarto terminante, dejando grabado en la familia, los amigos
                  y todo el que le conocía que fue un hombre de bien y servicio
                  comunitario. Sin olvidar la frase que siempre acostumbraba “no
                  he dejado ni dejaré de trabajar en favor de los demás haciendo
                  todo lo pueda y así espero que sean mis hijos”.
                </p>
                <p>
                  Sus hijos agradecen al pueblo y a esta empresa haber escogido
                  su nombre para la misma.
                </p>
              </div>
            </div>
          </Slide>
          <Slide className={styles.slideX} index={1} key={1} tag="div">
            <div>
              <h2 className={styles.title}>Directiva</h2>
              <p>Miembros de los Consejos de COOPBUENO.</p>
            </div>
            <div className={styles.dLayout}>
              <div>
                <p>
                  <strong>Consejo de Administración</strong>
                </p>
                <ul>
                  <li>
                    Carlos Yoel Tejada Lantigua
                    <br />
                    Presidente
                  </li>
                  <li>
                    Maireny Alt. Encarnación Cepeda
                    <br />
                    Vice-presidente
                  </li>
                  <li>
                    Rud Esmeralda Santana
                    <br />
                    Secretaria
                  </li>
                  <li>
                    Marcos Jhiovanny Jiménez Rosa
                    <br />
                    Tesorero
                  </li>
                  <li>
                    Carlos Danilo Ramos
                    <br />
                    Vocal
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <strong>Comité de Crédito</strong>
                </p>
                <ul>
                  <li>
                    Luines Fernando Herrera Jiménez
                    <br />
                    Presidente
                  </li>
                  <li>
                    Domingo Abigail Bueno
                    <br />
                    Secretario
                  </li>
                  <li>
                    Wilkin Evangelista Abreu Cabreja
                    <br />
                    Vocal
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <strong>Consejo de Vigilancia</strong>
                </p>
                <ul>
                  <li>
                    Milagros Alt. Ventura Gil
                    <br />
                    Presidente
                  </li>
                  <li>
                    Fermando Michel Delgado Quezada
                    <br />
                    Secretaria
                  </li>
                  <li>
                    Jhamni Magalis Cordero
                    <br />
                    Vocal
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <strong>Departamento de Educación</strong>
                </p>
                <ul>
                  <li>Prof. Zoila Carrasco</li>
                  <li>Nelson Carrasco</li>
                  <li>Wanda Espinal</li>
                </ul>
              </div>
              <div>
                <p>
                  <strong>Comisión de Educación</strong>
                </p>
                <ul>
                  <li>
                    Carlos Danilo Ramos
                    <br />
                    Presidente
                  </li>
                  <li>
                    Yudelka Ramos
                    <br />
                    Secretaria
                  </li>
                  <li>
                    Reinalda Santana
                    <br />
                    Miembro
                  </li>
                  <li>
                    Ignacia Peña
                    <br />
                    Miembro
                  </li>
                  <li>
                    Guillermo Espinal
                    <br />
                    Miembro
                  </li>
                  <li>
                    Juana Vásquez
                    <br />
                    Colaboradora
                  </li>
                </ul>
              </div>
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
    </section>
  );
};

export default Slides;
