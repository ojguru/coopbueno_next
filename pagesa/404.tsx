import Layout from "@/components/Layout";
import React, { Suspense } from "react";
import styled from "@emotion/styled";

import { GetStaticProps } from "next";
import { prepareReactRender, useHydrateCache } from "@/gql/graphql";
import { PropsWithServerCache } from "@gqty/react";
import Loading from "@/components/loading";

type PageProps = PropsWithServerCache<{}>;
const Page = ({ cacheSnapshot }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });
  return (
    <Suspense fallback={<Loading full />}>
      <Layout>
        <Section>
          <Title>Página no encontrada</Title>
        </Section>
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

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-transform: uppercase;
`;
