import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "next/link";
import NavList from "./nav-list";
import { LeftArrowIcon } from "../icons";
import colors from "styles/colors";
import { MenuItem } from "lib/auxiliar";
import { getURL } from "lib/api";
import { useAppContext } from "context/appContext";

interface NavItemProps {
  el?: MenuItem;
  isMain?: boolean;
  color?: string;
  bgColor?: string;
  borderColor?: string;
}
const NavItem = ({
  el,
  isMain,
  color = colors.primary.base,
  bgColor = colors.gray.lighter,
  borderColor = colors.primary.base,
}: NavItemProps) => {
  const item = el?.item;
  const children = el?.children || [];

  const hasChildren = children?.length > 0;
  const isCurrentPage = false;
  const isLink = item?.attributes?.url !== "#";

  const [isOpen, setOpen] = useState(false);
  const { setMenuOpen } = useAppContext();

  return (
    <Item
      fontWeight={isMain ? "600" : "400"}
      borderColor={isMain ? "transparent" : borderColor}
      color={color}
      bgColor={bgColor}
      onClick={(e) => {
        e.stopPropagation();
        setOpen(hasChildren && !isLink ? !isOpen : false);
      }}
    >
      {hasChildren ? (
        <Expand
          {...{ isOpen }}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!isOpen);
          }}
        >
          <LeftArrowIcon />
        </Expand>
      ) : null}
      {/* If link uri is the current page, add `aria-current` for a11y */}
      {isLink && !hasChildren ? (
        <Link href={getURL(item?.attributes?.url || "")} passHref>
          <ItemLink
            aria-current={isCurrentPage ? "page" : undefined}
            aria-label="Item de la navegacion..."
            target={item?.attributes?.target || ""}
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            {item?.attributes?.title}
          </ItemLink>
        </Link>
      ) : (
        <ItemLabel
          aria-current={isCurrentPage ? "page" : undefined}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!isOpen);
          }}
        >
          {item?.attributes?.title}
        </ItemLabel>
      )}
      <AListWrapper active={isOpen}>
        <AList active={isOpen}>
          {hasChildren ? <NavList items={children} /> : null}
        </AList>
      </AListWrapper>
    </Item>
  );
};

export default NavItem;

const Item = styled.li`
  ${(props: {
    fontWeight: string;
    borderColor?: string;
    color?: string;
    bgColor?: string;
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
`;

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
`;

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
`;

const ItemLink = styled.a`
  ${itemTextStyles}
`;

const ItemLabel = styled.span`
  ${itemTextStyles}
`;

interface AListWrapperProps {
  active: boolean;
}
const AListWrapper = styled.div`
  overflow: hidden;
  ${({ active }: AListWrapperProps) => css`
    ${active
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
  `}
`;

interface AListProps {
  active: boolean;
}
const AList = styled.div`
  ${({ active }: AListProps) => css`
    transition: all 0.25s ease-in-out;
    ${active
      ? css`
          margin-top: 0;
          opacity: 1;
        `
      : css`
          margin-top: -1920px;
          opacity: 0;
        `}
  `}
`;
