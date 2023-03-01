import React, { Suspense } from "react";

import { GetStaticProps } from "next";

import {
  useQuery,
  prepareReactRender,
  useHydrateCache,
  ComponentGeneralFormulario,
} from "client";
import { PropsWithServerCache } from "@gqty/react";
import Layout from "components/Layout";
import Loading from "components/loading";
import { NextSeo } from "next-seo";
import { SITE_NAME, SITE_URL } from "lib/constants";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";
import Image from "next/image";

//recursos
import textura from "../../../../public/landing/ahorrando-siempre-ganas/textura.webp";
import portada from "../../../../public/landing/ahorrando-siempre-ganas/cover.webp";
import logo from "../../../../public/landing/ahorrando-siempre-ganas/logo.webp";
import resort from "../../../../public/landing/ahorrando-siempre-ganas/resort.webp";
import carros from "../../../../public/landing/ahorrando-siempre-ganas/carros.webp";
import dinero from "../../../../public/landing/ahorrando-siempre-ganas/dinero.webp";
import bandera from "../../../../public/landing/ahorrando-siempre-ganas/bandera.webp";
import carita from "../../../../public/landing/ahorrando-siempre-ganas/carita.webp";
import flor from "../../../../public/landing/ahorrando-siempre-ganas/flor.webp";
import arcoiris from "../../../../public/landing/ahorrando-siempre-ganas/arcoiris.webp";
import Formulario from "components/Formulario";
import dynamic from "next/dynamic";
const Conversion = dynamic(() => import("./conversion"), {
  ssr: false,
});

type PageProps = PropsWithServerCache<{}>;
const Page = ({ cacheSnapshot }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });

  const query = useQuery();

  const formulario: ComponentGeneralFormulario = {
    id: "81d0d360-7f5c-4a34-bd87-e467dcf7601e",
    formId: "81d0d360-7f5c-4a34-bd87-e467dcf7601e",
  };

  const preguntas = [
    {
      pregunta: "¿Cuánto dura la promoción?",
      respuesta:
        "<p>Esta promoción es válida desde el día 22 de noviembre de 2022 hasta el día 14 de febrero de 2023.</p>",
    },
    {
      pregunta: "¿Cuándo se realizará el sorteo?",
      respuesta: `
        <p>Serán realizado 3 sorteos:</p>
        <ol>
          <li>Primer sorteo se realizará el <strong>14 de febrero de 2023</strong>, donde serán permiados <strong>14 ganadores de RD$50,000.00</strong>, <strong>14 ganadores de RD$25,000.00</strong> y <strong>2 ganadores</strong> de fines de semana en un resort.</li></br>
          <li>Segundo sorteo se realizará el <strong>1 de abril de 2023</strong>, donde será seleccionado el ganador del primer carro <strong>Kia Picanto</strong>.</li></br>
          <li>Tercer sorteo se realizará el <strong>27 de mayo de 2023</strong>, donde será seleccionado el ganador del segundo carro <strong>Kia Picanto</strong>.</li></br>
        </ol>
        <p>Los sorteos serán transmitidos en vivo por los canales digitales y redes sociales de la Cooperativa</p>
      `,
    },
    {
      pregunta: "¿Cómo genero boletos?",
      respuesta: `
      <p>Los boletos serán generados de forma electrónica de la siguiente manera:</p>
      <ul>
        <li>1 boleto por cada RD$500.00 de incremento promedio en las cuentas de ahorros.</li>
        <li>2 boletos por apertura de certificados financieros.</li>
        <li>2 boletos por colocar créditos al día para aquellos que tengan más de dos cuotas atrasadas.</li>
      </ul>
      `,
    },
    {
      pregunta: "¿Quienes participan?",
      respuesta:
        "<p>Participan todos los socios con cuentas de ahorro en Coopbueno.</p>",
    },
    {
      pregunta: "¿Quienes no participan?",
      respuesta: `
      <p>Los colaboradores y directivos de Coopbueno</p>
      <ul>
        <li>Además de las parejas e hijos de los mismos.</li>
        <li>Los socios que poseen créditos atrasados</li>
      </ul>
      <p>no participan</p>
      <ul>
        <li>Las agencias publicitarias que participan en el desarrollo de la presente campaña</li>
        <li>Los abogados notarios</li>
        <li>Empleados de Cosefi</li>
        <li>Las cuentas tipo: San Bueno, Orden de pago, ahorros institucionales y cuentas de aportaciones</li>
      </ul>
      `,
    },
    {
      pregunta: "¿Debo registrarme en algun lugar para participar?",
      respuesta: `
      <p>Participar es sencillo:</p>
      <ol>
        <li>Si eres socio de Coopbueno, solo debes continuar realizando tus transacciones con normalidad y generarás boletos cuando esas transacciones cumplan con lo especificado en las bases del consurso.</li>
        <li>Si aun no eres socio de Coopbueno, te invitamos a que seas parte de la cooperativa, visita la sucursal más cercana y adquieras el servicio que mejor se adecue a tus necesidades financieras.</li>
      </ol>
      `,
    },
    {
      pregunta:
        "¿Los certificados financieros solo generan boletos en la apertura?",
      respuesta: `
        <p>Los certificados siguen generando boletos con el pago de interés, generando 1 boleto adicional por cada RD$500.00 de incremento promedio en la cuenta de ahorro.</p>
      `,
    },
    {
      pregunta: "Si soy premiado, ¿puedo seguir participando para más premios?",
      respuesta:
        "<p>Si un socio gana un premio cualquiera de la promoción el mismo será excluido automáticamente de los demás sorteos.</p>",
    },
  ];

  const ganadores50 = [
    {
      nombre: "Enmanuel",
      apellido: "Rodríguez Vargas",
      sucursal: "Partido",
    },
    {
      nombre: "Efigenia Evangelista",
      apellido: "Rodríguez Jiménez",
      sucursal: "El Pino",
    },
    {
      nombre: "Yinelki Felicia",
      apellido: "Castro de Ortiz",
      sucursal: "Castañuelas",
    },
    {
      nombre: "Awilda del Carmen",
      apellido: "Castro de Gómez",
      sucursal: "Villa Vásquez",
    },
    {
      nombre: "Evelín María",
      apellido: "García de Rodríguez",
      sucursal: "Dajabón",
    },
    {
      nombre: "Milquella",
      apellido: "Bello Pichardo",
      sucursal: "Dajabón",
    },
    {
      nombre: "Yelmison",
      apellido: "Almánzar Jiménez",
      sucursal: "Villa Isabella",
    },
    {
      nombre: "Marleni Evangelista",
      apellido: "Martínez Quiñónez",
      sucursal: "El Pocito",
    },
    {
      nombre: "Wáscar Fernando",
      apellido: "López Polanco",
      sucursal: "Santiago",
    },
    {
      nombre: "Cristino",
      apellido: "Medina Carrera",
      sucursal: "Santiago",
    },
    {
      nombre: "Cándida",
      apellido: "Paulina Marte",
      sucursal: "Santo Domingo",
    },
    {
      nombre: "Ángel de los Santos",
      apellido: "Medina Gil",
      sucursal: "Santo Domingo",
    },
    {
      nombre: "Ángel Daniel",
      apellido: "Vargas Santana",
      sucursal: "Santiago",
    },
    {
      nombre: "Francisco Javier",
      apellido: "Tejada Tejada",
      sucursal: "Villa los Almácigos",
    },
  ];
  const ganadores25 = [
    {
      nombre: "Altagracia",
      apellido: "Laureano",
      sucursal: "Santiago",
    },
    {
      nombre: "José Armando",
      apellido: "Escarramán Silverio",
      sucursal: "Villa Isabela",
    },
    {
      nombre: "María Evangelista",
      apellido: "Liriano Veras",
      sucursal: "Santiago",
    },
    {
      nombre: "Nelson Nicolás",
      apellido: "González",
      sucursal: "Santiago",
    },
    {
      nombre: "Ramón Bolivar",
      apellido: "Reyes Rodríguez",
      sucursal: "Castañuelas",
    },
    {
      nombre: "Miriam",
      apellido: "Cruz",
      sucursal: "Villa Vásquez",
    },
    {
      nombre: "Santa Elízabeth",
      apellido: "Mena Santos",
      sucursal: "Villa los Almácigos",
    },
    {
      nombre: "Ana Guillermina",
      apellido: "Espinal Collado",
      sucursal: "Monte Cristi",
    },
    {
      nombre: "Ysabel",
      apellido: "Abreu Gómez",
      sucursal: "Santo Domingo",
    },
    {
      nombre: "María Antonia",
      apellido: "Rivas Méndez",
      sucursal: "Santo Domingo",
    },
    {
      nombre: "Antonia Altagracia",
      apellido: "Rivas Tejada",
      sucursal: "Dajabón",
    },
    {
      nombre: "Ángel Luis",
      apellido: "Gómez Muñoz",
      sucursal: "Manzanillo",
    },
    {
      nombre: "Jedwin",
      apellido: "Estévez Ferández",
      sucursal: "El Pino (zona urbana)",
    },
    {
      nombre: "José Roamir",
      apellido: "Valenzuela Ortíz",
      sucursal: "Oficina Principal",
    },
  ];

  const ganadoresResort = [
    {
      nombre: "Bezaida Mercedes",
      apellido: "González Gómez",
      sucursal: "Santiago",
    },
    {
      nombre: "Luciano",
      apellido: "González Rosario",
      sucursal: "Villa Vásquez",
    },
  ];

  return (
    <Suspense fallback={<Loading full />}>
      <NextSeo
        title="Ahorrando siempre ganas"
        description="Coopbueno te premia con más de 1 millón de premios en efectivo, fines de semanas en resorts y 2 carros kia picanto. "
        openGraph={{
          url: `${SITE_URL}`,
          title: "Ahorrando siempre ganas",
          description:
            "Coopbueno te premia con más de 1 millón de premios en efectivo, fines de semanas en resorts y 2 carros kia picanto.",
          site_name: SITE_NAME,
        }}
      />
      <Layout>
        <Article>
          <Portada>
            <Image src={portada} priority />
          </Portada>
          <Cover>
            <Container spaceBottom>
              <Bandera>
                <Image src={bandera} priority />
              </Bandera>
              <Bandera1>
                <Image src={bandera} priority />
              </Bandera1>
              <Bandera2>
                <Image src={bandera} priority />
              </Bandera2>
              <Carita>
                <Image src={carita} priority />
              </Carita>
              <Flor>
                <Image src={flor} priority />
              </Flor>
              <Arcoiris>
                <Image src={arcoiris} priority />
              </Arcoiris>
              <Logo>
                <Image src={logo} priority />
              </Logo>
              <br />
              <br />
              <Copy>
                <strong>Aún tienes chance de ganar.</strong> Al incrementar{" "}
                <strong>RD$500.00</strong> en el balance promedio de tu cuenta
                de ahorros generas boletos para ser uno de los ganadores de:
              </Copy>
              <Premios>
                <Carros>
                  <Image src={carros} />
                </Carros>
              </Premios>
            </Container>
          </Cover>
          <SeccionGanadores>
            <GanadoresTitle>Ganadores del primer sorteo</GanadoresTitle>
            <Dinero>
              <Image src={dinero} />
            </Dinero>
            <SorteoTitle>Ganadores 14 premios de RD$50,000.00</SorteoTitle>
            <Ganadores>
              {ganadores50.map((item, key) => {
                return (
                  <Ganador key={key}>
                    <GanadorNombreCompleto>
                      <GanadorNombre>{item.nombre}</GanadorNombre>
                      <br />
                      <GanadorApellido>{item.apellido}</GanadorApellido>
                    </GanadorNombreCompleto>
                    <GanadorSucursal>
                      Sucursal: <strong>{item.sucursal}</strong>
                    </GanadorSucursal>
                  </Ganador>
                );
              })}
            </Ganadores>
            <SorteoTitle>Ganadores 14 premios de RD$25,000.00</SorteoTitle>
            <Ganadores>
              {ganadores25.map((item, key) => {
                return (
                  <Ganador key={key}>
                    <GanadorNombreCompleto>
                      <GanadorNombre>{item.nombre}</GanadorNombre>
                      <br />
                      <GanadorApellido>{item.apellido}</GanadorApellido>
                    </GanadorNombreCompleto>
                    <GanadorSucursal>
                      Sucursal: <strong>{item.sucursal}</strong>
                    </GanadorSucursal>
                  </Ganador>
                );
              })}
            </Ganadores>
            <Resort>
              <Image src={resort} />
            </Resort>
            <SorteoTitle>Ganadores fines de semana en resort</SorteoTitle>
            <Ganadores>
              {ganadoresResort.map((item, key) => {
                return (
                  <Ganador key={key}>
                    <GanadorNombreCompleto>
                      <GanadorNombre>{item.nombre}</GanadorNombre>
                      <br />
                      <GanadorApellido>{item.apellido}</GanadorApellido>
                    </GanadorNombreCompleto>
                    <GanadorSucursal>
                      Sucursal: <strong>{item.sucursal}</strong>
                    </GanadorSucursal>
                  </Ganador>
                );
              })}
            </Ganadores>
          </SeccionGanadores>
          <Container space>
            <QA>
              <QATitle>Bases del concurso</QATitle>
              {preguntas.map((item, key) => {
                return (
                  <div key={key}>
                    <Pregunta>{item.pregunta}</Pregunta>
                    <Respuesta
                      dangerouslySetInnerHTML={{ __html: item.respuesta }}
                    />
                  </div>
                );
              })}
            </QA>
          </Container>
          <Container space>
            <Conversion formulario={formulario} />
          </Container>
        </Article>
      </Layout>
    </Suspense>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx: any) => {
  const { cacheSnapshot } = await prepareReactRender(<Page />);

  return {
    props: { cacheSnapshot },
  };
};

const marron = "#64350d";

const Article = styled.article`
  background-image: url(${textura.src});
  background-color: #f7bf78;
  background-repeat: repeat;
  overflow: hidden;
  background-blend-mode: multiply;

  h2 {
    color: ${marron};
  }
`;

const Portada = styled.div`
  width: 70%;
  margin-left: auto;
  text-align: right;
`;

const Container = styled.div`
  ${container}
`;

const QA = styled.div`
  background-color: white;
  border: 0.5rem solid #f0771a;
  padding: 5%;
  box-shadow: 0 2.5rem 2.5rem rgba(0, 0, 0, 0.15);
`;

const QATitle = styled.h2`
  text-transform: uppercase;
`;

const Pregunta = styled.h4`
  color: #f0771a;
  margin-bottom: 0;
`;

const Respuesta = styled.div``;

const Logo = styled.div`
  width: 100%;
  max-width: 60rem;
`;

const Copy = styled.p`
  color: ${marron};
  font-size: 2rem;
  ${mq.lg} {
    font-size: 4rem;
  }
`;

const Cover = styled.div``;

const Premios = styled.div`
  text-align: center;
  div {
    display: inline-block;
    width: 100%;
    max-width: 500px;
    margin: 5rem 0;
  }
`;

const Carros = styled.div``;

const Dinero = styled.div`
  max-width: 30rem;
  margin: 0 auto;
`;

const Resort = styled.div`
  max-width: 30rem;
  margin: 0 auto;
`;

const Bandera = styled.div`
  position: absolute;
  width: 60%;
  top: 0;
  right: 0;
  transform: translate(60%, 0%) scaleX(-1);
  z-index: 0;
`;
const Bandera1 = styled.div`
  position: absolute;
  width: 60%;
  left: 0;
  top: 50%;
  transform: translate(-70%, -20%);
  z-index: 0;
`;

const Bandera2 = styled.div`
  position: absolute;
  width: 60%;
  right: 0;
  bottom: 0;
  transform: translate(80%, 0%) scaleX(-1);
  z-index: 0;
`;
const Flor = styled.div`
  position: absolute;
  bottom: 0%;
  right: 0;
  width: 10rem;
`;
const Arcoiris = styled.div`
  position: absolute;
  bottom: 0%;
  left: 50%;
  width: 10rem;
`;
const Carita = styled.div`
  position: absolute;
  bottom: 0%;
  width: 10rem;
`;

const SeccionGanadores = styled.div`
  ${container}
`;

const GanadoresTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

const SorteoTitle = styled.h3`
  text-transform: uppercase;
  color: ${marron};
`;

const Ganadores = styled.ul`
  margin: initial;
  padding: initial;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 8rem;
  ${mq.sm} {
    grid-template-columns: 1fr 1fr;
  }
  ${mq.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Ganador = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: white;
  padding: 2rem;
  border-radius: 2rem;
  border: 0.2rem solid ${marron};
  position: relative;
`;

const GanadorNombreCompleto = styled.h5`
  text-transform: uppercase;
  color: ${marron};
  margin: 0;
  margin-bottom: 0.5rem;
`;

const GanadorNombre = styled.span`
  font-weight: 400;
`;

const GanadorApellido = styled.span`
  font-weight: 900;
`;

const GanadorSucursal = styled.p`
  margin: 0;
`;
