import React from "react";
import Link from "next/link";
import cta from "styles/cta";
import styled from "@emotion/styled";

interface CtaProps {
  cta?: any;
  onClick?: any;
}
const Cta = ({ cta, onClick }: CtaProps) => {
  return cta ? (
    <Link href={cta.uri ?? ""} passHref>
      <SLink
        target={cta.target ? "_blank" : ""}
        rel={cta.target ? "noreferrer noopener" : ""}
        onClick={onClick}
      >
        {cta.texto}
      </SLink>
    </Link>
  ) : null;
};

export default Cta;

const SLink = styled.a`
  ${cta}
`;
