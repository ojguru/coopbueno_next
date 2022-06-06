import React, { useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { container, mq } from 'components/grid'
import Link from 'next/link'
import Image from 'next/image'
import { CloseIcon } from 'components/icons'

import { Slide } from 'pure-react-carousel'

import { h3 } from 'styles/tipography'

import { animated } from '@react-spring/web'
import { InView } from 'react-intersection-observer'
import { ENUM_SERVICIO_CATEGORIA, ServicioEntity } from 'client'
import colors from 'styles/colors'

import ahorro from '../../../public/ahorro.svg'
import prestamos from '../../../public/prestamos.svg'
import facilidades from '../../../public/facilidades.svg'

interface HomeServiciosCardProps {
  items: ServicioEntity[]
}

type categoria = {
  nombre: string
  icono: any
}
const HomeServiciosCard = ({ items }: HomeServiciosCardProps) => {
  const [active, setActive] = useState(-1)

  const categorias = [
    {
      nombre: ENUM_SERVICIO_CATEGORIA.ahorro,
      icono: ahorro,
    },
    {
      nombre: ENUM_SERVICIO_CATEGORIA.prestamos,
      icono: prestamos,
    },
    {
      nombre: ENUM_SERVICIO_CATEGORIA.facilidades,
      icono: facilidades,
    },
  ]

  return (
    <InView threshold={0.3}>
      {({ ref, inView }) => (
        <SlideX tag="li">
          <div ref={ref}>
            <Container>
              {categorias.map((item: categoria, index: number) => {
                const isActive = active === index

                return (
                  <Card
                    key={index}
                    active={isActive}
                    hidden={active !== -1 && !isActive}
                  >
                    <animated.div>
                      <ServiceCard {...{ isActive }}>
                        <div
                          onClick={(e) => {
                            console.log('card', active)
                            setActive(index)
                          }}
                        >
                          <CardImage {...{ isActive }}>
                            <Media>
                              <ImageWrapper>
                                <Image
                                  src={item.icono}
                                  width={1080}
                                  height={1080}
                                  objectFit="contain"
                                />
                              </ImageWrapper>
                            </Media>
                          </CardImage>
                          <CardContent {...{ isActive }}>
                            <CardTitle {...{ isActive }}>
                              {item.nombre}
                            </CardTitle>
                            <CardServices {...{ isActive }}>
                              {items
                                .filter((service) => {
                                  return (
                                    service.attributes.categoria === item.nombre
                                  )
                                })
                                .map((service, index) => {
                                  const servicio = service.attributes

                                  return (
                                    <Link
                                      key={index}
                                      href={`/servicios/${servicio.slug}`}
                                      passHref
                                    >
                                      <StyledLink>
                                        <Service key={index}>
                                          {servicio.nombre}
                                        </Service>
                                      </StyledLink>
                                    </Link>
                                  )
                                })}
                            </CardServices>
                          </CardContent>
                        </div>
                        <CardCloseBtn
                          {...{ isActive }}
                          onClick={(e) => {
                            console.log('close', active)
                            setActive(-1)
                          }}
                        >
                          <CloseIcon />
                        </CardCloseBtn>
                      </ServiceCard>
                    </animated.div>
                  </Card>
                )
              })}
            </Container>
          </div>
        </SlideX>
      )}
    </InView>
  )
}

export default HomeServiciosCard

const SlideX = styled(Slide)`
  .carousel__slide-focus-ring {
    display: none;
  }
`

const Container = styled.div`
  ${container}
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
`

interface CardProps {
  active?: boolean
}
const Card = styled.div`
  ${({ active }: CardProps) => css`
    width: 100%;
    ${active
      ? css`
          max-width: 100%;
        `
      : css`
          max-width: 50%;
          ${mq.md} {
            max-width: calc(100% / 3);
          }
        `}
    padding: 1rem;
    ${mq.sm} {
      padding: 1.5rem;
    }
  `}
`

interface ServiceCardProps {
  isActive?: boolean
}
const ServiceCard = styled.div`
  ${({ isActive = false }: ServiceCardProps) => css`
    box-shadow: 0 1.5rem 2.5rem rgba(0, 0, 0, 0.15);
    padding: 1.5rem;
    padding-bottom: 0;
    padding-top: 0;
    border-radius: 1.5rem;
    margin: 0 auto;
    margin-top: 25%;
    margin-bottom: 25%;
    position: relative;
    background-color: white;
    ${isActive
      ? css`
          padding-bottom: 4rem;
          max-width: 60rem;
        `
      : css`
          cursor: pointer;
          max-width: 35rem;
        `}
    ${mq.sm} {
      margin-bottom: 4rem;
      margin-top: 7rem;
    }
  `}
`

const CardImage = styled.div`
  position: relative;
  margin: 0 auto;
  transform: translate(0, -50%);
  margin-bottom: 2rem;
  width: 50%;
  max-width: 12.5rem;
`

const Media = styled.div`
  width: 100%;
  border-radius: 50%;
  padding: 20%;
  overflow: hidden;
  background-color: ${colors.gray.lighter};
  position: relative;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  height: 0;
`

// const SImage = styled()`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 100%;
// `

interface CardContentProps {
  isActive?: boolean
}
const CardContent = styled.div`
  ${({ isActive = false }: CardContentProps) => css`
    position: relative;
    ${isActive
      ? css`
          margin-top: -5rem;
        `
      : css`
          margin-top: -25%;
        `}
    ${mq.sm} {
      margin-top: -5rem;
    }
    ${mq.lg} {
      margin-top: -6rem;
    }
  `}
`
interface CardTitleProps {
  isActive?: boolean
}
const CardTitle = styled.h3`
  ${({ isActive = false }: CardTitleProps) => css`
    margin: 0;
    padding-bottom: 4rem;
    text-transform: uppercase;
    text-align: center;
    font-weight: 900;
    color: ${colors.primary.base};
    ${isActive
      ? `
        `
      : css`
          font-size: 1.4rem;
          ${mq.sm} {
            ${h3}
          }
        `}
  `}
`

interface CardServicesProps {
  isActive?: boolean
}
const CardServices = styled.div`
  ${({ isActive = false }: CardServicesProps) => css`
    ${isActive
      ? css`
          padding: 0;
          margin: 0;
        `
      : css`
          display: none;
        `}
  `}
`

const Service = styled.div`
  list-style: none;
  margin: 0;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 0 1rem #00000033;
  border-radius: 1rem;
  margin: 1rem;
  font-weight: 600;
  background-color: white;
  transition: 0.25s all ease-in-out;
  &:hover {
    background-color: ${colors.primary.light};
    color: white;
  }
`

interface CardCloseBtnProps {
  isActive?: boolean
}
const CardCloseBtn = styled.div`
  ${({ isActive = false }: CardCloseBtnProps) => css`
    ${isActive
      ? css`
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 3.5rem;
          height: 3.5rem;
          padding: 0.25rem;
          border-radius: 50%;
          background-color: ${colors.gray.light};
          color: ${colors.gray.dark};
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          svg {
            color: inherit;
          }
        `
      : css`
          display: none;
        `}
  `}
`

const StyledLink = styled.a`
  text-decoration: none;
`
