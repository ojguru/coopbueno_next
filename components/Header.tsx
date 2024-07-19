import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";
// import { mwLG } from "./layout/container";
import Link from "next/link";
// import SearchModal from "./search/search-modal";
// import SearchButton from 'components/search/search-button'
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import colors from "styles/colors";
import logo from "../../public/coopbueno_logo.svg";
import {
  ENUM_SERVICIO_CATEGORIA,
  ENUM_SERVICIO_TIPO,
  MenusMenuItemEntity,
  ServicioEntity,
  useQuery,
} from "client";
import useMenu from "hooks/useMenu";
import Navigation from "./navigation/navigation";
import {
  getHierarchicalItems,
  getServiceHierarchicalItems,
} from "lib/auxiliar";

import { InstagramIcon, FacebookIcon, TwitterIcon } from "./icons";
import { FACEBOOK, INSTAGRAM, TWITTER } from "lib/constants";
import ctas from "styles/cta";

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
    <HeaderElement ref={ref}>
      <HeaderWrapper inView={inView}>
        <Container fluid>
          <LogoContainer>
            <Link href="/" passHref>
              <StyledLink>
                <Image src={logo} alt="Coopbueno Logo" priority />
              </StyledLink>
            </Link>
          </LogoContainer>
          <NavContainer>
            <Gadgets>
              {/* {state.theme.search.showOnHeader ? <SearchButton /> : null} */}
            </Gadgets>
            <Link
              href="https://www.cosefi.com/CoopBueno/IBanking/Web/Customer/SIBanking_Login.aspx"
              passHref
            >
              <Coopvirtual target="_blank" rel="noreferrer noopener">
                Coopvirtual
              </Coopvirtual>
            </Link>
            <MenuButtonUI />
          </NavContainer>
        </Container>
        <MenuModalUI>
          <Link
            href="https://www.cosefi.com/CoopBueno/IBanking/Web/Customer/SIBanking_Login.aspx"
            passHref
          >
            <CtaCoopVirtual
              target="_blank"
              rel="noreferrer noopener"
              bgColor={colors.primary.base}
            >
              Coopvirtual
            </CtaCoopVirtual>
          </Link>
          <Navigation items={items} isMain />
          <SocialBox>
            <Link href={FACEBOOK}>
              <a target="_blank" rel="noreferrer noopener">
                <SocialIcon color={colors.primary.base}>
                  <div style={{ display: "none" }}>Redes Sociales</div>
                  <FacebookIcon />
                </SocialIcon>
              </a>
            </Link>
            <Link href={INSTAGRAM}>
              <a target="_blank" rel="noreferrer noopener">
                <SocialIcon color={colors.primary.base}>
                  <div style={{ display: "none" }}>Redes Sociales</div>
                  <InstagramIcon />
                </SocialIcon>
              </a>
            </Link>
            <Link href={TWITTER}>
              <a target="_blank" rel="noreferrer noopener">
                <SocialIcon color={colors.primary.base}>
                  <div style={{ display: "none" }}>Redes Sociales</div>
                  <TwitterIcon />
                </SocialIcon>
              </a>
            </Link>
          </SocialBox>
        </MenuModalUI>
        {/* <SearchModal /> */}
      </HeaderWrapper>
    </HeaderElement>
  );
};
// Connect the Header component to get access to the `state` in it's `props`
export default Header;

const Container = styled.div`
  ${container}
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* ${mq.lg} {
  } */
  ${mq.xl} {
    max-width: 160rem;
  }
`;

const NavContainer = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 1.5rem;
`;

const HeaderElement = styled.header``;

const HeaderWrapper = styled.div`
  ${(props: { inView?: boolean }) => css`
    position: relative;
    z-index: 100;
    transition: background 0.2s ease-in-out;

    ${props.inView
      ? css`
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          background-color: ${colors.header.base};
        `
      : css`
          box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          background-color: ${colors.header.sticky};
        `}
  `}
`;

const LogoContainer = styled.div`
  padding: 1rem;
  width: 14rem;
  ${mq.md} {
    width: 20rem;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const Gadgets = styled.div`
  display: flex;
  align-items: center;
`;

const Coopvirtual = styled.a`
  ${ctas}
  color: ${colors.primary.base};
  background-color: white;
  display: none;
  text-shadow: none;
  text-decoration: none;
  font-weight: 900;
  text-transform: uppercase;
  ${mq.md} {
    display: initial;
  }
`;

const SocialBox = styled.span`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: auto auto auto 1fr;
`;

const SocialIcon = styled.span`
  background-color: ${colors.primary.base};
  padding: 0.7rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  color: white;
  margin-bottom: 1rem;
  display: block;
`;

const CtaCoopVirtual = styled.a`
  ${ctas}
  margin-bottom: 1rem;
`;
