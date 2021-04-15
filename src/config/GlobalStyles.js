import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }
    
    html,
    body,
    #root {
        width: 100%;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: ${props => props.theme.typography.fontFamily};
        background-color: ${props => props.theme.colors.matteBlack} !important;
    }

    h1 {
        font-size: ${props => props.theme.typography.h1.fontSize};
        font-weight: ${props => props.theme.typography.h1.fontWeight};
        color: ${props => props.theme.colors.white};
    }
    h2 {
        font-size: ${props => props.theme.typography.h2.fontSize};
    }

    h3 {
        font-size: ${props => props.theme.typography.h3.fontSize};
        color: ${props => props.theme.colors.white};
    }
    h4 { 
        font-size: 19px;
    }
    p {
        color: ${props => props.theme.colors.white};
    } 

`;

export default GlobalStyles;