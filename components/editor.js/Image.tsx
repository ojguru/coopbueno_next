import React from "react";
import Imagen from "next/image";
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
    <div>
      <Imagen
        src={data?.file?.url}
        id={id}
        {...data}
        alt={data.file.alternativeText || data.file.alt || data.file.name || ""}
      />
    </div>
  );
};

export default Image;
