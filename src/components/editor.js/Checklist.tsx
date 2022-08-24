import React from "react";
import parser from "html-react-parser";
import { RenderFn } from "editorjs-blocks-react-renderer";

const Checklist: RenderFn<{
  items: string[];
}> = ({ data, className = "" }) => {
  return (
    <>
      {data?.items.map((item: any, i: any) => (
        <p key={i} className={className}>
          <label>
            <input type="checkbox" /> {parser(item.text)}
          </label>
        </p>
      ))}
    </>
  );
};

export default Checklist;
