"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import NavList from "./nav-list";
import { LeftArrowIcon } from "../icons";
import { getURL } from "@/lib/api";
// import { useAppContext } from "context/appContext";
import { MenuItem } from "@/lib/auxiliar";

import styles from "./nav-item.module.scss";
import { ThemeContext } from "@/components/ThemeProvider";
import colors from "@/styles/colors";

interface NavItemProps {
  el?: MenuItem;
  isMain?: boolean;
  color?: string;
  bgColor?: string;
  borderColor?: string;
}
const NavItem = ({ el, isMain, color, borderColor, bgColor }: NavItemProps) => {
  const item = el?.item;
  const children = el?.children || [];

  const hasChildren = children?.length > 0;
  const isCurrentPage = false;
  const isLink = item?.attributes?.url;

  const [isOpen, setOpen] = useState(false);
  const { setMenuOpen }: any = useContext(ThemeContext);

  return (
    <li
      className={styles.item}
      style={{
        fontWeight: isMain ? 600 : 400,
        color: color,
        backgroundColor: bgColor,
        outlineColor: isMain ? borderColor : "transparent",
        borderLeft: isMain ? "" : `0.1rem solid ${colors.primary.base}`,
      }}
      onClick={(e) => {
        e.stopPropagation();
        setOpen(hasChildren && !isLink ? !isOpen : false);
      }}
    >
      <div className={styles.labelWrapper}>
        {isLink ? (
          <Link
            href={getURL(item?.attributes?.url || "")}
            target={item?.attributes?.target || ""}
          >
            <span
              className={styles.itemLink}
              aria-current={isCurrentPage ? "page" : undefined}
              aria-label="Item de la navegacion..."
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              {item?.attributes?.title}
            </span>
          </Link>
        ) : (
          <span
            className={styles.itemLabel}
            aria-current={isCurrentPage ? "page" : undefined}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!isOpen);
            }}
          >
            {item?.attributes?.title}
          </span>
        )}

        {children?.length ? (
          <div
            className={`${styles.expand} ${isOpen ? "expanded" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!isOpen);
            }}
          >
            <div className={styles.expandWrapper}>
              <LeftArrowIcon />
            </div>
          </div>
        ) : null}
      </div>
      {hasChildren ? (
        <div className={`${styles.listWrapper} ${isOpen ? "active" : ""}`}>
          <div className={`${styles.list} ${isOpen ? "active" : ""}`}>
            <NavList items={children} color={color} />
          </div>
        </div>
      ) : null}
    </li>
  );
};

export default NavItem;
