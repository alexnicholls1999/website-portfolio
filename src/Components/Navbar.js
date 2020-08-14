import React, {useState} from "react";
import styled from "styled-components";
import Logo from "../assets/AZN-logo-dark.png";
import PropTypes from 'prop-types';
import { Container, Navbar, Nav } from "react-bootstrap";
import {useLocation} from "react-router-dom";

const StyledNav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLi = styled.li`
  margin-bottom: 10%;
  cursor: pointer;
  width: 100%;
  text-align: center;
  height: 40px;
  display: flex;cuwthjceaceb
  justify-content: center;
  align-items: center;
  background:   ${({ theme, active }) => active ? theme.colors.darkShade[25] : ""}
`;

const StyledClosedText = styled.p`
  text-align: right;
  padding-right: 3%;
  margin-bottom: 15%;
  font-size: 18px;
  cursor: pointer;
`;

function Menu(props){
   const { onClick } = props;
   const location = useLocation();

   return (
     <div>
        <StyledClosedText onClick={onClick}> X </StyledClosedText>
        <StyledNav>
          <ul>
            <StyledLi  active={true}> Dash </StyledLi>
            <StyledLi > Profile </StyledLi>
          </ul>
        </StyledNav>
     </div>
   )

}

Menu.propTypes = {
  onClick: PropTypes.func.isRequired
};


const StyledNavbar = styled(Navbar)`
  background-color: black;
`;

const StyledNavLink = styled(Nav.Link)`
  color: white !important;
`;


function Navigationbar(props){

  const {onClick, open} = props;

  const handleClick = (e) => {
      e.preventDefault();
      onClick(e);
  };

  const StyledBurgerMenu = styled.div`
  width: 90px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  hr {
    margin: 4px 0 0 4px;
    width: 20%;
    border: 1px solid ${({ theme }) => theme.colors.darkShade[100]};
  }
`;

  const StyledMenuWrapper = styled.div`
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  width: 304px;
  background: linear-gradient(180deg, #6fcf9d 0%, #67d2e8 100%);
  position: absolute;
  padding-top: 10%;
  top: 0;
  right: 0;
  `;

  return (
    <div>
        <StyledNavbar expand="lg">
          <Container>
            <Navbar.Brand href="#home"><img src={Logo}/></Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <StyledNavLink href="#home">Work</StyledNavLink>
                <StyledNavLink href="#link">About</StyledNavLink>
                <StyledNavLink href="#contact">Contact</StyledNavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </StyledNavbar>
    </div>
  )

}


export default Navigationbar;