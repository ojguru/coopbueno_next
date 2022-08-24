import React from "react";
import Image from "./Image";
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
