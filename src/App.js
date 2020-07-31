import React from 'react';
import logo from './logo.svg';
import GlobalStyles from "./config/GlobalStyles";
import {ThemeProvider} from "styled-components";
import theme from "./config/theme";


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <h1>Test</h1>
      </ThemeProvider>
    </div>
  );
}

export default App;
