import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import '@fontsource/roboto';
import '@fontsource/abril-fatface';

import prismThemeLight from 'prismjs/themes/prism-solarizedlight.css';
import prismThemeDark from 'prismjs/themes/prism-tomorrow.css';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
  
  ul {
    list-style-type: square;
  }
  
  a {
    text-decoration: none;
  
    &:link {
      text-decoration: none;
    }
    
    &:hover {
      text-decoration: underline;
    }
    
    &:visited {
      text-decoration: none;
    }
    
    &:active {
      text-decoration: none;
    }
  }
  
  table {
    border-collapse: collapse;
  }
  
  th {
    font-weight: bold;
    text-align: left;
  }
  
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  th, td {
    padding: 1rem;
    border: 1px solid #e0e0e0;
  }
  
  blockquote {
    border-left: 0.5rem solid #e0e0e0;
    padding: 0.5rem 1rem;
  }
  
  hr {
    border: 0;
    border-top: 1px solid #e0e0e0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #000;
  }

  p {
    color: #263238;
  }

  blockquote {
    background: #f9f9f9;
    border-left: 0.5rem solid #ccc;
    margin: 1.5rem 10px;
    padding: 0.5rem 10px;
  }

  // Code highlighting logic
  ${prismThemeDark}
`;

export default GlobalStyle;
