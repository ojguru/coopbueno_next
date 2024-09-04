import { css } from '@emotion/react'
import { mq } from '@/components/grid'
import colors from './colors'
export const h1 = css`
  font-size: 2.9rem;
  font-weight: 800;
  line-height: 1.138888889;
  ${mq.sm} {
    font-size: 3.2rem;
  }
  ${mq.md} {
    font-size: 3.4rem;
  }
  ${mq.lg} {
    font-size: 3.6rem;
  }
  ${mq.xl} {
    font-size: 4rem;
  }
`

export const h2 = css`
  font-size: 2.1rem;
  ${mq.sm} {
    font-size: 2.4rem;
  }
  ${mq.md} {
    font-size: 2.6rem;
  }
  ${mq.lg} {
    font-size: 2.8rem;
  }
  ${mq.xl} {
    font-size: 3.2rem;
  }
`

export const h3 = css`
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

export const h4 = css`
  font-size: 1.8rem;
  ${mq.sm} {
    font-size: 1.8rem;
  }
  ${mq.md} {
    font-size: 2rem;
  }
  ${mq.lg} {
    font-size: 2rem;
  }
  ${mq.xl} {
    font-size: 2.4rem;
  }
`

export const h5 = css`
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
`

export const h6 = css`
  font-size: 1.6rem;
  ${mq.sm} {
    font-size: 1.6rem;
  }
  ${mq.md} {
    font-size: 1.7rem;
  }
  ${mq.lg} {
    font-size: 1.7rem;
  }
  ${mq.xl} {
    font-size: 1.8rem;
  }
`

const tipography = css`
  main {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .faux-heading {
    font-feature-settings: 'lnum';
    font-variant-numeric: lining-nums;
    font-weight: 700;
    letter-spacing: -0.0415625em;
    line-height: 1.25;
    margin: 3.5rem 0 2rem;
    color: ${colors.primary.base};
  }

  h1,
  .heading-size-1 {
    ${h1}
  }

  h2,
  .heading-size-2 {
    ${h2}
  }

  h3,
  .heading-size-3 {
    ${h3}
  }

  h4,
  .heading-size-4 {
    ${h4}
  }

  h5,
  .heading-size-5 {
    ${h5}
  }

  h6,
  .heading-size-6 {
    letter-spacing: 0.03125em;
    text-transform: uppercase;
    ${h6}
  }
`

export default tipography
