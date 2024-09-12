import React from "react";
import styled from "@emotion/styled";
import { container, mq } from "@/components/grid";
import Image from "next/image";
import insignia1 from "../../../public/ahorro-infantil/insignia1.svg";
import insignia2 from "../../../public/ahorro-infantil/insignia2.svg";
import insignia3 from "../../../public/ahorro-infantil/insignia3.svg";
import insignia4 from "../../../public/ahorro-infantil/insignia4.svg";
import album from "../../../public/ahorro-infantil/album.webp";
import etiqueta1 from "../../../public/ahorro-infantil/etiqueta1.svg";
import etiqueta2 from "../../../public/ahorro-infantil/etiqueta2.svg";
import etiqueta3 from "../../../public/ahorro-infantil/etiqueta3.svg";
import etiqueta4 from "../../../public/ahorro-infantil/etiqueta4.svg";
import etiqueta5 from "../../../public/ahorro-infantil/etiqueta5.svg";
import etiqueta6 from "../../../public/ahorro-infantil/etiqueta6.svg";
import etiqueta7 from "../../../public/ahorro-infantil/etiqueta7.svg";
import etiqueta8 from "../../../public/ahorro-infantil/etiqueta8.svg";
import space from "../../../public/ahorro-infantil/space.webp";
import { h1 } from "@/styles/tipography";

const Insignias = () => {
  return (
    <Section space fluid>
      <Header>
        <Title>Insignias</Title>
      </Header>
      <Body>
        <div>
          <Lista>
            <Insignia>
              <Image src={insignia1} alt="Universo Coopbueno Insignia" />
            </Insignia>
            <Insignia>
              <Image src={insignia2} alt="Universo Coopbueno Insignia" />
            </Insignia>
            <Insignia>
              <Image src={insignia3} alt="Universo Coopbueno Insignia" />
            </Insignia>
            <Insignia>
              <Image src={insignia4} alt="Universo Coopbueno Insignia" />
            </Insignia>
          </Lista>
        </div>
        <Contenido>
          Confiamos en que nuestros socios buscan el bienestar de toda su
          familia, así que en cada una de nuestras sucursales ofrecemos el
          servicio de Ahorro Infantil, para que cualquier hijo o hija de
          nuestros miembros también se unan al hábito del ahorro. Así que cuando
          vengas, trae su acta de nacimiento y con un mínimo de RD$200, le
          regalarás a tus hijos la promesa de un mejor mañana.s.
        </Contenido>
      </Body>
      <AlbumContainer space thin>
        <Album>
          <Image src={album} alt="Universo Coopbueno Album" />
        </Album>
        <Etiquetas>
          <Etiqueta>
            <Image src={etiqueta1} alt="Universo Coopbueno Etiqueta" />
          </Etiqueta>
          <Etiqueta>
            <Image src={etiqueta2} alt="Universo Coopbueno Etiqueta" />
          </Etiqueta>
          <Etiqueta>
            <Image src={etiqueta3} alt="Universo Coopbueno Etiqueta" />
          </Etiqueta>
          <Etiqueta>
            <Image src={etiqueta4} alt="Universo Coopbueno Etiqueta" />
          </Etiqueta>
          <Etiqueta>
            <Image src={etiqueta5} alt="Universo Coopbueno Etiqueta" />
          </Etiqueta>
          <Etiqueta>
            <Image src={etiqueta6} alt="Universo Coopbueno Etiqueta" />
          </Etiqueta>
          <Etiqueta>
            <Image src={etiqueta7} alt="Universo Coopbueno Etiqueta" />
          </Etiqueta>
          <Etiqueta>
            <Image src={etiqueta8} alt="Universo Coopbueno Etiqueta" />
          </Etiqueta>
        </Etiquetas>
      </AlbumContainer>
      <Space>
        <Image src={space} alt="Universo Coopbueno Espacio" />
      </Space>
    </Section>
  );
};

export default Insignias;

const Section = styled.section`
  ${container}
  padding: 0;
  position: relative;
`;

const Header = styled.div`
  ${container}
`;

const Title = styled.h2`
  ${h1}
  text-transform: uppercase;
  margin-bottom: 4rem;
`;

const Body = styled.div`
  ${container}
  display: grid;
  grid-template-columns: 1fr;
  gap: 0%;
  @include mq(sm) {
    gap: 10%;
  }
  @include mq(lg) {
    grid-template-columns: 2fr 1fr;
    gap: 5%;
  }
`;
const Lista = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  @include mq(sm) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 70%;
    top: 50%;
    left: 0%;
    box-shadow: 0.25rem 0.25rem 5rem rgba(0, 0, 0, 0.15);
    border-radius: 2.5rem;
    transform: translate(0, -50%);
    z-index: 1;
    @include mq(sm) {
      transform: translate(0, -20%);
    }
  }
`;

const Insignia = styled.li`
  padding: 0;
  margin: 0 auto;
  list-style: none;
  padding: 15%;
  position: relative;
  z-index: 1;
`;

const Contenido = styled.div``;

const AlbumContainer = styled.div`
  ${container}
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  justify-content: center;
  align-items: center;
  @include mq(md) {
    grid-template-columns: 3fr 1fr;
  }
`;

const Album = styled.div``;

const Etiquetas = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;
  font-size: 0;
  @include mq(md) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Etiqueta = styled.li`
  list-style: none;
  margin: 0;
  box-shadow: 0.25rem 0.25rem 5rem rgba(0, 0, 0, 0.15);
  border-radius: 50%;
`;

const Space = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  z-index: -1;
  transform: translate(60%, -50%) scaleX(-1);
  @include mq(md) {
    width: 70%;
    transform: translate(60%, -60%) scaleX(-1);
  }
`;
