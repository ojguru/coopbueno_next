import React from 'react'
import Archivo from 'templates/noticias/archivo'

import { GetStaticProps } from 'next'

import { useQuery, prepareReactRender, useHydrateCache } from 'client'
import { PropsWithServerCache } from '@gqty/react'
import Layout from 'components/Layout'

type PageProps = PropsWithServerCache<{}>
const Page = ({ cacheSnapshot }: PageProps) => {
  const query = useQuery()
  const articulos = query.noticias({
    pagination: {
      pageSize: 16,
    },
  })?.data

  useHydrateCache({
    cacheSnapshot,
  })

  return (
    <Layout>
      <Archivo titulo="Noticias" descripcion="Noticias" articulos={articulos} />
    </Layout>
  )
}

export default Page

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx) => {
  const { cacheSnapshot } = await prepareReactRender(<Page />)

  return {
    props: { cacheSnapshot },
  }
}
