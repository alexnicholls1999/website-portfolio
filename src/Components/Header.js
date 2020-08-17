import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"
import Logo from "../assets/AZN-logo-dark.png"
import {Navbar, Container, Nav, Form, NavDropdown, Button, FormControl} from "react-bootstrap";
import { useLocation } from "react-router-dom";

const StyledNav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLi = styled.li`
  li {
    margin-bottom: 10%;
    cursor: pointer;
    width: 100%;
    text-align: center;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black
`;

const StyledClosedText = styled.p`
    text-align: right;
    padding-right: 3%;
    margin-bottom: 15%;
    font-size: 18px;
    cursor: pointer;
`;

function Menu(props) {

  const { onClick } = props;
  const location = useLocation();

  return (
    <div>
      <StyledNav>
            <Nav className="ml-auto">
              <Nav.Link href="#work">Work</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
      </StyledNav>
    </div>
  );
}

Menu.propTypes = {
  onClick: PropTypes.func.isRequired
};


function Header(props) {

  const {onClick, open} = props;
  
  const handleClick = (e) => {
    e.preventDefault();
    onClick(e);
  };

  const StyledBurgerMenu = styled.div`
    width: 90px;
    cursor: pointer;
    z-index: 20;
    display: flex;
    right: 0px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      margin: 4px 0 0 4px;
      width: 20%;
      border: 1px solid white;
    }
  `;

  const StyledMenuWrapper = styled.div`
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    height: 100vh;
    width: 100vw;
    background: black;
    position: fixed;
    padding-top: 10%;
    z-index: 1;
    top: 0;
    right: 0;
  `;

  return (

    <div>
      <StyledMenuWrapper open={open}>
            <Menu onClick={handleClick}/>
      </StyledMenuWrapper>
      
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#work">
            <img src={Logo}/>
          </Navbar.Brand>
          <StyledBurgerMenu onClick={handleClick}>
               <div />
               <div />
               <div />
          </StyledBurgerMenu>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#work">Work</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default Header;
