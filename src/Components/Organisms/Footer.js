import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from "styled-components";
import ContactFooter from '../Molecules/Footer/ContactFooter';
import CopyRight from '../Molecules/Footer/CopyRight';
import FooterNav from '../Molecules/Footer/FooterNav';
import SocialMedia from '../Molecules/SocialMedia';

const StyledFooter = styled.footer`
    background-color: black;
    bottom: 0;
    width: 100%;
    padding-top: 5%;
    padding-bottom: 25%;

    @media (min-width: 768px){ 
        padding-bottom: 0;
    }
`;

function Footer() {
    return (
        <StyledFooter>
            <Container>
                <Row>
                    <Col lg={4}>
                        <ContactFooter />
                    </Col>

                    <Col lg={4}>
                        <FooterNav />
                    </Col>
                    
                    <Col lg={4}>  
                        <SocialMedia />
                    </Col>
                </Row>
                <CopyRight />
            </Container>

        </StyledFooter>
    )
}

export default Footer;
