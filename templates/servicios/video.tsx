import React from "react";
import styled from "@emotion/styled";
import { container, mq } from "@/components/grid";
import YouTube from "react-youtube";
import colors from "@/styles/colors";
import { Servicio } from "@/gql/graphql";

interface ProductProps {
  servicio: Servicio;
}
const Video = ({ servicio }: ProductProps) => {
  const video = servicio.video;
  const parseURL = video?.includes("http") ? new URL(video) : null;
  const videoId = parseURL?.searchParams.get("v");

  return videoId ? (
    <Section space>
      <Container>
        <Media>
          <YouTube videoId={videoId} />
        </Media>
      </Container>
    </Section>
  ) : null;
};

export default Video;

const Section = styled.section`
  ${container}
  padding: 0;
`;

const Container = styled.div`
  ${container}
`;

const Media = styled.div`
  border-radius: 2rem;
  border: 2rem solid transparent;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  padding-bottom: 56.25%;
  position: relative;
  background-color: white;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @include mq(md) {
    border: 4rem solid transparent;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-100%, -50%);
    width: 10%;
    padding-bottom: 10%;
    background-color: ${colors.primary.base};
    border-radius: 10%;
    z-index: -1;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(75%, 50%);
    width: 15%;
    padding-bottom: 15%;
    background-color: ${colors.primary.base};
    border-radius: 10%;
    z-index: 2;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`;
