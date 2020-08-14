import React, {useState} from "react";
import styled from "styled-components";
import Logo from "../assets/AZN-logo-dark.png";
import PropTypes from 'prop-types';
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import {useLocation} from "react-router-dom";
import Navigationbar from "./Navbar";

const StyledHeader = styled.header`

    height: 100vh;
    width: 100vw;
    background-color: black;

`;


function Header(props){
  return (
    <div>
        <StyledHeader>
            <Navigationbar/>
        </StyledHeader>


    </div>
  )

}


export default Header;