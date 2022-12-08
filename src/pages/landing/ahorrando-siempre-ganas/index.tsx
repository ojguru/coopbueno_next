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
import logo from "../../../../public/landing/ahorrando-siempre-ganas/logo.svg";
import resort from "../../../../public/landing/ahorrando-siempre-ganas/resort.webp";
import carros from "../../../../public/landing/ahorrando-siempre-ganas/carros.webp";
import dinero from "../../../../public/landing/ahorrando-siempre-ganas/dinero.webp";
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
      respuesta:
        "<p>El sorteo será realizado el día 14 de febrero de 2022. Será transmitido en vivo por los canales digitales y redes sociales de la Cooperativa.</p>",
    },
    {
      pregunta: "¿Cómo genero boletos?",
      respuesta: `
      <p>Los boletos serán generados de forma electrónica de la siguiente manera:</p>
      <ul>
        <li>1 boleto por cada RD$500.00 de incremento promedio en las cuentas de ahorros</li>
        <li>2 boletos por apertura de certificados financieros</li>
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
        <li>Las cuentas tipo: San Bueno, Orden de pago, ahorros institucionales, depósitos a plazo fijos y cuentas de aportaciones</li>
      </ul>
      `,
    },
    {
      pregunta: "Si soy premiado, ¿puedo seguir participando para más premios?",
      respuesta:
        "<p>Si un socio gana un premio cualquiera de la promoción el mismo será excluido automáticamente de los demás sorteos.</p>",
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
              <Logo>
                <Image src={logo} priority />
              </Logo>
              <br />
              <br />
              <Copy>
                Al incrementar <strong>RD$500.00</strong> en el balance promedio
                de tu cuenta de ahorros generas boletos para ser uno de los
                ganadores de:
              </Copy>
              <Premios>
                <Carros>
                  <Image src={carros} />
                </Carros>
                <Resort>
                  <Image src={resort} />
                </Resort>
                <Dinero>
                  <Image src={dinero} />
                </Dinero>
              </Premios>
            </Container>
          </Cover>
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
  display: fex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10rem;
  div {
    width: 100%;
    max-width: 500px;
  }
`;

const Resort = styled.div``;

const Carros = styled.div``;

const Dinero = styled.div``;
