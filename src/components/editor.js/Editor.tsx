import React from "react";
import Header from "./Header";
import List from "./List";
import Paragraph from "./Paragraph";
import Image from "./Image";
import dynamic from "next/dynamic";
import Table from "./Table";
import Blocks from "editorjs-blocks-react-renderer";
import Checklist from "./Checklist";

interface EditorProps {
  content: any;
}
const Editor = ({ content }: EditorProps) => {
  const blocks = JSON.parse(content || "{}").blocks;

  return blocks ? (
    <div>
      <Blocks
        data={JSON.parse(content)}
        renderers={{
          checklist: Checklist,
          image: Image,
        }}
      />
    </div>
  ) : null;
};

export default Editor;
