import { css } from "@emotion/react";
import { GAP, LINEHEIGHT } from "lib/constants";

const editorStyles = css`
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

export default editorStyles;
