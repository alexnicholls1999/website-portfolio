import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import GlobalStyles from "./config/GlobalStyles";
import {ThemeProvider} from "styled-components";
import theme from "./config/theme";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";

function App (){

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


  return(
    <div>
      <ThemeProvider theme={theme}>
        <Header onClick={handleClick} open={menuOpen}/>
        <GlobalStyles />
        <div 
          onClick={handleOuterWrapperClick}
          style={{width: "100vw", horizontalScroll: "none", overflowX: "hidden"}}
        ></div>
      </ThemeProvider>
    </div>
  )
}

export default App;
