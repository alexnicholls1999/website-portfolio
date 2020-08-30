import React, {use} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Logo from "../assets/AZN-logo-dark.png";
import {Navbar, Container, Nav, Form, NavDropdown, Button, FormControl} from "react-bootstrap";
import { useLocation } from "react-router-dom";

// const Dark = {
//   color: "white !important"
// }


const StyledNav = styled(Nav)`
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 250px;
  color: white !important;


`;

const StyledLi = styled(Nav.Link)`
  color: ${({ theme }) => theme.colors.white};
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

const StyledBurgerMenu = styled.div`
width: 2rem;
height: 2rem;
position: relative;
top: 5px;
// float: left;
z-index: 2;
display: flex;
justify-content: space-around;
flex-flow: column nowrap;

  @media (min-width: 990px) {
    display: none;
  }

div {
  width: 2rem;
  height: 0.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all .3s ease-in;

  &:nth-child(1) {
    transform: ${({open}) => (open ? "rotate(45deg)" : "rotate{0}")};
  }

  &:nth-child(2) {
    opacity: ${({open}) => (open ? 0 : 1)};
  }

  &:nth-child(3) {
    transform: ${({open}) => (open ? "rotate(-45deg)" : "rotate{0}")};
  }
}
`;

const StyledMenuWrapper = styled.div`
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  transition: all .75s ease-in;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.black};
  position: fixed;
  padding-top: 10%;
  z-index: 2;
  top: 0;
  right: 0;
`;


function Navigationbar(props) {

  const {onClick, open} = props;
  
  const handleClick = (e) => {
    e.preventDefault();
    onClick(e);
  };

  return (

    <div>
      <StyledMenuWrapper open={open}>
            <Menu onClick={handleClick}/>
      </StyledMenuWrapper>
      
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#work" style={{zIndex: "2"}}>
            <img src={Logo}/>
          </Navbar.Brand>
          <StyledBurgerMenu onClick={handleClick} open={open}>
               <div />
               <div />
               <div />
          </StyledBurgerMenu>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link style={{color: "white"}} href="#work">Work</Nav.Link>
              <Nav.Link style={{color: "white"}} href="#about">About</Nav.Link>
              <Nav.Link style={{color: "white"}} href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

Navigationbar.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default Navigationbar;
