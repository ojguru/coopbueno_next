import React, { Suspense } from "react";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";
import Image from "next/image";
import colors from "styles/colors";

import Formulario from "components/Formulario";

import { GetStaticProps } from "next";
import { prepareReactRender, useHydrateCache } from "client";
import { PropsWithServerCache } from "@gqty/react";
import { getImageURL } from "lib/api";
import Layout from "components/Layout";
import Loading from "components/loading";
import { NextSeo } from "next-seo";
import { SITE_NAME, SITE_URL } from "lib/constants";

type PageProps = PropsWithServerCache<{}>;
const Page = ({ cacheSnapshot }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });

  const page = {
    titular: "Queremos hacer negocios contigo",
    copy: `
      <p>Estamos comprometidos con aquellos que suman, que sirven a los demás y que trabajan día a día para lograr sus metas.</p>
      <P>Por eso hemos diseñado una serie de servicios que te ayudarán a potenciar tus ganancias.</P>
    `,
    slug: "hablemos-de-negocios",
    image: {
      url: "/landing/hablemos-de-negocios/portada.webp",
      width: 900,
      height: 800,
      alt: "Hablemos de negocios",
      type: "",
    },
    formulario: {
      id: "",
      formId: "862702b9-c601-459d-82ac-f51aa43ebbe6",
    },
  };

  const image = page.image;
  const formulario = page.formulario;

  return (
    <Suspense fallback={<Loading full />}>
      <NextSeo
        title={page?.titular}
        description={page?.copy || page?.titular}
        canonical={`${SITE_URL}/${page?.slug}`}
        openGraph={{
          url: `${SITE_URL}/${page?.slug}`,
          title: page?.titular,
          description: page?.copy || page?.titular,
          images: [
            {
              url: image.url,
              width: image?.width || 900,
              height: image?.height || 800,
              alt: "Hablemos de negocios",
              // type: facebookMetaImage?.mime || image?.mime,
            },
          ],
          site_name: SITE_NAME,
        }}
      />
      <Layout>
        <Article space fluid>
          <Container space>
            <Header>
              <PageTitle>{page?.titular}</PageTitle>
              <div dangerouslySetInnerHTML={{ __html: page.copy }} />
              <Image
                src={page.image.url}
                alt={page.titular}
                width={1080}
                height={1080}
                priority
                objectFit="contain"
              />
            </Header>
            <FormWrapper>
              <LandingForm>
                <Formulario formulario={formulario} />
              </LandingForm>
            </FormWrapper>
          </Container>
          <Deco />
        </Article>
      </Layout>
    </Suspense>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx: any) => {
  const { cacheSnapshot } = await prepareReactRender(<Page />);

  return {
    props: {
      cacheSnapshot,
    },
  };
};

const Article = styled.article`
  ${container}
  padding: 0;
`;

const Container = styled.div`
  ${container}
  display: grid;
  gap: 3rem;
  ${mq.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Header = styled.header``;

const PageTitle = styled.h1`
  text-transform: uppercase;
`;

const FormWrapper = styled.section`
  position: relative;
  /* order: 4; */
  ${mq.lg} {
    order: initial;
  }
`;

const LandingForm = styled.div`
  box-shadow: 0 1.5rem 2.5rem #75c15133;
  background-color: white;
  margin: 0 auto;
  border-radius: 2rem;
  /* overflow: hidden; */
  padding: 10%;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 20%;
    top: 0;
    height: 0;
    width: 15%;
    padding-bottom: 15%;
    background-color: ${colors.primary.base};
    transform: translate(0, -40%);
    z-index: -1;
    border-radius: 10%;
  }
  &:after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    height: 0;
    width: 40%;
    padding-bottom: 40%;
    background-color: ${colors.primary.base};
    transform: translate(15%, 15%);
    z-index: -1;
    border-radius: 10%;
  }
`;

const Deco = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  padding-bottom: 50%;
  border-radius: 5%;
  background-color: ${colors.primary.light}33;
  transform: translate(80%, -30%) rotate(-35deg);
  z-index: -1;
  &:before {
    content: "";
    position: absolute;
    left: 8%;
    top: 0;
    width: 6%;
    padding-bottom: 6%;
    border-radius: 50%;
    background-color: ${colors.secondary.base};
    transform: translate(0, -50%);
  }
  &:after {
    content: "";
    position: absolute;
    left: 15%;
    top: 22%;
    width: 100%;
    padding-bottom: 100%;
    border-radius: inherit;
    background-color: ${colors.primary.light};
    box-shadow: -0.5rem 0.5rem 2.5rem ${colors.primary.light};
  }
`;
