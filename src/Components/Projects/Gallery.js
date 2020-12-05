import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import styled from 'styled-components';

const StyledTitle = styled.h2`
    text-align: right;

`;

const StyledText = styled.div`
    p {
        color: black;
        margin-bottom: 1rem;
    }
    img {
        width: 100%
    }
`;

const Image = styled.img`
    width: 100%;
`;

function Gallery(props) {

    const {title, lg, md, sm, ImageClassName, titleClassName, imageA, imageB, imageC, alt} = props;

    return (
        <Container>
            <Row className="p-5">
                <StyledTitle className={`${titleClassName}`}>{title}</StyledTitle>
            </Row>
            <Row className="p-5">
                <Col className="p-5" lg={lg} md={md}>
                    <Image src={imageA} alt=""/>
                </Col>
                <Col className="p-5" lg={lg} md={md}>
                    <Image src={imageB} alt=""/>
                </Col>
                <Col className="p-5" lg={lg} md={md}>
                    <Image src={imageC} alt=""/>
                </Col>
            </Row>
        </Container>
    )
}

export default Gallery;