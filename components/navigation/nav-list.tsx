import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import NavItem from "./nav-item";
import { MenuItem } from "@/lib/auxiliar";
import { MenusMenuItemEntity } from "@/gql/graphql";

interface NavListProps {
  items?: MenuItem[] | MenusMenuItemEntity[];
  isMain?: boolean;
  color?: string;
  bgColor?: string;
  borderColor?: string;
}

const NavList = ({
  items,
  isMain = false,
  color,
  bgColor,
  borderColor,
  ...props
}: NavListProps) => {
  return (
    <List {...{ isMain, ...props }}>
      {items?.map((item?: any, index?: number) => {
        return (
          <NavItem
            key={index}
            el={item}
            isMain={isMain}
            color={color}
            bgColor={bgColor}
            borderColor={borderColor}
          />
        );
      })}
    </List>
  );
};

export default NavList;

const List = styled.ul`
  ${(props: { isMain?: boolean }) => css`
    ${props.isMain
      ? css`
          padding: 0;
          margin: 0;
        `
      : css`
          margin: 0;
          margin-left: 1.5rem;
        `}
  `}
`;
