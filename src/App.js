import React from 'react';
import theme from "./config/theme.js";
import GlobalStyles from "./config/GlobalStyles";
import {ThemeProvider} from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// Components 

import Work from "./Views/Work";
import About from "./Views/About";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Switch>
        <Route path="/work" exact>
          <Work />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

export default App;