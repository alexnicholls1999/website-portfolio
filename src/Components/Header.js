import React, { useState, useEffect } from 'react';
import Navigationbar from "../Components/Navbar";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import styled from "styled-components";
import { Container, Col, Row } from 'react-bootstrap';
import Typical from "react-typical";

import Mobile from "../assets/mobile.png";

const Skew = styled.div`
  background-color: #107CDC;
  height: 50px;
  transform: skewY(-1deg);
  margin-top: -1%;
  position: relative;
`;

function SkewBorder(){
 
  return(
    <>
      <Skew></Skew>
    </>
  )

  
}

const StyledHeader = styled.header`
  background-color: black;
  height: 100vh;
`; 

const StyledMobile = styled.div`
  z-index: 1;  

  img {
    width: 100%;
  }
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
          <Container>
            <Row style={{padding:"5%"}}></Row>
            <Row>
              <Col lg={7} md={6}>
                <h1>Alex Zietara Nicholls</h1>
                <p>I am a {' '}

                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={
                      [
                        'Front End Developer',
                        1000,
                        'UX Designer',
                        1000,
                        'UI Designer',
                        1000
                      ]
                    }
                  />

                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={5} md={4} sm={6}></Col>
              <Col lg={7} md={8} sm={12}>
                <StyledMobile className="py-5 ml-auto">
                    <img src={Mobile}/>  
                </StyledMobile>
              </Col>
            </Row>
          </Container>
      </StyledHeader>
    </>
  )
}

export default Header;