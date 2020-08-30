import WebFont from "webfontloader";

WebFont.load({
    google: {
        families: ['Open Sans:300,400,700', 'sans-serif']
    }
})

const theme = {
    colors: {
        white: 'white',
        black: 'black'
    },
    typography: {
        fontFamily: 'Open Sans',
        h1: {
            fontSize: '42px',
            fontWeight: 700,
        }
    }
}

export default theme;
