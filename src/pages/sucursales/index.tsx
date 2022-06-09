import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { container, mq } from 'components/grid'
import Image from 'next/image'
import Link from 'next/link'
import { LocationIcon, ClockIcon, PhoneIcon } from 'components/icons'
import { h3 } from 'styles/tipography'
import colors from 'styles/colors'

import { GetStaticProps } from 'next'

import { useQuery, prepareReactRender, useHydrateCache } from 'client'
import { PropsWithServerCache } from '@gqty/react'
import { getStrapiURL } from 'lib/api'

type PageProps = PropsWithServerCache<{}>
const Page = ({ cacheSnapshot }: PageProps) => {
  const query = useQuery()
  const sucursales = query.sucursals({
    pagination: {
      pageSize: 100,
    },
    sort: ['orden:asc'],
  })?.data

  useHydrateCache({
    cacheSnapshot,
  })

  return (
    <StyledSection>
      <Deco />
      <Container space>
        <Title>Sucursales</Title>
        {sucursales?.map((item, index, items) => {
          const sucursal = item.attributes
          const featuredMedia = sucursal.imagen.data.attributes
          const location = sucursal.ubicacion
          const isPrincipal = index == 0

          return (
            <SucursalCard key={item.id} {...{ isPrincipal }}>
              <CardImage {...{ isPrincipal }}>
                <SucursalImage
                  src={getStrapiURL(featuredMedia.url)}
                  alt={sucursal.nombre}
                  width={1920}
                  height={1080}
                  objectFit="cover"
                  priority={index <= 3 ? true : false}
                />
              </CardImage>
              <Content {...{ index, items }}>
                <CardHeader>
                  <SucursalName {...{ isPrincipal }}>
                    {sucursal.nombre}
                  </SucursalName>
                </CardHeader>
                <CardBody>
                  <SucursalAddress>
                    <LocationIcon />
                    <InfoWrapper>{sucursal.direccion}</InfoWrapper>
                  </SucursalAddress>
                  <SucursalSchedule>
                    <ClockIcon />
                    <InfoWrapper>{sucursal.horario}</InfoWrapper>
                  </SucursalSchedule>
                  <SucursalPhoneBox>
                    <PhoneIcon />
                    <InfoWrapper>
                      {sucursal.telefonos().map((item, index) => {
                        const phone = item.telefono

                        return phone ? (
                          <Link href={`tel:+${phone}`} key={index} passHref>
                            <SucursalPhone>{phone}</SucursalPhone>
                          </Link>
                        ) : null
                      })}
                    </InfoWrapper>
                  </SucursalPhoneBox>
                </CardBody>
              </Content>
              <LinkBox>
                <Link href={location ?? ''} passHref>
                  <ReadMore target="_blank">Ubicación</ReadMore>
                </Link>
              </LinkBox>
            </SucursalCard>
          )
        })}
      </Container>
    </StyledSection>
  )
}

export default Page

export const getStaticProps: GetStaticProps<PageProps> = async (_ctx) => {
  const { cacheSnapshot } = await prepareReactRender(<Page />)

  return {
    props: { cacheSnapshot },
  }
}

const StyledSection = styled.section`
  position: relative;
`

const Deco = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  padding-bottom: 50%;
  border-radius: 5%;
  background-color: ${colors.primary.light}33;
  transform: translate(80%, -30%) rotate(-35deg);
  &:before {
    content: '';
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
    content: '';
    position: absolute;
    left: 15%;
    top: 22%;
    width: 100%;
    padding-bottom: 100%;
    border-radius: inherit;
    background-color: ${colors.primary.light};
    box-shadow: -0.5rem 0.5rem 2.5rem ${colors.primary.light};
  }
`

const Container = styled.div`
  ${container}
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

const Title = styled.h1`
  text-transform: uppercase;
  ${mq.md} {
    grid-column: 1 / span 2;
  }
  ${mq.lg} {
    grid-column: 1 / span 3;
  }
`

const SucursalCard = styled.div`
  ${(props: { isPrincipal: boolean }) => css`
    height: 100%;
    width: 100%;
    position: relative;
    display: grid;
    ${props.isPrincipal
      ? css`
          gap: 3rem;
          ${mq.md} {
            grid-template-columns: 1fr 1fr;
            grid-column: 1 / span 2;
          }
          ${mq.lg} {
            grid-template-columns: 2fr 1fr;
            grid-column: 1 / span 3;
          }
        `
      : css`
          gap: 1.5rem;
          align-self: baseline;
        `}
  `}
`

const Content = styled.div`
  ${(props: { index: number; items: any[] }) => css`
    padding: 0 1.5rem 8rem 1.5rem;
    position: relative;
    height: 100%;
    ${mq.md} {
      ${props.index % 2 != 0 && props.index != props.items.length - 1
        ? css`
            &:after {
              content: '';
              position: absolute;
              top: 50%;
              right: 0;
              transform: translate(1.5rem, -50%);
              height: 70%;
              width: 0.2rem;
              background-color: gray;
              opacity: 0.3;
            }
          `
        : ` `}
    }
    ${mq.lg} {
      &:after {
        content: initial;
      }
      ${(props.index + 1) % 3 === 0
        ? css`
            &:before {
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              transform: translate(-1.5rem, -50%);
              height: 70%;
              width: 0.2rem;
              background-color: gray;
              opacity: 0.3;
            }
            &:after {
              content: '' !important;
              position: absolute;
              top: 50%;
              right: 0;
              transform: translate(+1.5rem, -50%);
              height: 70%;
              width: 0.2rem;
              background-color: gray;
              opacity: 0.3;
            }
          `
        : css``}
    }
  `}
`

const CardImage = styled.div`
  ${(props: { isPrincipal?: boolean }) => css`
    position: relative;
    ${props.isPrincipal
      ? css`
          &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            border-radius: 1rem;
            height: 0;
            width: 8%;
            padding-bottom: 8%;
            background-color: ${colors.primary.light};
            box-shadow: 0.5rem 0.5rem 2.5rem ${colors.primary.light};
            transform: translate(50%, -50%);
            z-index: 2;
          }
          &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            border-radius: 1rem;
            height: 0;
            width: 8%;
            padding-bottom: 8%;
            background-color: ${colors.primary.base};
            transform: translate(-75%, -50%);
            z-index: -1;
          }
        `
      : css`
          align-self: flex-end;
        `}
  `}
`

const SucursalImage = styled(Image)``

const CardHeader = styled.div``

const SucursalName = styled.h2`
  ${(props: { isPrincipal: boolean }) => css`
    margin: 10px 0;
    text-transform: uppercase;
    ${props.isPrincipal ? `` : h3}
  `}
`

const CardBody = styled.div`
  /* div :first-child {
    margin-top: 0.6rem;
  } */
`

const iconStyle = css`
  display: flex;
  align-items: flex-start;
  line-height: 1.8rem;
  svg {
    flex-basis: 1.8rem;
    color: green;
    width: 2.5rem;
    margin-right: 1rem;
  }
`
const SucursalAddress = styled.p`
  ${iconStyle}
`

const SucursalSchedule = styled.p`
  ${iconStyle}
`

const SucursalPhoneBox = styled.div`
  ${iconStyle}
`

const InfoWrapper = styled.span`
  display: inline-block;
  vertical-align: top;
  flex: 1;
`

const SucursalPhone = styled.a`
  text-decoration: none;
  display: block;
  margin: 11px 0;
`

const LinkBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  text-align: right;
  padding: 15px 30px;
`

const ReadMore = styled.a`
  cursor: pointer;
  color: ${colors.primary.base};
  text-decoration: none;
  &:after {
    content: ' ▶';
  }
`
