import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset margins and paddings for all elements */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Ensures padding doesn't affect element width */
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa;
    color: #333;
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
