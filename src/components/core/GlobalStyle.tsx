import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import '@fontsource/open-sans';
import '@fontsource/silkscreen';
import '@fontsource/old-standard-tt/700.css';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body {
    background-color: black;
  }

  h1 {
    font-family: 'Old Standard TT', serif;
  }

  h2 {
    font-family: 'Silkscreen', cursive;
  }

  p {
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyle;