import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        overflow: hidden;
    }
`;

export default GlobalStyle;
