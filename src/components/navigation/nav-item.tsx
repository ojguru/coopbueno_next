import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { animated, Spring, config } from '@react-spring/web'
import Link from 'next/link'
import NavList from './nav-list'
import { LeftArrowIcon } from '../icons'
import colors from 'styles/colors'
import { mq } from 'components/grid'
import { MenuItem } from 'lib/auxiliar'

interface NavItemProps {
  el?: MenuItem
  isMain?: boolean
  color?: string
  bgColor?: string
  borderColor?: string
}
const NavItem = ({
  el,
  isMain,
  color = colors.primary.base,
  bgColor = colors.gray.lighter,
  borderColor = colors.primary.base,
}: NavItemProps) => {
  const { item, children } = el

  const hasChildren = children?.length > 0
  const isCurrentPage = false
  const isLink = item.attributes.url !== '#'

  const [isOpen, setOpen] = useState(false)

  return (
    <Item
      fontWeight={isMain ? '600' : '400'}
      borderColor={isMain ? 'transparent' : borderColor}
      color={color}
      bgColor={bgColor}
      onClick={(e) => {
        e.stopPropagation()
        setOpen(hasChildren && !isLink ? !isOpen : false)
      }}
    >
      {hasChildren ? (
        <Expand
          {...{ isOpen }}
          onClick={(e) => {
            e.stopPropagation()
            setOpen(!isOpen)
          }}
        >
          <LeftArrowIcon />
        </Expand>
      ) : null}
      {/* If link uri is the current page, add `aria-current` for a11y */}
      {isLink && !hasChildren ? (
        <Link href={item?.attributes.url ?? ''} passHref>
          <ItemLink
            aria-current={isCurrentPage ? 'page' : undefined}
            aria-label="Item de la navegacion..."
            target={item?.attributes.target}
          >
            {item?.attributes.title}
          </ItemLink>
        </Link>
      ) : (
        <ItemLabel
          aria-current={isCurrentPage ? 'page' : undefined}
          onClick={(e) => {
            e.stopPropagation()
            setOpen(!isOpen)
          }}
        >
          {item?.attributes.title}
        </ItemLabel>
      )}
      <Spring
        reset={isOpen}
        from={{
          opacity: isOpen ? 0 : 1,
        }}
        to={{
          opacity: isOpen ? 1 : 0,
        }}
        config={config.default}
      >
        {(styles) => (
          <AListWrapper style={styles}>
            <Spring
              reset={isOpen}
              from={{
                marginTop: isOpen ? -1920 : 0,
                opacity: isOpen ? 0 : 1,
              }}
              to={{
                marginTop: isOpen ? 0 : -1920,
                opacity: isOpen ? 1 : 0,
              }}
              config={config.default}
            >
              {(styles) => (
                <AList style={styles}>
                  {hasChildren ? <NavList items={children} /> : null}
                </AList>
              )}
            </Spring>
          </AListWrapper>
        )}
      </Spring>
    </Item>
  )
}

export default NavItem

const Item = styled.li`
  ${(props: {
    fontWeight: string
    borderColor?: string
    color?: string
    bgColor?: string
  }) => css`
    list-style: none;
    margin: 0.2rem 0;
    color: ${props.color};
    position: relative;
    cursor: pointer;
    border-left: 0.1rem solid ${props.borderColor};
    background-color: ${props.bgColor};
    font-weight: ${props.fontWeight};
  `}
`

const Expand = styled.div`
  ${(props: { isOpen?: boolean }) => css`
    position: absolute;
    top: 0;
    right: 0;
    width: 3.9rem;
    height: 4rem;
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.primary.base};
    cursor: pointer;
    transition: 0.3s transform ease-in-out;
    ${props.isOpen
      ? css`
          transform: rotate(-90deg);
        `
      : ``}
  `}
`

const itemTextStyles = css`
  display: block !important;
  line-height: 1.2;
  text-decoration: none;
  color: inherit;
  padding: 1rem 1.5rem;
  padding-right: 4rem;
  &:hover {
    text-decoration: underline;
  }
`

const ItemLink = styled.a`
  ${itemTextStyles}
`

const ItemLabel = styled.span`
  ${itemTextStyles}
`

const AListWrapper = styled(animated.div)`
  overflow: hidden;
`

const AList = styled(animated.div)``
