import React, {useRef, useEffect, useState} from 'react';
import {useIntersection, useGetSetState} from "react-use";
import { useLocation, Link} from "react-router-dom";
import gsap from "gsap";
import styled from "styled-components";

// Components
import Tile from "../Components/Tile";
import { Container , Col, Row } from "react-bootstrap";
import Footer from "../Components/Footer";
import Navigationbar from "../Components/Navbar";
import Typewriter from "../Components/typewriter";

// Navbar Logo
import DarkLogo from "../assets/AZN-logo-dark.png";


// Images
import Mobile from "../assets/mobile.png";


// Tile Images 
import ProjectA from "../assets/Projects/Project_A.png";
import ProjectB from "../assets/Projects/Project_B.png";
import ProjectC from "../assets/Projects/Project_C.gif";
import ProjectD from "../assets/Projects/Project_D.png";

// Styled Components

const StyledHeader = styled.header`
background-color: black;
height: 100vh;
`; 

const StyledMobile = styled.div`  
  z-index: 1;
  position: relative;
  // padding-top: 25%;

  img {
      width: 100%;
  }
}
`;

const HeaderBorder = styled.div`
  padding: 15%;
  margin-top: -1%;
  background-color: white;
  `;

const Projects = styled.main`
  padding-bottom: 10%;
  background-color: white;
  
`;

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


function Work(props) {

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  
  const handleClick = e => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);


  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


    const sectionRef = useRef(null);
  
    const intersection = useIntersection(sectionRef, {
      root: null,
      rootMargin: '1200px',
      threshold: 1
    });
  
    const fadeIn = element => {
      gsap.to(element, 1, {
        autoAlpha: 1,
        opacity: 1,
        y: -60,
        ease: "power4.out",
      })
    };
  
    const fadeOut = element => {
      gsap.to(element, 1, {
        autoAlpha: 0,
        ease: "power4.out",
        opacity: 0,
        y: -20,
      })
    };
  
    intersection && intersection.isIntersecting
      ? fadeIn(".fadeIn")
      : fadeOut(".fadeIn");

    return (
    <>
        <StyledHeader>
          <Navigationbar primary activeKey="/" bg="none" variant="dark" Logo={DarkLogo} onClick={handleClick} open={menuOpen} />
           <Container>
            <Row style={{padding:"5%"}}></Row>
            <Row>
              <Col lg={7} md={6}>
                  <h1>Alex Zietara Nicholls.</h1>
                  <Typewriter
                    heading={'I am a'}
                    dataText={["Front End Developer", "UX Designer", "UI Designer"]}
                  />
              </Col>
            </Row>
            <Row>
              <Col lg={5} md={4} sm={6}></Col>
              <Col lg={7} md={8} sm={12}>
                <StyledMobile className="ml-auto" style={{ transform: `translateY(${offsetY * 0.2}px)`}}>
                      <img src={Mobile}/>  
                </StyledMobile> 
              </Col>
            </Row>
          </Container>
        </StyledHeader>
        <SkewBorder/>
        <HeaderBorder/>
          <Projects ref={sectionRef}>
          <Container>
            <Row>
              <Col xl={6} lg={6} md={6}>
                <Link to="/" className="d-block mb-4 h-100">
                  <Tile className="fadeIn">
                      <img className="img-fluid" src={ProjectA}/>
                  </Tile> 
                </Link>
              </Col> 
              <Col xl={6} lg={6} md={6}>
                <Link to="/vintagemovies" className="d-block mb-4 h-100">
                  <Tile className="fadeIn">
                      <img className="img-fluid" src={ProjectB}/>
                  </Tile>
                </Link>
              </Col> 
            </Row>


            <Row>
              <Col xl={6} lg={6} md={6}>
                <a href="#" className="d-block mb-4 h-100">
                  <Tile className="fadeIn">
                      <img className="img-fluid" src={ProjectC}/>
                  </Tile> 
                </a>
              </Col> 
              <Col xl={6} lg={6} md={6}>
                <a href="#" className="d-block mb-4 h-100">
                  <Tile className="fadeIn">
                      <img className="img-fluid" src={ProjectD}/>
                  </Tile>
                </a>
              </Col> 
            </Row>
            </Container>
          </Projects>
        <Footer/>
    </>
    )
}

export default Work;