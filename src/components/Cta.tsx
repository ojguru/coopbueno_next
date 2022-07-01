import React from "react";
import Link from "next/link";
import cta from "styles/cta";
import styled from "@emotion/styled";

interface CtaProps {
  cta?: any;
}
const Cta = ({ cta }: CtaProps) => {
  return cta ? (
    <Link href={cta.uri ?? ""} passHref>
      <SLink target={cta.target ? "_blank" : ""}>{cta.texto}</SLink>
    </Link>
  ) : null;
};

export default Cta;

const SLink = styled.a`
  ${cta}
`;
