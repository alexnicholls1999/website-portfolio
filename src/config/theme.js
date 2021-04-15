import WebFont from "webfontloader";

WebFont.load({
    google: {
        families: ['Open Sans:300,400,700', 'sans-serif']
    }
})

const theme = {
    colors: {
        white: 'white',
        black: 'black',
        matteBlack: '#0F0F0F',
        blue: '#107CDC',
        error: '#CE0000'
    },
    typography: {
        fontFamily: 'Open Sans',
        h1: {
            fontSize: '42px',
            fontWeight: 700,
        },
        h2: {
            fontSize: '32px'
        },
        h3: {
            fontSize: '22px'
        }
    }
}

export default theme;