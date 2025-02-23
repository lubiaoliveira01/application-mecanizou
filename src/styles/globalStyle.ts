import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
    html {
      font-size: 62.5%;
    }
    body {
      font-family: 'Inter', sans-serif;
    }  
`;
