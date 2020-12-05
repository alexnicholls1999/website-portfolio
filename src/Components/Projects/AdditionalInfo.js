import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import styled from 'styled-components';

const StyledLabel = styled.label`
    color: black;
`;

const StyledURL = styled.a`

`;

function Platform(props) {
    const {platformName, platformURL} = props;
    
    return (
        <Row>
          <Col lg={4}>
             <StyledLabel>{platformName}</StyledLabel>
          </Col>  
          <Col lg={8}>
             <StyledURL href={platformURL}>{platformURL}</StyledURL>
          </Col>  
        </Row>
    )
}

function AdditionalInfo() {

    return (
        <Container>
          <Row className="py-5">
            <Col lg={4}>
                <h2>Like to view more information on this project: </h2>
            </Col>
            <Col lg={8}/>
          </Row>  
          <Platform platformName="Behance: " platformURL="https://www.behance.net/gallery/81186753/Vintage-Movies-TV-and-Mobile-App"/>
          <Platform platformName="Medium Blogs: " platformURL="https://medium.com/@azini_76170/vintage-movies-smarttv-and-mobile-clickable-prototype-748abe30ef89"/>
        </Container>
    )
}


export default AdditionalInfo;