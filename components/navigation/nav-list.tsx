import React from "react";
import NavItem from "./nav-item";
import { MenusMenuItemEntity } from "@/gql/graphql";
import { MenuItem } from "@/lib/auxiliar";
import styles from "./nav-list.module.scss";

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
    <ul className={`${styles.list} ${isMain ? "isMain" : ""}`} {...props}>
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
    </ul>
  );
};

export default NavList;
