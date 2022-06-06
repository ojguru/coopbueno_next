import React from 'react'
import styled from '@emotion/styled'
import { container, mq } from 'components/grid'
import Link from 'next/link'
import Image from 'next/image'
import { h1, h5 } from 'styles/tipography'
import { AcademiaIcon } from 'components/icons'
import { Spring, animated } from '@react-spring/web'
import { InView } from 'react-intersection-observer'

import { sectionAnimation } from 'styles/animations'
import colors from 'styles/colors'
import { getStrapiURL } from 'lib/api'
import { ArticleEntity } from 'client'

interface HomeAcademyProps {
  posts: ArticleEntity[]
}
interface InViewProps {
  ref: any
  inView: boolean
}
const HomeAcademy = ({ posts }: HomeAcademyProps) => {
  return posts.length ? (
    <InView threshold={0}>
      {({ ref, inView }) => (
        <Spring reset={inView} reverse={!inView} {...sectionAnimation}>
          {(styles) => (
            <Section fluid space ref={ref}>
              <animated.div style={styles}>
                <Link href={'/academia'} passHref>
                  <a>
                    <SectionTitle>Academia de sueños</SectionTitle>
                    <SectionImage>
                      <AcademiaIcon />
                    </SectionImage>
                  </a>
                </Link>
                <Body>
                  {posts.map((item, index) => {
                    const post = item.attributes
                    const image = post.image.data.attributes
                    return (
                      <Slide key={index}>
                        <animated.div style={styles}>
                          <Post>
                            <Link href={`/academia/${post.slug}`} passHref>
                              <PostLink aria-label="Post Link">
                                <MediaWrapper>
                                  <ImageContainer>
                                    <Image
                                      src={getStrapiURL(image.url)}
                                      alt={image.alternativeText}
                                      width={1920}
                                      height={1080}
                                      objectFit="cover"
                                    />
                                  </ImageContainer>
                                </MediaWrapper>
                                <Title>{post.title}</Title>
                                <Excerpt
                                  dangerouslySetInnerHTML={{
                                    __html: post.description,
                                  }}
                                />
                              </PostLink>
                            </Link>
                          </Post>
                        </animated.div>
                      </Slide>
                    )
                  })}
                </Body>
              </animated.div>
            </Section>
          )}
        </Spring>
      )}
    </InView>
  ) : null
}

export default HomeAcademy

const Body = styled.div`
  ${container}
  padding: 0;
  display: grid;
  grid-template-areas:
    'principal principal'
    'second third';
  gap: 1.5rem;
  ${mq.md} {
    gap: 3rem;
    grid-template-areas:
      'principal principal second'
      'principal principal third';
  }
`

const Section = styled.section`
  ${container}
  position: relative;
  &:before {
    content: '';
    width: 50%;
    padding-bottom: 10%;
    border-radius: 4rem;
    border: 0.5rem solid #299346;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(50%, 0) rotate(25deg);
    opacity: 0.3;
    z-index: -1;
  }
  &:after {
    content: '';
    width: 50%;
    padding-bottom: 10%;
    border-radius: 4rem;
    border: 0.5rem solid #00a89c;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(75%, 100%) rotate(25deg);
    opacity: 0.3;
    z-index: -1;
  }
`

const SectionTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 0;
  display: none;
  ${h1}
`

const SectionImage = styled.div`
  width: 60%;
  max-width: 40rem;
  margin: 0 auto;
  margin-bottom: 3rem;
`

const Post = styled.div`
  text-align: center;
`

const MediaWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`

const ImageContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  z-index: 2;
`
const Title = styled.h3`
  margin: 0 auto;
  margin-bottom: 2rem;
  text-transform: uppercase;
  ${h5}
  ${mq.md} {
    text-align: left;
  }
`

const Excerpt = styled.div`
  color: ${colors.text.base};
  display: none;
  text-align: left;
`

const PostLink = styled.a`
  text-decoration: none;
`

const Slide = styled.div`
  grid-area: second;
  &:first-of-type {
    grid-column: initial;
    grid-area: principal;
    ${Excerpt} {
      display: block;
    }
  }
  &:last-of-type {
    grid-area: third;
  }
`
