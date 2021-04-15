import React from 'react';
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import ContactFooter from '../Molecules/Footer/ContactFooter';
import FooterNav from '../Molecules/Footer/FooterNav';
import CopyRight from '../Molecules/Footer/CopyRight';
import SocialMedia from '../Molecules/SocialMedia';

const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    bottom: 0;
    width: 100%;
    padding-top: 5%;
    padding-bottom: 25%;

    @media (min-width: 768px) {
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

export default Footer
 