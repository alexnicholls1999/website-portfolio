import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        font-family: ${props => props.theme.typography.fontFamily};
        background-color: #0F0F0F;
    }
    h1 {
        font-size: ${props => props.theme.typography.h1.fontSize};
        font-weight: ${props => props.theme.typography.h1.fontWeight};
        color: ${props => props.theme.colors.white};
    }
    h2 {
        font-size: 32px;
    }
    h3 {
        font-size: 32px;
        color: ${props => props.theme.colors.white};
    }
    h4 { 
        font-size: 19px;
    }
    p {
        color: ${props => props.theme.colors.white};
    } 
`

export default GlobalStyles;