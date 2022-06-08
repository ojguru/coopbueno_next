import React from 'react'
import styled from '@emotion/styled'
import { container, mq } from 'components/grid'
import PageHeader from 'components/PageHeader'
import { h3 } from 'styles/tipography'

import { GetStaticProps } from 'next'

import { useQuery, prepareReactRender, useHydrateCache, Servicio } from 'client'
import { PropsWithServerCache } from '@gqty/react'

type PageProps = PropsWithServerCache<{}>
const Page = ({ cacheSnapshot }: PageProps) => {
  const query = useQuery()
  const servicios = query.servicios({
    pagination: {
      pageSize: 100,
    },
  }).data

  useHydrateCache({
    cacheSnapshot,
  })

  return servicios.length ? (
    <Section space>
      <PageHeader title={'Tarifario de servicios'} />
      <Services>
        {servicios.map((item, index) => {
          const service: Servicio = item.attributes
          const rates = service.tarifario?.tarifas()
          const nota = service.tarifario?.nota

          return rates?.length ? (
            <Service
              key={index}
              //   order={parseInt(service.meta_box['rate-order'])}
            >
              <ServiceName>{service.nombre}</ServiceName>
              <Table>
                <TBody>
                  {rates.map((item, index) => {
                    return (
                      <Tr key={index}>
                        <Td>{item.nombre}</Td>
                        <Td>{item.valor}</Td>
                      </Tr>
                    )
                  })}
                </TBody>
              </Table>
              {nota && <Note>{nota}</Note>}
            </Service>
          ) : null
        })}
      </Services>
    </Section>
  ) : null
}

export default Page

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx) => {
  const { cacheSnapshot } = await prepareReactRender(<Page />)

  return {
    props: { cacheSnapshot },
  }
}

const Section = styled.section`
  ${container}
`

const Services = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;
  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }
  ${mq.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Service = styled.div``

const ServiceName = styled.h2`
  ${h3}
  margin-bottom: 5px;
`

const Table = styled.table`
  margin: 0;
  border: initial;
`

const TBody = styled.tbody``

const Tr = styled.tr`
  &:nth-of-type(odd) {
    background-color: #f5f5f5;
  }
`
const Td = styled.td`
  font-weight: normal;
  vertical-align: top;
  padding: 10px;
  border: initial;
  word-break: initial;
  &:first-of-type {
    font-weight: bold;
  }
`

const Note = styled.p`
  font-style: italic;
`
