import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"
import Logo from "../assets/AZN-logo-dark.png"
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
      <StyledClosedText onClick={onClick}> X </StyledClosedText>
      <StyledNav>
          <ul>
            <StyledLi active={true}> Work </StyledLi>
            <StyledLi> About </StyledLi>
            <StyledLi> Contact </StyledLi>
          </ul>
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
    display: flex;
    right: 0px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    hr {
      margin: 4px  0 0 4px;
      width: 20%;
      border: 1px solid white;
    }
  `;

  const StyledMenuWrapper = styled.div`
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    height: 100vh;
    width: 304px;
    background: black;
    position: absolute;
    padding-top: 10%;
    top: 0;
    right: 0;
  `;

  const StyledWrapper = styled.div`
    width: 100%;
    background: black;
    height: 50px;
    display: flex;
    justify-content: space-between;
  `;

  return (
    <div>
      <StyledMenuWrapper open={open}>
          <Menu onClick={handleClick}/>
      </StyledMenuWrapper>
      <StyledWrapper>
          <StyledBurgerMenu onClick={handleClick}>
             <hr />
             <hr />
             <hr />
          </StyledBurgerMenu>
      </StyledWrapper>
    </div>
  );
}

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default Header;

// return (
//     <div>
//         <StyledNavbar expand="lg">
//           <Container>
//             <Navbar.Brand href="#home"><img src={Logo}/></Navbar.Brand>
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="ml-auto">
//                 <StyledNavLink href="#home">Work</StyledNavLink>
//                 <StyledNavLink href="#link">About</StyledNavLink>
//                 <StyledNavLink href="#contact">Contact</StyledNavLink>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </StyledNavbar>
//     </div>
//   )

// }
