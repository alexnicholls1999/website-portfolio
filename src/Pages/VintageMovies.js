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
              
           </ColorScheme>
        </>
    )
}

export default VintageMovies
