import { css } from '@emotion/react'

const ctas = (props: { color?: string; bgColor?: string }) => css`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
  background-color: ${props.bgColor ? props.bgColor : '#F68C20'};
  font-weight: 900;
  text-transform: uppercase;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 20px;
  display: inline-block;
  color: ${props.color ? props.color : `white`};
  outline: initial;
  border: initial;
  cursor: pointer;
  /* text-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.4); */
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export default ctas
