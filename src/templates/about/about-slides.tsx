import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";
import Image from "next/image";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import colors from "styles/colors";

const Slides = ({}) => {
  // const biographyImage = metabox['about-biography-image']
  //   const actualLogo = metabox["about-actual-logo"];
  //   const previousLogo = metabox["about-previous-logo"];
  //   const firstLogos = metabox["about-first-logos"];
  //   const firstOffices = metabox["about-first-offices"];

  return (
    <Section space>
      <DecoLeft color={colors.primary.base} />
      {/* <DecoRight color={colors.primary.light} /> */}
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
        <Navigation>
          <NavWrapper>
            <NavItem>
              <Dot slide={0}>Biografía</Dot>
            </NavItem>
            <NavItem>
              <Dot slide={1}>Directiva</Dot>
            </NavItem>
          </NavWrapper>
        </Navigation>
        <SliderX trayTag="div">
          <SlideX index={0} key={0} tag="div">
            <Subtitle>Biografía Manuel Ramón Bueno Caba (Momón)</Subtitle>
            <BLayout>
              {/* <Div>
                <Image src={biographyImage} />
              </Div> */}
              <Div>
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
              </Div>
            </BLayout>
          </SlideX>
          <SlideX index={1} key={1} tag="div">
            <div>
              <Subtitle>Directiva</Subtitle>
              <p>Miembros de los Consejos de COOPBUENO.</p>
            </div>
            <DLayout>
              <Div>
                <p>
                  <strong>Consejo de Administración</strong>
                </p>
                <ul>
                  <li>
                    Guillermo Espinal
                    <br />
                    Presidente
                  </li>
                  <li>
                    Carlos Yoel Tejada Lantigua
                    <br />
                    Vice-presidente
                  </li>
                  <li>
                    Maireny Encarnación
                    <br />
                    Secretaria
                  </li>
                  <li>
                    Carlos Danilo Ramos
                    <br />
                    Tesorero
                  </li>
                  <li>
                    Marcos Jhiovanny Jiménez Rosa
                    <br />
                    Vocal
                  </li>
                </ul>
              </Div>
              <Div>
                <p>
                  <strong>Comité de Crédito</strong>
                </p>
                <ul>
                  <li>
                    Pedro José Caba
                    <br />
                    Presidente
                  </li>
                  <li>
                    Luines Fernando Herrera
                    <br />
                    Secretario
                  </li>
                  <li>
                    Domingo Abigail Bueno
                    <br />
                    Vocal
                  </li>
                </ul>
              </Div>
              <Div>
                <p>
                  <strong>Consejo de Vigilancia</strong>
                </p>
                <ul>
                  <li>
                    Claudio de Js. Espinal
                    <br />
                    Presidente
                  </li>
                  <li>
                    Milagros Alt. Ventura Gil
                    <br />
                    Secretaria
                  </li>
                  <li>
                    Jhamni Magalis Cordero
                    <br />
                    Vocal
                  </li>
                </ul>
              </Div>
              <Div>
                <p>
                  <strong>Departamento de Educación</strong>
                </p>
                <ul>
                  <li>Prof. Zoila Carrasco</li>
                  <li>Nelson Carrasco</li>
                  <li>Wanda Espinal</li>
                </ul>
              </Div>
              <Div>
                <p>
                  <strong>Comisión de Educación</strong>
                </p>
                <ul>
                  <li>
                    Guillermo de Jesús Espinal Peñaló
                    <br />
                    Presidente
                  </li>
                  <li>
                    Ignacia Miguelina Peña Acosta
                    <br />
                    Secretaria
                  </li>
                  <li>
                    Carlos Danilo Ramos Tejada
                    <br />
                    Miembro
                  </li>
                  <li>
                    Rafaelina Yuderca Ramos
                    <br />
                    Miembro
                  </li>
                  <li>
                    Reinada del Carmen Santana
                    <br />
                    Miembro
                  </li>
                  <li>
                    Zoila Alt. Carrasco
                    <br />
                    Enc. Dpto.
                  </li>
                  <li>
                    Nelsón Ant. Carrasco
                    <br />
                    Asistente
                  </li>
                  <li>
                    Wanda G. Espinal Peralta
                    <br />
                    Asistente
                  </li>
                  <li>
                    Juana Ivelise Vásquez Santana
                    <br />
                    Colaboradora
                  </li>
                </ul>
              </Div>
            </DLayout>
          </SlideX>
        </SliderX>
      </CarouselProvider>
    </Section>
  );
};

export default Slides;

const Section = styled.section`
  ${container}
`;

const Navigation = styled.div`
  text-align: center;
`;

const NavWrapper = styled.div`
  ${container}
  padding: 0;
  background-color: white;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
  overflow: hidden;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  display: inline-block;
  width: initial;
`;

const NavItem = styled.div`
  padding: 0;
  text-align: center;
  display: inline-block;
  position: relative;
  button {
    color: ${colors.gray.base};
    background: transparent;
    width: 100%;
    padding: 1.5rem 4rem;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    &:after {
      content: "";
      display: block;
      margin-top: 0.5rem;
      width: 10rem;
      height: 0.2rem;
      background-color: transparent;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
    }
    &[disabled] {
      color: ${colors.green.base};
      &:after {
        content: "";
        background-color: green;
      }
    }
  }
`;

const BLayout = styled.div``;

const DLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Div = styled.div``;

const Subtitle = styled.h2`
  text-transform: uppercase;
`;

const SliderX = styled(Slider)`
  background-color: white;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
  border-radius: 2rem;
`;

const SlideX = styled(Slide)`
  ${container}
  position: relative !important;
  ${mq.md} {
    padding: 0 3rem;
  }
`;

const carouselProviderStyles = css`
  border-radius: 2%;
`;

const DecoLeft = styled.div`
  ${({ color = "green" }) => css`
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    background-color: ${color};
    transform-origin: 0 0;
    transform: rotate(45deg) translate(-80%, 0);
    border-radius: 5rem;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 20%;
      top: -20%;
      background-color: inherit;
      transform: scale(1);
      opacity: 0.1;
      z-index: 0;
      border-radius: inherit;
    }
  `}
`;

const DecoRight = styled.div`
  ${({ color = "green" }) => css`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 0;
    width: 50%;
    padding-bottom: 50%;
    background-color: ${color};
    transform-origin: 100% 100%;
    transform: rotate(45deg) translate(50%, 0);
    border-radius: 5rem;
  `}
`;
