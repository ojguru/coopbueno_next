import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { container } from 'components/grid'
import colors from 'styles/colors'

interface HeaderProps {
  children?: any
  color?: string
  childrenColor?: string
  title: string
  titleHidden?: boolean
}
const Header = ({
  children,
  color = '#308A40',
  childrenColor = '#777673',
  title = 'Academia De Sueños',
  titleHidden = false,
}: HeaderProps) => {
  return (
    <ArchiveHeader>
      <ArchiveTitle color={color} hidden={titleHidden}>
        {title}
      </ArchiveTitle>
      <ArchiveCopy color={childrenColor}>{children}</ArchiveCopy>
    </ArchiveHeader>
  )
}

export default Header

const ArchiveHeader = styled.header`
  ${container}
  color: #000000;
  text-align: center;
  position: relatve;

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${colors.primary.light};
    width: 75%;
    max-width: 30rem;
    height: 2.5rem;
    opacity: 0.3;
    z-index: -1;
  }
`

const ArchiveTitle = styled.h1`
  ${({ color = '#484848' }) => css`
    color: ${color};
    text-transform: uppercase;
    letter-spacing: -0.026666667em;
    margin-top: 0;
    position: relative;
    z-index: 1;
  `}
`

const ArchiveCopy = styled.h2`
  ${({ color = '#484848' }) => css`
    color: ${color};
    text-transform: uppercase;
    letter-spacing: -0.026666667em;
    margin: 0;
    position: relative;
    z-index: 1;
    font-weight: 900;
  `}
`
