"use client";

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
import styles from "./Footer.module.scss";

interface FooterProps {
  menuItems?: MenusMenuItemEntity[];
}
const Footer = ({ menuItems = [] }: FooterProps) => {
  const items = getHierarchicalItems(menuItems);

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.deco} />
      <div className={styles.navContainer}>
        <div className={styles.contact}>
          <div className={styles.contactBox}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>
                <PhoneIcon />
              </span>
              <div className={styles.phoneBox}>
                <div style={{ display: "table-column" }}>Phones</div>
                {TELEFONOS.map((telefono, index) => (
                  <Link
                    href={`tel:${telefono}`}
                    key={index}
                    onClick={() => {
                      window.fbq("track", "Contact");
                    }}
                  >
                    <span className={styles.phoneNumber}>{telefono}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href={`mailto:${EMAIL}`}
              onClick={() => {
                window.fbq("track", "Contact");
              }}
            >
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <div style={{ display: "table-column" }}>Email</div>
                  <MailIcon />
                </span>
                <span className={styles.contactName}>{EMAIL}</span>
              </div>
            </Link>
            <Link
              href={`${UBICACION}`}
              onClick={() => {
                window.fbq("track", "FindLocation");
              }}
            >
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <div style={{ display: "table-column" }}>Google Maps</div>
                  <LocationIcon />
                </span>
                <span className={styles.contactName}>Ver en maps</span>
              </div>
            </Link>
          </div>
          <div className={styles.socialBox}>
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
          </div>
        </div>
        <Navigation
          items={items}
          split
          isMain={false}
          color="white"
          bgColor="transparent"
          borderColor="transparent"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.certifications}>
          <Link
            href="https://certificaciones.uaf.gob.do/certificaciones_so_view.php?editid1=46"
            title="Cerficación Sujeto Obligado - Unidad de Análisis Financiero"
          >
            <div className={styles.certificacion}>
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
            </div>
          </Link>
        </div>
        <Link href="/">
          <div className={styles.logo}>
            <Image
              src={logo}
              width="300"
              height="67.41"
              alt="Coopbueno Logo Footer"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
