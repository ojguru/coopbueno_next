import React from 'react'
import styled from '@emotion/styled'
import { mq } from 'components/grid'
import Image from 'next/image'
import logo from '../../public/coopbueno_logo.svg'

const Header = () => {
  return (
    <PageHeader>
      <Logo src={logo} alt="Coopbueno Logo" />
    </PageHeader>
  )
}

// Connect the Header component to get access to the `state` in it's `props`
export default Header

const PageHeader = styled.header`
  background: linear-gradient(to right, #319847, #6fb52c);
  padding-top: 30px;
  text-align: center;
  padding-bottom: 60px;
  ${mq.md} {
    padding-bottom: 80px;
  }
  ${mq.lg} {
    padding-top: 60px;
    padding-bottom: 100px;
  }
`

const Logo = styled(Image)`
  height: 40px;
  margin: 0 auto;
  ${mq.md} {
    height: 60px;
  }
`
