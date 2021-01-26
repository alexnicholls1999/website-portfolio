import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Logo from "../assets/AZN-logo-dark.png";
import {Navbar, Container, Nav, Form, NavDropdown, Button, FormControl} from "react-bootstrap";
import { useLocation, Link} from "react-router-dom";

// Firebase 

import useAuth from "../services/firebase/useAuth";
import firebase from "firebase/app";

const StyledNav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20%;

  }
`;

const StyledLi = styled.li`
  margin: 10px;
  width: 100%;
  text-align: center;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;
 const StyledLink = styled(Link)`

  color: ${({ theme, primary }) => primary ? theme.colors.white : theme.colors.blue};

  :hover {
    font-size: 27.5px;
    transition: linear .3s ease in-out;
    text-decoration: none;
  }
  
`;

function Menu(props) {

  const location = useLocation();

  const { signOut } = useAuth(firebase.auth);

  const handleSignOutClick = () => {
    signOut();
  }


  return (
    <div>       
        <StyledNav>
          <ul>
            <StyledLi active={location.pathname === "/"}>
              {" "}
              <StyledLink primary={props.primary} to="/"> Work </StyledLink>{" "}
            </StyledLi>

            <StyledLi active={location.pathname === "/About"}>
              {" "}
              <StyledLink primary={props.primary} to="/About"> About </StyledLink>{" "}
            </StyledLi>

            <StyledLi>
              {" "}
              <StyledLink primary={props.primary} href="/mailto:azini@live.co.uk"> Contact </StyledLink>{" "}
            </StyledLi>  
            <Button style={{marginTop: "15px"}} onClick={handleSignOutClick}>Log Out</Button>
          </ul>
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
  background-color: ${({ theme, primary }) => primary ? theme.colors.white : theme.colors.blue};
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
  background: ${({ theme, primary }) => primary ? theme.colors.black : theme.colors.white};;
  position: fixed;
  padding-top: 10%;
  z-index: 2;
  top: 0;
  right: 0;
  
  @media (min-width: 990px) {
    display: none;
  }
`;


function Navigationbar(props) {

  const {onClick, open, user} = props;
  
  const { signOut } = useAuth(firebase.auth);


  const handleClick = (e) => {
    e.preventDefault();
    onClick(e);
  };

  const handleSignOutClick = () => {
    signOut();
  }

  return (

    <div>
      <StyledMenuWrapper primary={props.primary} open={open}>
            <Menu primary={props.primary} onClick={handleClick}/>
      </StyledMenuWrapper>
      
      <Navbar expand="lg" bg={props.bg} variant={props.variant}>
        <Container>
          <Navbar.Brand href="#work" style={{zIndex: "2"}}>
            <img src={props.Logo}/>
          </Navbar.Brand>
          <StyledBurgerMenu primary={props.primary} onClick={handleClick} open={open}>
               <div />
               <div />
               <div />
          </StyledBurgerMenu>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" activeKey={props.activeKey}>
                <Nav.Item>
                  <Nav.Link as={Link} to="/">Work</Nav.Link>
                </Nav.Item>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link href="mailto:azini@live.co.uk">Contact</Nav.Link> 
                <Button style={{marginLeft: "15px"}} onClick={handleSignOutClick}>Log Out</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

Navigationbar.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};

export default Navigationbar;
