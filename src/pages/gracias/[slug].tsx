import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";
// import Image from "@frontity/components/image";
import Cta from "components/Cta";
import { Check } from "components/icons";
import colors from "styles/colors";

import { GetStaticProps } from "next";
import { useQuery, prepareReactRender, useHydrateCache } from "client";
import { PropsWithServerCache } from "@gqty/react";
import { getImageURL } from "lib/api";
import Layout from "components/Layout";
import Loading from "components/loading";
import { NextSeo } from "next-seo";

type PageProps = PropsWithServerCache<{
  slug: string;
}>;
const Page = ({ cacheSnapshot, slug }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });

  const query = useQuery();
  const thankyou = query.tpages({
    filters: {
      slug: {
        eq: slug,
      },
    },
  })?.data[0];

  const page = thankyou?.attributes;

  if (query.$state.isLoading) {
    return <Loading full />;
  }

  return page ? (
    <>
      <NextSeo nofollow noindex />
      <Layout>
        <Section fluid space large>
          <DecoContainer>
            <DecoSquare />
            <DecoRounded color={colors.academy}>
              <CheckContainer>
                <Check />
              </CheckContainer>
            </DecoRounded>
          </DecoContainer>
          <Container>
            <div>
              <Title>{page.titular}</Title>
              <Content
                dangerouslySetInnerHTML={{ __html: page.contenido || "" }}
              />
              <Cta cta={page.cta} />
            </div>
          </Container>
        </Section>
      </Layout>
    </>
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

const Section = styled.article`
  ${container}
  min-height: 50vh;
  position: relative;
`;

const Container = styled.div`
  ${container}
  display: grid;
  ${mq.md} {
    grid-template-columns: 2fr 1fr;
  }
`;

const Title = styled.h2``;

const Content = styled.div`
  margin-bottom: 50px;
`;

const DecoContainer = styled.div`
  width: 100%;
  padding-bottom: 40%;
  position: relative;
  ${mq.md} {
    z-index: -1;
    padding-bottom: 100%;
    position: absolute;
    top: 0;
    right: 0;
    transform-origin: center center;
    transform: translate(50%, -70%) rotate(-30deg) scale(0.7);
    opacity: 1;
  }
  &:before {
    content: "";
    border-radius: 50%;
    width: 40%;
    padding-bottom: 40%;
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: ${colors.primary.light};
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0.3;
    ${mq.md} {
      top: 70%;
      left: 0;
    }
  }
  &:after {
    content: "";
    border-radius: 50%;
    width: 30%;
    padding-bottom: 30%;
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: ${colors.primary.light};
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0.4;
    ${mq.md} {
      left: 0;
      top: 70%;
    }
  }
`;

const DecoSquare = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 5%;
  z-index: 1;
  ${mq.md} {
    box-shadow: 0 0 4rem ${colors.primary.dark};
    background-color: ${colors.primary.dark};
    &:before {
      content: "";
      border-radius: 50%;
      width: 40%;
      padding-bottom: 40%;
      position: absolute;
      left: 0;
      top: 70%;
      background-color: white;
      transform: translate(70%, -60%);
      z-index: -1;
      opacity: 0.15;
    }
  }
`;

const DecoRounded = styled.div`
  border-radius: 50%;
  width: 23%;
  padding-bottom: 23%;
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: ${colors.academy};
  transform: translate(-50%, -50%);
  z-index: 2;
  ${mq.md} {
    left: 0;
    top: 70%;
  }
`;

const CheckContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: 50%;
  height: 50%;
  svg {
    width: 100%;
  }
`;
