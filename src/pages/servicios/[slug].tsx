import React from 'react'
import styled from '@emotion/styled'
import { container } from 'components/grid'

import Portada from 'templates/servicios/portada'
import Producto from 'templates/servicios/producto'
import Ventajas from 'templates/servicios/ventajas'
import Requisitos from 'templates/servicios/requisitos'
import Beneficios from 'templates/servicios/beneficios'
import Conversion from 'templates/servicios/conversion'
import Video from 'templates/servicios/video'

import { GetStaticProps } from 'next'

import { useQuery, prepareReactRender, useHydrateCache } from 'client'
import { PropsWithServerCache } from '@gqty/react'

type PageProps = PropsWithServerCache<{
  slug?: string
}>
const Page = ({ cacheSnapshot, slug }: PageProps) => {
  const query = useQuery()
  const [servicio] = query.servicios({
    filters: {
      slug: {
        eq: slug,
      },
    },
  }).data

  useHydrateCache({
    cacheSnapshot,
  })

  return servicio ? (
    <Section space>
      <Portada servicio={servicio.attributes} />
      <Producto servicio={servicio.attributes} />
      <Video servicio={servicio.attributes} />
      <Ventajas servicio={servicio.attributes} />
      <Beneficios servicio={servicio.attributes} />
      <Requisitos servicio={servicio.attributes} />
      <Conversion servicio={servicio.attributes} />
    </Section>
  ) : null
}

export default Page

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx) => {
  const slug = _ctx.params.slug.toString()
  const { cacheSnapshot } = await prepareReactRender(<Page slug={slug} />)

  return {
    props: {
      cacheSnapshot,
      slug,
    },
  }
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

const Section = styled.section`
  ${container}
`
