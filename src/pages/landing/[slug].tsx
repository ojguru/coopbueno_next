import React, { Suspense } from "react";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";
import Image from "next/image";
import colors from "styles/colors";

import Lista from "components/Lista";
import Formulario from "components/Formulario";

import { GetStaticProps } from "next";
import {
  useQuery,
  prepareReactRender,
  useHydrateCache,
  ENUM_COMPONENTSHAREDMETASOCIAL_SOCIALNETWORK,
} from "client";
import { PropsWithServerCache } from "@gqty/react";
import { getImageURL } from "lib/api";
import Layout from "components/Layout";
import Loading from "components/loading";
import { NextSeo } from "next-seo";
import { SITE_NAME, SITE_URL } from "lib/constants";

type PageProps = PropsWithServerCache<{
  slug: string;
}>;
const Page = ({ cacheSnapshot, slug }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });

  const query = useQuery();
  const landing = query.landings({
    filters: {
      slug: {
        eq: slug,
      },
    },
  })?.data[0];

  const page = landing?.attributes;
  const formulario = page?.formulario;
  const contenido = page?.contenido?.map(
    (item) => item?.$on.ComponentGeneralLista
  );

  // SEO
  const image = page?.imagen?.data?.attributes;

  const seo = page?.seo;

  const facebookMeta = seo
    ?.metaSocial()
    ?.filter(
      (item) =>
        item?.socialNetwork ===
        ENUM_COMPONENTSHAREDMETASOCIAL_SOCIALNETWORK.Facebook
    )[0];

  const facebookMetaImage = facebookMeta?.image?.data?.attributes;

  return page ? (
    <Suspense fallback={<Loading full />}>
      <NextSeo
        title={seo?.metaTitle || page?.titular}
        description={seo?.metaDescription || page?.copy || page?.titular}
        canonical={seo?.canonicalURL || `${SITE_URL}/${page?.slug}`}
        openGraph={{
          url: `${SITE_URL}/${page?.slug}`,
          title: facebookMeta?.title || page?.titular,
          description: facebookMeta?.description || page?.copy || page?.titular,
          images: [
            {
              url: getImageURL(facebookMetaImage?.url || image?.url),
              width: facebookMetaImage?.width || image?.width || 900,
              height: facebookMetaImage?.height || image?.height || 800,
              alt:
                facebookMetaImage?.alternativeText ||
                image?.alternativeText ||
                page?.titular,
              type: facebookMetaImage?.mime || image?.mime,
            },
          ],
          site_name: SITE_NAME,
        }}
        noindex={
          seo?.metaRobots?.includes("noindex") ||
          process.env.NODE_ENV === "development"
        }
        nofollow={
          seo?.metaRobots?.includes("nofollow") ||
          process.env.NODE_ENV === "development"
        }
      />
      <Layout>
        <Article space fluid>
          <Container space>
            <Header>
              <PageTitle>{page?.titular}</PageTitle>
              <p>{page.copy}</p>
              <Image
                src={getImageURL(page?.imagen?.data?.attributes?.url)}
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
            {contenido?.length
              ? contenido.map((component, index) => {
                  if (component?.__typename === "ComponentGeneralLista") {
                    return <Lista lista={component} key={index} />;
                  }
                  return null;
                })
              : null}
          </Container>
          <Deco />
        </Article>
      </Layout>
    </Suspense>
  ) : null;
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx: any) => {
  const slug = _ctx.params.slug.toString();
  const { cacheSnapshot } = await prepareReactRender(<Page slug={slug} />);

  // NOT FOUND - DETERMINAMOS SI NO EXISTEN DATOS EN LA CONSULTA DEL SNAPSHOT
  const snapShot: any = await JSON.parse(cacheSnapshot);
  const cache = await snapShot.cache;
  const keys = Object.keys(cache).filter((key) => key.includes("landings"));

  const notFound =
    keys.filter((key) => {
      return (
        cache[key]?.data?.filter((item: any) => item.attributes?.slug === slug)
          .length > 0
      );
    }).length === 0;

  return {
    notFound: notFound,
    props: {
      cacheSnapshot,
      slug,
    },
  };
};

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

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
