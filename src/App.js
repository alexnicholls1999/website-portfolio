import React from 'react';
import GlobalStyles from "./config/GlobalStyles";
import {ThemeProvider} from "styled-components";
import theme from "./config/theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";

function App (){

  return(
    <div>
      <ThemeProvider theme={theme}>
        <Header/>
        <GlobalStyles />
      </ThemeProvider>
    </div>
  )
}

export default App;

