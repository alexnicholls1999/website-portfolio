import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from "react-bootstrap";

// Images

import HTA from "./../assets/vintagemovies/HTA.png";
import WireframesMobile from "./../assets/vintagemovies/wireframes.png";
import WireframesTV from "./../assets/vintagemovies/wireframes_tv.png";


const StyledHTA = styled.img`
  width: 100%;
`;

const StyledWireframes = styled.img`
  width: 100%;
`;

const ColorScheme = styled.div`
    padding-top: 5%;

    h2 {
        color: white;
    }
`;

const Pallete = styled.div`
    padding: 7.5px;
`;

const Color = styled.div`
    height: 140px;
    width: 140px;
    margin: 0 auto;
    background-color: ${({color}) => (color)};
    box-shadow: 0px 0px 8px 2px ${({color}) => (color)};
    border-radius: 6px;
`;

const ColorText = styled.div`
    color: ${({color}) => (color)};
    text-align: center;
    height: 100%;
    padding: 10%;
    align-items: middle;
`;



function VintageMovies() {
    return (
        <>
           <Container>
                <Row>
                  <h1>Vintage Movies: SmartTV and Mobile App Clickable Prototype</h1>
                  <p>Vintage Movies is a copyright free online streaming company and appointed me a UX/UI designer, to create a new logo and modern design concept for Samsung SmartTV and Apple's iPhone. This blog will cover the design process taken, explaining and walking through each stage from research and competitive analysis to designs and user feedback.</p>
                </Row>  
                <Row>
                  <h2>User Stories</h2>
                  <p>User stories were used to gain user research to help Vintage Movies have a better understanding on what features and user needs may impact on our design decisions and rationale. </p>
                  <p>Epic 1. As a user I want to be able to have a wide range of Movies/TV  shows to choose from.</p>
                  <ul>
                      <li>User Story A. As a user I want to be recommended Movies/TV shows based on interest </li>
                      <li>User Story B. As a user I want to be able to see the latest Movies/TV shows</li>
                      <li>User Story C. As a user I want to be able to see most popular Movies/TV shows</li>
                  </ul>
                  <p>Epic 2  - As a user I want to be able to find a specific film or TV show</p>
                  <ul>
                        <li>User Story A. As a user I want to able to search for a Film or TV Show </li>
                        <li>User Story B. As a user I want to be able to find a Film or TV Show based from an A to Z list</li>
                        <li>User Story C. As a user I want to be able to find a Film or TV Show via genre</li>
                  </ul>
                </Row>  
           </Container>
           <Container>
             <Row>
               <h2>Hierachal Task Analysis</h2>
             </Row>
           </Container>

           <StyledHTA src={HTA} alt="hierachal-task-analysis"/>

           <div className="p-3"></div>
           
           <Container>
             <Row>
                <h2>Wireframes</h2>
             </Row>
           </Container>

           <StyledWireframes src={WireframesMobile}/>

           <div className="p-1"></div>

           <StyledWireframes src={WireframesTV}/>

           <ColorScheme>
              <Container>
                <Row>
                    <h2>Color Scheme</h2>
                </Row>
                <Row className="justify-content-center">
                    <Pallete>
                        <Color color="#2E2E2E">
                            <ColorText color="white">
                                <p>#2E2E2E</p>
                                <p>RGB (255, 255, 255) </p>
                            </ColorText>
                        </Color>
                    </Pallete>
                    <Pallete>
                        <Color color="#FFFFFF">
                            <ColorText color="black">
                                <p>#2E2E2E</p>
                                <p>RGB (255, 255, 255) </p>
                            </ColorText>
                        </Color>
                    </Pallete>
                    <Pallete>
                        <Color color="#0B89F5">
                            <ColorText color="white">
                                <p>#2E2E2E</p>
                                <p>RGB (255, 255, 255) </p>
                            </ColorText>
                        </Color>
                    </Pallete>
                    <Pallete>
                        <Color color="#000000">
                            <ColorText color="white">
                                <p>#2E2E2E</p>
                                <p>RGB (255, 255, 255) </p>
                            </ColorText>
                        </Color>
                    </Pallete>
                </Row>
              </Container>
              <Container>
                  <Row>
                      <h2>Typography</h2>
                  </Row>
                  <Row>
                      <Col lg={6}>
                          <h3>Font Styles</h3>
                          <div>
                              <label>Header 1</label>
                              <h1>Header 1</h1>
                              <label>Header 2</label>
                              <h2>Header 2</h2>
                              <label>Header 3</label>
                              <h3>Header 3</h3>
                              <label>Hyperlink Style</label><br />
                              <a href="#">HyperLink</a>
                          </div>
                      </Col>
                      <Col lg={6}>
                        <h3>Paragraph</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, in voluptas eum explicabo laboriosam dignissimos voluptatibus doloribus praesentium quos dolore.</p>
                      </Col>
                  </Row>
                  <div className="p-3"></div>
                  <Row>
                      <Col lg={6}>
                        <h3>Number List</h3>
                        <ol>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, aut.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, aut.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, aut.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, aut.</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, aut.</li>
                        </ol>
                      </Col>
                      <Col lg={6}>
                        <h3>Bullet Point</h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dicta?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dicta?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dicta?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dicta?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dicta?</li>
                        </ul>
                      </Col>
                  </Row>
              </Container>
           </ColorScheme>
        </>
    )
}

export default VintageMovies
