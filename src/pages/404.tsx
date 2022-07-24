import Layout from "components/Layout";
import React from "react";
import styled from "@emotion/styled";

import { GetStaticProps } from "next";
import { prepareReactRender, useHydrateCache } from "client";
import { PropsWithServerCache } from "@gqty/react";

type PageProps = PropsWithServerCache<{}>;
const Page = ({ cacheSnapshot }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });
  return (
    <Layout>
      <Section>
        <Title>Página no encontrada</Title>
      </Section>
    </Layout>
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

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-transform: uppercase;
`;
