import React from "react";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";
import PageHeader from "components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import colors from "styles/colors";
import { h3 } from "styles/tipography";

import { GetStaticProps } from "next";

import { useQuery, prepareReactRender, useHydrateCache } from "client";
import { PropsWithServerCache } from "@gqty/react";
import Layout from "components/Layout";
import { getImageURL, getURL } from "lib/api";
import Loading from "components/loading";

type PageProps = PropsWithServerCache<{}>;
const Page = ({ cacheSnapshot }: PageProps) => {
  useHydrateCache({
    cacheSnapshot,
  });

  const query = useQuery();
  const memorias = query.memoriasAnuales({
    pagination: {
      pageSize: 100,
    },
    sort: ["ano:desc"],
  })?.data;

  if (query.$state.isLoading) {
    return <Loading full />;
  }

  return memorias?.length ? (
    <Layout>
      <Section space>
        <PageHeader title="Memorias Anuales" />
        <List>
          {memorias.map((item, index) => {
            const memoria = item.attributes;

            return (
              <MemoryCard key={index}>
                <Link
                  href={getURL(memoria?.archivo?.data?.attributes?.url)}
                  passHref
                >
                  <SLink target="_blank" download>
                    <CardImage>
                      <Image
                        src={getImageURL(
                          memoria?.imagen?.data?.attributes?.url
                        )}
                        alt={memoria?.nombre}
                        width={1080}
                        height={1404}
                        objectFit="cover"
                      />
                    </CardImage>
                    <MemoryName>{memoria?.ano}</MemoryName>
                  </SLink>
                </Link>
              </MemoryCard>
            );
          })}
        </List>
      </Section>
    </Layout>
  ) : null;
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx: any) => {
  const { cacheSnapshot } = await prepareReactRender(<Page />);

  return {
    props: { cacheSnapshot },
  };
};

const Section = styled.section`
  ${container}
`;

const List = styled.div`
  display: grid;
  gap: 3rem;
  ${mq.sm} {
    grid-template-columns: 1fr 1fr;
  }

  ${mq.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const MemoryCard = styled.div`
  max-width: 250px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const SLink = styled.a`
  text-decoration: none;
`;

const CardImage = styled.div`
  width: 250px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border: 0.5px solid ${colors.gray.base};
  font-size: 0;
`;

const MemoryName = styled.h2`
  ${h3}
  margin: 5px 0;
  font-size: 5rem;
  text-align: center;
  color: ${colors.green.base};
`;
