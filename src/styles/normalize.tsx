import { css } from '@emotion/react'

const normalize = css`
  /*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */

  /* Document
	 ========================================================================== */

  /**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  /* Sections
	 ========================================================================== */

  /**
 * Remove the margin in all browsers.
 */

  body {
    margin: 0;
  }

  /**
 * Correct the font size and margin on h1 elements within section and
 * article contexts in Chrome, Firefox, and Safari.
 */

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  /* Grouping content
	 ========================================================================== */

  /**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  /**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd em font sizing in all browsers.
 */

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  /* Text-level semantics
	 ========================================================================== */

  /**
 * Remove the gray background on active links in IE 10.
 */

  a {
    background-color: transparent;
  }

  /**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  /**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

  b,
  strong {
    font-weight: bolder;
  }

  /**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd em font sizing in all browsers.
 */

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  /**
 * Add the correct font size in all browsers.
 */

  small {
    font-size: 80%;
  }

  /**
 * Prevent sub and sup elements from affecting the line height in
 * all browsers.
 */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
	 ========================================================================== */

  /**
 * Remove the border on images inside links in IE 10.
 */

  img {
    border-style: none;
  }

  /* Forms
	 ========================================================================== */

  /**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  /**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

  button,
  input {
    overflow: visible;
  }

  /**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

  button,
  select {
    text-transform: none;
  }

  /**
 * Correct the inability to style clickable types in iOS and Safari.
 */

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  /**
 * Remove the inner border and padding in Firefox.
 */

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
 * Restore the focus styles unset by the previous rule.
 */

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
 * Correct the padding in Firefox.
 */

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from fieldset elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *		fieldset elements in all browsers.
 */

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  /**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

  progress {
    vertical-align: baseline;
  }

  /**
 * Remove the default vertical scrollbar in IE 10+.
 */

  textarea {
    overflow: auto;
  }

  /**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  /**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  /**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  /**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to inherit in Safari.
 */

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  /* Interactive
	 ========================================================================== */

  /*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

  details {
    display: block;
  }

  /*
 * Add the correct display in all browsers.
 */

  summary {
    display: list-item;
  }

  /* Misc
	 ========================================================================== */

  /**
 * Add the correct display in IE 10+.
 */

  template {
    display: none;
  }

  /**
 * Add the correct display in IE 10.
 */

  [hidden] {
    display: none;
  }
`

export default normalize
