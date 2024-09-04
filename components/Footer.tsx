import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/navigation/navigation";
import { container, mq } from "@/components/grid";
import {
  PhoneIcon,
  LocationIcon,
  MailIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
} from "./icons";
import {
  FACEBOOK,
  INSTAGRAM,
  TWITTER,
  TELEFONOS,
  UBICACION,
  EMAIL,
} from "@/lib/constants";
import logo from "@/public/coopbueno_logo_footer.svg";
import uaf from "@/public/uaf.webp";
import colors from "@/styles/colors";
import { getHierarchicalItems } from "@/lib/auxiliar";
import { MenusMenuItemEntity } from "@/gql/graphql";
import { getImageURL } from "@/lib/api";

interface FooterProps {
  menuItems?: MenusMenuItemEntity[];
}
const Footer = ({ menuItems = [] }: FooterProps) => {
  const items = getHierarchicalItems(menuItems);

  return (
    <SiteFooter role="contentinfo">
      <Deco />
      <NavContainer>
        <Contact>
          <ContactBox>
            <ContactItem>
              <ContactIcon>
                <PhoneIcon />
              </ContactIcon>
              <PhoneBox>
                <div style={{ display: "table-column" }}>Phones</div>
                {TELEFONOS.map((telefono, index) => (
                  <Link href={`tel:${telefono}`} passHref key={index}>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={() => {
                        window.fbq("track", "Contact");
                      }}
                    >
                      <PhoneNumber>{telefono}</PhoneNumber>
                    </a>
                  </Link>
                ))}
              </PhoneBox>
            </ContactItem>
            <Link href={`mailto:${EMAIL}`} passHref>
              <a
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => {
                  window.fbq("track", "Contact");
                }}
              >
                <ContactItem>
                  <ContactIcon>
                    <div style={{ display: "table-column" }}>Email</div>
                    <MailIcon />
                  </ContactIcon>
                  <ContactName>{EMAIL}</ContactName>
                </ContactItem>
              </a>
            </Link>
            <Link href={`${UBICACION}`} passHref>
              <a
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => {
                  window.fbq("track", "FindLocation");
                }}
              >
                <ContactItem>
                  <ContactIcon>
                    <div style={{ display: "table-column" }}>Google Maps</div>
                    <LocationIcon />
                  </ContactIcon>
                  <ContactName>Ver en maps</ContactName>
                </ContactItem>
              </a>
            </Link>
          </ContactBox>
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
        </Contact>
        <Navigation
          items={items}
          split
          isMain={false}
          color="white"
          bgColor="transparent"
          borderColor="transparent"
        />
      </NavContainer>
      <Container>
        <Certifications>
          <Link
            href="https://certificaciones.uaf.gob.do/certificaciones_so_view.php?editid1=46"
            // hreflang="es"
            passHref
          >
            <a
              target="_blank"
              rel="noreferrer noopener nofollow"
              title="Cerficación Sujeto Obligado - Unidad de Análisis Financiero"
            >
              <Certification>
                <Image
                  // src={getImageURL(
                  //   "https://certificaciones.uaf.gob.do/certificados/UAF00046MLEB.png"
                  // )}
                  src={uaf}
                  alt="Sello de Certificación de Sujeto Obligado"
                  width="83"
                  height="100"
                  lang="es"
                />
              </Certification>
            </a>
          </Link>
        </Certifications>
        <Link href="/" passHref>
          <a rel="noopener">
            <Logo>
              <Image
                src={logo}
                width="300"
                height="67.41"
                alt="Coopbueno Logo Footer"
                objectFit="contain"
              />
            </Logo>
          </a>
        </Link>
      </Container>
    </SiteFooter>
  );
};

export default Footer;

const Certification = styled.div`
  max-width: 6rem;
  ${mq.md} {
    max-width: 8rem;
  }
`;

const NavContainer = styled.div`
  ${container}
  ${mq.xl} {
    max-width: 160rem;
  }
  display: grid;
  gap: 3rem;
  ${mq.md} {
    grid-template-columns: 1fr 2fr;
  }
`;

const Container = styled.div`
  ${container}
  ${mq.xl} {
    max-width: 160rem;
  }
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 3rem;
`;

const SiteFooter = styled.footer`
  border-color: #dcd7ca;
  border-style: solid;
  border-width: 0;
  padding: 3rem 0;
  background-color: ${colors.primary.light};
  color: white;
  position: relative;
  overflow: hidden;
  padding-top: 8rem;

  ${mq.lg} {
    font-size: 1.8rem;
    padding: 4.3rem 0;
    padding-top: 10rem;
    padding-bottom: 5rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Deco = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform-origin: 12% 12%;
  transform: translate(-20%, 0) rotate(-35deg);
  background-color: ${colors.primary.base};
  box-shadow: 0 0 5rem ${colors.primary.base};
  border-radius: 2.5%;
  &:before {
    content: "";
    position: absolute;
    top: 0%;
    left: 5%;
    transform: translate(0, -50%);
    height: 0;
    width: 3.5%;
    background-color: ${colors.secondary.base};
    padding-bottom: 3.5%;
    border-radius: 50%;
  }

  &:after {
    content: "";
    width: 20%;
    height: 0;
    padding-bottom: 20%;
    position: absolute;
    top: 20%;
    left: 38%;
    transform-origin: 15% 15%;
    transform: translate(0%, -60%);
    background-color: ${colors.primary.light};
    box-shadow: 0 0 5rem #00000010;
    border-radius: 10%;
    z-index: 0;
  }
`;

const Logo = styled.div`
  margin: 2rem 0;
  width: 100%;
  max-width: 20rem;
  ${mq.md} {
    max-width: 35rem;
  }
`;

const Certifications = styled.div`
  display: block;
  ${mq.md} {
    display: inline-block;
  }
  img {
    width: 70px;
  }
`;

const Contact = styled.div`
  margin-bottom: 4rem;
  order: 2;
  ${mq.md} {
    order: initial;
  }
`;

const SocialBox = styled.span``;

const SocialIcon = styled.span`
  background-color: white;
  padding: 0.7rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  color: ${colors.primary.base};
  margin-bottom: 1rem;
  display: block;
`;

const ContactBox = styled.div``;

const ContactItem = styled.div`
  margin-bottom: 2rem;
`;

const ContactIcon = styled.span`
  display: inline-block;
  vertical-align: middle;
`;

const ContactName = styled.span`
  display: inline-block;
  vertical-align: middle;
  &:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 2rem;
  }
`;

const PhoneBox = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const PhoneNumber = styled.span`
  display: block;
  margin: 11px 0;
  &:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 2rem;
  }
`;
