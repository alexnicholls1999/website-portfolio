import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import styled from 'styled-components';

const StyledText = styled.p`
    color: black;
`;

function Section(props) {

    const {rowclassName, title, textlg,text, imglg, imageClassName, image, alt} = props;

    return (
        <Container>
          <Row className={`${rowclassName}`}>
            <Col lg={4}>
                <h2>{title}</h2>
            </Col>
            <Col lg={6}/>
          </Row>  
          <Row className={`${rowclassName}`}>
            <Col lg={textlg}>
                <StyledText>{text}</StyledText>
            </Col>
            <Col lg={imglg}>
                <img className={`${imageClassName}`} src={image} alt={alt}/>
            </Col>
          </Row>
        </Container>
    )
}


export default Section;