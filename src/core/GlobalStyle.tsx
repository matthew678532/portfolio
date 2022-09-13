import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import '@fontsource/roboto';
import '@fontsource/abril-fatface';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
