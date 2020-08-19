import React, { useState, useEffect } from 'react';
import Navigationbar from "../Components/Navbar";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: black;
  height: 100vh;
`; 



function Header(props) {

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  const handleClick = e => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
        <StyledHeader>
            <Navigationbar onClick={handleClick} open={menuOpen} />
        </StyledHeader>
    </>
  )
}

export default Header;