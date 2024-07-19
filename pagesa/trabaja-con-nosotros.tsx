import React, { Suspense } from "react";
import styled from "@emotion/styled";
import { container } from "components/grid";
import Layout from "components/Layout";
import Formulario from "components/Formulario";
import { ComponentGeneralFormulario } from "client";
import { NextSeo } from "next-seo";
import { SITE_NAME, SITE_URL } from "lib/constants";

import { GetStaticProps } from "next";
import { prepareReactRender, useHydrateCache } from "client";
import { PropsWithServerCache } from "@gqty/react";
import Loading from "components/loading";

type PageProps = PropsWithServerCache<{}>;
const Page = ({ cacheSnapshot }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });

  const formulario: ComponentGeneralFormulario = {
    id: "formulario-2f4be6c7-cf07-4ca6-be13-ea67ff4ad4b0",
    formId: "2f4be6c7-cf07-4ca6-be13-ea67ff4ad4b0",
  };
  return (
    <Suspense fallback={<Loading full />}>
      <NextSeo
        title="Trabaja con nosotros"
        description="Aplica para una de nuestras vacantes."
        openGraph={{
          url: `${SITE_URL}`,
          title: "Trabaja con nosotros",
          description: "Aplica para una de nuestras vacantes.",
          site_name: SITE_NAME,
        }}
      />
      <Layout>
        <Section space>
          <Title>Trabaja con nosotros</Title>
          <Formulario formulario={formulario} />
        </Section>
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

const Section = styled.div`
  ${container}
`;

const Title = styled.h1`
  display: none;
`;
