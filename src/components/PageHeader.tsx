import React from 'react'
import styled from '@emotion/styled'
import colors from 'styles/colors'

const PageHeader = ({ title }) => {
  return (
    <Header>
      <Deco />
      <Title>{title}</Title>
    </Header>
  )
}

export default PageHeader

const Header = styled.header`
  margin-bottom: 4rem;
`

const Title = styled.h1`
  text-transform: uppercase;
`

const Deco = styled.div`
  content: '';
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
