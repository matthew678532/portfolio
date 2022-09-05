import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import '@fontsource/open-sans';
import '@fontsource/old-standard-tt/700.css';
import '@fontsource/roboto-serif';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body {
    background-color: black;
    height: 100vh;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
