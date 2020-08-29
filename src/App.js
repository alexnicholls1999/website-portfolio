import React, {useRef} from 'react';
import {useIntersection} from "react-use";
import gsap from "gsap";
import GlobalStyles from "./config/GlobalStyles";
import styled, {ThemeProvider} from "styled-components";
import theme from "./config/theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Tile from "./Components/Tile";
import { Container , Col, Row } from "react-bootstrap";
import { intersectionTypeAnnotation } from '@babel/types';
import Footer from "./Components/Footer";


// Tile Images 
import ProjectA from "./assets/Projects/Project_A.png";
import ProjectB from "./assets/Projects/Project_B.png";
import ProjectC from "./assets/Projects/Project_C.gif";
import ProjectD from "./assets/Projects/Project_D.gif";
import { element } from 'prop-types';


const HeaderBorder = styled.div`
  padding: 15%;
  margin-top: -1%;
  background-color: white;
  `;

const Projects = styled.main`
  padding-bottom: 10%;
  background-color: white;
`;

function App (){

  const sectionRef = useRef(null);


  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '1500px',
    threshold: 1
  });

  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 1
      }
    });
  };

  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out"
    });
  };

  intersection && intersection.isIntersecting
    ? fadeIn(".active")
    : fadeOut(".active");


    
  return(
    <div>
      <ThemeProvider theme={theme}>
        <Header/>
        <HeaderBorder/>
        
          <Projects ref={sectionRef}>
          <Container>
          <Row>
              <Col xl={6} lg={6} md={6}>
                <a href="#" className="d-block mb-4 h-100">
                  <Tile className="active">
                      <img className="img-fluid" src={ProjectA}/>
                  </Tile>
                </a>
              </Col>
              <Col xl={6} lg={6} md={6}>
                <a href="#" className="d-block mb-4 h-100">
                  <Tile className="active">
                      <img className="img-fluid" src={ProjectB}/>
                  </Tile>
                </a>
              </Col>
            </Row>
            <Row>
              <Col xl={6} lg={6} md={6}>
                <a href="#" className="d-block mb-4 h-100">
                  <Tile className="active">
                      <img className="img-fluid" src={ProjectC}/>
                  </Tile>
                </a>
              </Col> 
              <Col xl={6} lg={6} md={6}>
                <a href="#" className="d-block mb-4 h-100">
                  <Tile className="active">
                      <img className="img-fluid" src={ProjectD}/>
                  </Tile>
                </a>
              </Col>
            </Row>
            </Container>
          </Projects>
        <Footer/>
        <GlobalStyles />
      </ThemeProvider>
    </div>
  )
}

export default App;

