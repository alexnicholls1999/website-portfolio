import React, { useState, useEffect }from 'react';
import logo from './logo.svg';
import GlobalStyles from "./config/GlobalStyles";
import {ThemeProvider} from "styled-components";
import theme from "./config/theme";
import Navbar from "./Components/Navbar";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleClick = e => {
    setMenuOpen(!menuOpen);
  };

  const handleOuterWrapperClick = e => {
    setMenuOpen(false);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar
          onClick={handleClick}
          open={menuOpen}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
