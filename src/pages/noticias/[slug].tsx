import React from 'react'

import { GetStaticProps } from 'next'

import { useQuery, prepareReactRender, useHydrateCache } from 'client'
import { PropsWithServerCache } from '@gqty/react'
import ArticuloBody from 'templates/noticias/ArticuloBody'
import ArticuloAside from 'templates/noticias/ArticuloAside'
import Layout from 'components/Layout'

type PageProps = PropsWithServerCache<{
  slug: string
}>
const Page = ({ cacheSnapshot, slug }: PageProps) => {
  const query = useQuery()

  const [articuloEntidad] = query.noticias({
    filters: {
      slug: {
        eq: slug,
      },
    },
  })?.data

  const relacionados = query.noticias({
    filters: {
      slug: {
        notContains: slug,
      },
    },
  })?.data

  useHydrateCache({
    cacheSnapshot,
  })

  return (
    <Layout>
      <ArticuloBody articulo={articuloEntidad} />
      <ArticuloAside relacionados={relacionados} articulo={articuloEntidad} />
    </Layout>
  )
}

export default Page

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx) => {
  const slug = _ctx.params.slug.toString()

  const { cacheSnapshot } = await prepareReactRender(<Page slug={slug} />)

  return {
    props: { cacheSnapshot, slug },
  }
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
