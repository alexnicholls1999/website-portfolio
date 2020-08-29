import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Container , Col, Row } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faInstagram, faDribbble} from '@fortawesome/free-brands-svg-icons'

const SocialMedia = () => (
    <>
        <StyledSocialMedia>
            <FontAwesomeIcon className="px-2" size="3x" icon={faLinkedin} />
            <FontAwesomeIcon className="px-2" size="3x" icon={faInstagram} />
            <FontAwesomeIcon className="px-2" size="3x" icon={faDribbble} />
        </StyledSocialMedia>
    </>
)

const StyledFooterBorder = styled.div`
    padding: 5%;
    background-color: white;
    z-index: 1;
    position: relative;
    margin-bottom: 445px;
    margin-top: -2%;
    height: 50px;
    transform: skewY(-1deg);
`;


const StyledFooter = styled.footer`
    background-color: #107CDC;
    color: white;
    height: 480px;
    bottom: 0;
    position: fixed;
    width: 100%;
    z-index: -1;
`;

const ContactInfo = styled.div`

    padding-top: 10%;
    text-align: center;

`;

const Location = styled.div`


`;

const StyledSocialMedia = styled.div`

    text-align: center;
    padding: 0;

    @media (min-width: 750px) {
        padding: 35px;
    }

`;

const CopyRight = styled.div `

    text-align: center;

`;

function Footer() {

    const [year, setYear] = useState();

    const getYear = () => setYear(new Date().getFullYear())

    useEffect(() => {
        getYear();
    }, [])

    return (
        <>
          <StyledFooterBorder/>
          <StyledFooter>
            <Container>
                <Row className="p-5">
                    <Col lg={4}>
                        <ContactInfo>
                            <p>azini@live.co.uk</p>
                            <p>07904221801</p>   
                        </ContactInfo>
                    </Col>
                    <Col lg={4}>
                        <Location className="py-5 text-center">
                            <p>Chichester, West Sussex</p>  
                        </Location>
                    </Col>
                    <Col lg={4}>
                        <SocialMedia/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <CopyRight>
                            <p> Copyright © {year} - Alexander Zietara Nicholls </p>
                        </CopyRight>
                    </Col>
                </Row>
            </Container>
          </StyledFooter>
        </>
    )
}

export default Footer;