"use client";
import React from "react";
import Link from "next/link";
// import SearchModal from "./search/search-modal";
// import SearchButton from 'components/search/search-button'
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import colors from "@/styles/colors";
import logo from "@/public/coopbueno_logo.svg";
import { MenusMenuItemEntity, ServicioEntity } from "@/gql/graphql";
import useMenu from "@/hooks/useMenu";
import Navigation from "@/components/navigation/navigation";
import {
  getHierarchicalItems,
  getServiceHierarchicalItems,
} from "@/lib/auxiliar";

import { InstagramIcon, FacebookIcon, TwitterIcon } from "./icons";
import { FACEBOOK, INSTAGRAM, TWITTER } from "@/lib/constants";
import styles from "./Header.module.scss";

interface HeaderProps {
  menuItems?: MenusMenuItemEntity[];
  servicios?: ServicioEntity[];
}
const Header = ({ menuItems = [], servicios = [] }: HeaderProps) => {
  const [ref, inView, entry] = useInView({ initialInView: true });

  const { MenuModalUI, MenuButtonUI } = useMenu();

  const serviceItems = getServiceHierarchicalItems(servicios);

  const items = [...serviceItems, ...getHierarchicalItems(menuItems)];

  return (
    <header className={styles.header} ref={ref}>
      <div className={`${styles.wrapper} ${inView ? "inView" : ""}`}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image src={logo} alt="Coopbueno Logo" priority />
            </Link>
          </div>
          <div className={styles.navContainer}>
            <div className={styles.gadgets}>
              {/* {state.theme.search.showOnHeader ? <SearchButton /> : null} */}
            </div>
            <Link
              className={styles.coopvirtual}
              href="https://www.cosefi.com/CoopBueno/IBanking/Web/Customer/SIBanking_Login.aspx"
            >
              Coopvirtual
            </Link>
            <MenuButtonUI />
          </div>
        </div>
        <MenuModalUI>
          <Link
            className={styles.ctaCoopvirtual}
            href="https://www.cosefi.com/CoopBueno/IBanking/Web/Customer/SIBanking_Login.aspx"
          >
            Coopvirtual
          </Link>
          <Navigation items={items} isMain />
          <span className={styles.socialBox}>
            <Link href={FACEBOOK}>
              <span className={styles.socialIcon} color={colors.primary.base}>
                <div style={{ display: "none" }}>Redes Sociales</div>
                <FacebookIcon />
              </span>
            </Link>
            <Link href={INSTAGRAM}>
              <span className={styles.socialIcon} color={colors.primary.base}>
                <div style={{ display: "none" }}>Redes Sociales</div>
                <InstagramIcon />
              </span>
            </Link>
            <Link href={TWITTER}>
              <span className={styles.socialIcon} color={colors.primary.base}>
                <div style={{ display: "none" }}>Redes Sociales</div>
                <TwitterIcon />
              </span>
            </Link>
          </span>
        </MenuModalUI>
        {/* <SearchModal /> */}
      </div>
    </header>
  );
};
// Connect the Header component to get access to the `state` in it's `props`
export default Header;
