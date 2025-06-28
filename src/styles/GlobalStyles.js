// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s, color 0.3s;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.primary};
  }

  h1, h2, h3, h4, h5 {
    color: ${(props) => props.theme.headerText};
  }
`;

export default GlobalStyles;
