import React from "react";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";
import Image from "next/image";
import colors from "styles/colors";

import Lista from "components/Lista";
import Formulario from "components/Formulario";

import { GetStaticProps } from "next";
import { useQuery, prepareReactRender, useHydrateCache } from "client";
import { PropsWithServerCache } from "@gqty/react";
import { getImageURL } from "lib/api";
import Layout from "components/Layout";
import Loading from "components/loading";

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

  if (query.$state.isLoading) {
    return <Loading full />;
  }

  return page ? (
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
  ) : null;
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx: any) => {
  const slug = _ctx.params.slug.toString();
  const { cacheSnapshot } = await prepareReactRender(<Page slug={slug} />);

  return {
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
