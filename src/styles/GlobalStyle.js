import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    :root {
        --header-height: 80px;
        --base-color:#86b81d;
    }
    body {
        margin: 0;
        padding: 0;
    }
`;
