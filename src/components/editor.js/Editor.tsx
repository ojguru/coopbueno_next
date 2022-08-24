import React from "react";
import Image from "./Image";
import Blocks from "editorjs-blocks-react-renderer";
import Checklist from "./Checklist";
import styled from "@emotion/styled";
import editorStyles from "styles/editor-styles";
import { GAP, LINEHEIGHT } from "lib/constants";

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

  p {
    margin: ${GAP} 0;
    line-height: ${LINEHEIGHT};
  }

  ul {
    margin: ${GAP} 0;
    margin-left: 2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 3.5rem 0 ${GAP} 0;
    line-height: ${LINEHEIGHT};
  }
`;
