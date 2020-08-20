import React, { useState, useEffect } from 'react';
import Navigationbar from "../Components/Navbar";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import styled from "styled-components";
import { Container, Col, Row } from 'react-bootstrap';
import Typical from "react-typical";



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
          <Container>
            <Row style={{padding:"10%"}}></Row>
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
              <Col lg={7} md={6}>
                <img src={}/>
              </Col>
            </Row>
          </Container>
      </StyledHeader>
    </>
  )
}

export default Header;