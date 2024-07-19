import React from "react";
import Imagen from "next/image";
import styled from "@emotion/styled";
import { RenderFn } from "editorjs-blocks-react-renderer";

const Image: RenderFn<{
  text: string;
  file: {
    url: string;
    height: string | number;
    width: string | number;
    alternativeText?: string;
    alt?: string;
    name?: string;
  };
}> = ({ id, data, className = "" }) => {
  return (
    <Div>
      <Imagen
        src={data?.file?.url}
        id={id}
        width={data.file.width || 1920}
        height={data.file.height || 1080}
        alt={data.file.alternativeText || data.file.alt || data.file.name}
        objectFit="contain"
      />
    </Div>
  );
};

export default Image;

const Div = styled.div``;
