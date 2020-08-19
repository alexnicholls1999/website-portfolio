import React from 'react';
import logo from './logo.svg';
import GlobalStyles from "./config/GlobalStyles";
import {ThemeProvider} from "styled-components";
import theme from "./config/theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";

function App (){
  return(
    <div>
      <ThemeProvider theme={theme}>
        <Header>
          <p>Test</p>
        </Header>
        <GlobalStyles />
      </ThemeProvider>
    </div>
  )
}

export default App;
