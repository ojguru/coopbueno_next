import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { container, mq } from 'components/grid'
import { CategoryEntity } from 'client'
import { getStrapiURL } from 'lib/api'
import colors from 'styles/colors'

interface NavigationProps {
  categorias: CategoryEntity[]
  fixed?: boolean
  inView?: boolean
}
const Navigation = ({ categorias, fixed, inView }: NavigationProps) => {
  return (
    <CategoryNav {...{ inView, fixed, colors }}>
      <Container>
        <CategoryList {...{ inView }}>
          {categorias.map((item, index) => {
            const categoria = item.attributes
            const icon = categoria.icon.data?.attributes
            return (
              <Link
                href={`/academia/categoria/${categoria.slug}`}
                key={index}
                passHref
              >
                <CategoryLink>
                  <Category {...{ inView }}>
                    <CategoryMedia {...{ inView }}>
                      <Media>
                        <Image
                          src={getStrapiURL(icon?.url)}
                          width={1080}
                          height={1080}
                          objectFit="contain"
                        />
                      </Media>
                    </CategoryMedia>
                    <CategoryInfo {...{ inView }}>
                      <CategoryName>{categoria.name}</CategoryName>
                    </CategoryInfo>
                  </Category>
                </CategoryLink>
              </Link>
            )
          })}
        </CategoryList>
      </Container>
    </CategoryNav>
  )
}

interface PostNavigationProps {
  categorias: CategoryEntity[]
}
const PostsNavigation = ({ categorias }: PostNavigationProps) => {
  // const { ref, inView} = useInView({ triggerOnce: false});
  const [ref, inView] = useInView({ initialInView: true })

  return categorias.length ? (
    <NavigationBar ref={ref} fluid space thin>
      {/* Navegación principal aparece en el top de la página */}
      <Navigation {...{ categorias }} inView={true} />
      {/* Navegación fija cuando se hace scroll */}
      <Navigation fixed {...{ categorias, inView }} />
    </NavigationBar>
  ) : null
}

export default PostsNavigation

const NavigationBar = styled.div`
  ${container}
  padding: initial;
`

const Container = styled.div`
  ${container}
`

const CategoryList = styled.div`
  ${(props: { inView?: boolean }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    ${mq.md} {
      gap: 1.5rem 3rem;
      ${props.inView
        ? css`
            grid-template-columns: 1fr 1fr 1fr 1fr;
          `
        : css`
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
          `}
    }
  `}
`

const CategoryNav = styled.div`
  ${(props: { inView?: boolean; fixed?: boolean }) => css`
    position: relative;
    padding: 0.5rem;
    width: 100%;
    z-index: 5;
    background-color: ${colors.navigation.base};
    ${props.inView && props.fixed
      ? css`
          display: none;
        `
      : ``}
    ${props.fixed && !props.inView
      ? css`
          display: block;
          position: fixed;
          left: 0;
        `
      : `
    `}
  `}
`

const Category = styled.div`
  ${(props: { inView?: boolean }) => css`
    ${mq.md} {
      ${props.inView
        ? css`
            position: relative;
            display: flex;
            align-items: center;
            border-radius: 6rem 0.5rem 0.5rem 6rem;
            box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15);
            background-color: white;
            min-height: 6rem;
            padding-left: 6rem;
          `
        : css``}
    }
    ${mq.lg} {
      ${props.inView
        ? css`
            min-height: 8rem;
            border-radius: 8rem 0.5rem 0.5rem 8rem;
            padding-left: 8rem;
          `
        : `
      `}
    }
  `}
`

const CategoryLink = styled.a`
  text-decoration: none;
`

const CategoryInfo = styled.div`
  ${(props: { inView?: boolean }) => css`
    display: none;
    ${mq.md} {
      display: ${props.inView ? `block` : `none`};
    }
    ${mq.lg} {
      padding: 0.5rem;
    }
  `}
`

const CategoryName = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  display: block;
  text-transform: uppercase;
  padding: 0.5rem;
  color: ${colors.academy};
  ${mq.lg} {
    font-size: 1.4rem;
  }
  ${mq.xl} {
    font-size: 1.6rem;
  }
`

const CategoryMedia = styled.div`
  ${(props: { inView?: boolean }) => css`
    background-color: ${colors.academy};
    width: 3rem;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    ${mq.sm} {
      width: 4rem;
    }
    ${mq.md} {
      ${props.inView
        ? css`
            width: 6rem;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(0%, -50%);
          `
        : `
      `}
    }
    ${mq.lg} {
      ${props.inView
        ? css`
            width: 8rem;
          `
        : `
      `}
    }
  `}
`

const Media = styled.div`
  padding: 18%;
  font-size: 0;
`
