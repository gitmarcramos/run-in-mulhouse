import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<{ theme: any }>`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}

*{
margin: 0;
padding: 0;
box-sizing: border-box;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
transition: background-color 600ms ease-out;
-webkit-tap-highlight-color: rgba(0,0,0,0);
-webkit-tap-highlight-color: transparent;
scroll-behavior: smooth;
}

html {
  width: 100%;
  height: 100%;
}

a{
    text-decoration: none;
}

`;

export default GlobalStyles;
