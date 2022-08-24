import React from "react";
import Image from "./Image";
import Blocks from "editorjs-blocks-react-renderer";
import Checklist from "./Checklist";
import styled from "@emotion/styled";
import editorStyles from "styles/editor-styles";

interface EditorProps {
  content: any;
}
const Editor = ({ content }: EditorProps) => {
  const blocks = JSON.parse(content || "{}").blocks;

  return blocks ? (
    <EditorWrapper>
      <Blocks
        data={JSON.parse(content)}
        renderers={{
          checklist: Checklist,
          image: Image,
        }}
      />
    </EditorWrapper>
  ) : null;
};

export default Editor;

const EditorWrapper = styled.div`
  ${editorStyles}
`;
