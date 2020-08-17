import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"
import Logo from "../assets/AZN-logo-dark.png"
import {Navbar, Container, Nav, Form, NavDropdown, Button, FormControl} from "react-bootstrap";
import { useLocation } from "react-router-dom";

const StyledNav = styled(Nav)`
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 250px;
`;

const StyledLi = styled(Nav.Link)`
  color: white;
  font-size: 25px;
`;

function Menu(props) {

  const location = useLocation();

  return (
    <div>       
        <StyledNav>
          <StyledLi href="#work">Work</StyledLi>
          <StyledLi href="#about">About</StyledLi>
          <StyledLi href="#contact">Contact</StyledLi>
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
    cursor: pointer;
    z-index: 20;
    display: flex;
    right: 0px;
    flex-direction: column;
    align-items: center;
    flex-flow: column nowrap;
    justify-content: space-around;
    
      div {
        width: 2rem;
        height: 2px;
        background-color: white;

        &:nth-child(1) {
          transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
          opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
          transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
          // margin-top: ${({ open }) => open ? '0px' : '10px'};
        }
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
          <StyledBurgerMenu onClick={handleClick} open={open}>
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
