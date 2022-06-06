import { css } from '@emotion/react'
import colors from './colors'
const hasDropCap = css`
  .has-drop-cap:not(:focus):first-letter {
    float: left;
    font-size: 6rem;
    line-height: 0.68;
    font-weight: 100;
    margin: 0.05em 0.1em 0 0;
    text-transform: uppercase;
    font-style: normal;
    color: ${colors.primary};
    font-weight: bold;
  }
`

const blocks = css([hasDropCap])

export default blocks
