import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mq } from 'components/grid'
import Image from 'next/image'
import Link from 'next/link'
import colors from 'styles/colors'
import { Noticia } from 'client'
import { getStrapiURL } from 'lib/api'

interface PostProps {
  articulo: Noticia
  isFirstItem?: boolean
  isMainItem?: boolean
  isWideItem?: boolean
  maxWidth?: string
}
const Post = ({
  articulo,
  isFirstItem = false,
  isMainItem = false,
  isWideItem = false,
  maxWidth = 'initial',
}: PostProps) => {
  const { titulo, descripcion, slug } = articulo

  const imagen = articulo.imagen?.data?.attributes
  // const category = articulo.category?.data?.attributes

  return (
    <Article {...{ maxWidth, isFirstItem, isMainItem }}>
      <Link href={`/noticias/${slug}`} passHref>
        <StyledLink>
          <Media>
            <Image
              src={getStrapiURL(imagen.url)}
              alt={titulo}
              width={1920}
              height={1080}
              objectFit="cover"
            />
          </Media>
        </StyledLink>
      </Link>
      <Info>
        {/* {category ? (
          <Link href={`/noticias/categoria/${category.slug}`} passHref>
            <StyledLink>
              <Category color={colors.gray.base}>{category.name}</Category>
            </StyledLink>
          </Link>
        ) : null} */}
        <Link href={`/noticias/${slug}`} passHref>
          <StyledLink>
            <Title color={colors.text.base} {...{ isFirstItem }}>
              {titulo}
            </Title>
            <Excerpt
              isVisible={isFirstItem}
              dangerouslySetInnerHTML={{ __html: descripcion }}
            />
          </StyledLink>
        </Link>
      </Info>
    </Article>
  )
}

export default Post

const Article = styled.article`
  ${(props: {
    maxWidth?: string
    isFirstItem?: boolean
    isMainItem?: boolean
  }) => css`
    max-width: ${props.maxWidth};
    ${props.isMainItem
      ? props.isFirstItem
        ? css``
        : css`
            display: grid;
            gap: 1.5rem;
            grid-template-columns: 1fr 2fr;
            padding-bottom: 3rem;
          `
      : css``}
  `}
`

const Media = styled.div`
  margin-bottom: 0.5rem;
`

const Info = styled.div``

const Title = styled.h3`
  ${(props: { isFirstItem?: boolean }) => css`
    ${props.isFirstItem
      ? css`
          font-size: 1.9rem;
          ${mq.sm} {
            font-size: 2rem;
          }
          ${mq.md} {
            font-size: 2.2rem;
          }
          ${mq.lg} {
            font-size: 2.4rem;
          }
          ${mq.xl} {
            font-size: 2.8rem;
          }
        `
      : css`
          font-size: 1.7rem;
          ${mq.sm} {
            font-size: 1.7rem;
          }
          ${mq.md} {
            font-size: 1.8rem;
          }
          ${mq.lg} {
            font-size: 1.8rem;
          }
          ${mq.xl} {
            font-size: 2rem;
          }
        `}
    text-transform: uppercase;
    font-weight: bold;
    color: ${colors.text.base};
    margin: 8px 0;
  `}
`

const Category = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.gray.base};
  padding: 1.5rem 0;
`

const Excerpt = styled.div`
  ${(props: { isVisible?: boolean }) => css`
    ${props.isVisible ? 'display: block;' : 'display: none;'}
  `}
`

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`
