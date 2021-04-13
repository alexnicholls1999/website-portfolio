import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import MindMap from './../assets/webco/Mind-map.png';
import LFLogos from './../assets/webco/low-fidelity.png';
import MFLogos from './../assets/webco/med-fidelity.png';
import HFLogos from './../assets/webco/webco_high_fidelity.png';
import PrimaryLogo from './../assets/webco/Webco_Primary.png';
import SecondaryLogo from './../assets/webco/webco_secondary.png';
import BlackAndWhiteLogo from './../assets/webco/webco_black_white.png';
import VSStyle from './../assets/webco/VS_Webco.png';
import WebcoBanners from './../assets/webco/Webco_Ad_Banners.png';
import WebcoHeader from './../assets/webco/WebCo_Website_Header.png';
import WebcoBusinessCard from './../assets/webco/Business_Mockup_Webco.png';
import WebcoA4 from './../assets/webco/A4_Mockup_Webco.png';

const StyledImage = styled.img`
    width: 100%;
    background: white;
`;

const StyledImageWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    background: white;

    img {
        width: 75%;
        display: flex;
        margin: 0 auto;
    }

`;

function Webco() {
    return (
        <>
            <Container>
                <Row>
                    <h1>Webco Case Study</h1>
                    <p>Webco is a web design company requiring a professional and memorable logo to give the company a unique identity/brand to bring it to market and to support its marketing, growth and development as a leading web design company.</p>
                </Row>
            </Container>
            <Container>
                <Row>
                    <h2>Research</h2>
                    <p>Research focussed on the different types of logos, history surrounding 4 iconic brands (Microsoft, Apple, Cisco and HP), typography, the design process and images associated with other design competitors. It served as a reminder that pictures can come outdated quickly and even where iconic brands have developed, these have been relatively subtle over time. Here is some brainstorming of research on the logo.</p>
                </Row>
            </Container>

            <StyledImage src={MindMap} alt="MindMap" />
            
            <div className="p-3"></div>
            
            <Container>
                <Row>
                    <h2>Low Fidelity</h2>
                </Row>
            </Container>

            <StyledImage src={LFLogos} alt="LowLogo" />
            
            <div className="p-3"></div>
            
            <Container>
                <Row>
                    <h2>Medium Fidelity</h2>
                </Row>
            </Container>

            <StyledImage src={MFLogos} alt="MediumLogo" />
            
            <div className="p-3"></div>
            
            <Container>
                <Row>
                    <h2>High Fidelity</h2>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={12} md={8} sm={4}>
                        <StyledImageWrapper>
                            <img src={HFLogos} alt="MediumLogo" />
                        </StyledImageWrapper>
                    </Col>
                </Row>
                <Row>
                    <p style={{paddingTop: "15px", textAlign: "center", width: "75%", margin: "0 auto"}}>This is a final design print of the Webco Logo. Using Adobe Illustrator a 6pt grid and guidelines where used to shape and create the new spider logo. Below is the logo in three different colours: Primary, Secondary and Black and White.</p>
                </Row>
            </Container>

            <div className="p-3"></div>

            <Container>
                <Row>
                    <Col lg={4}>
                        <StyledImage src={PrimaryLogo} />
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={7}>
                        <h2 class="text-right ml-auto">Primary Colour</h2>
                        <p class="py-3 text-right ml-auto">Here is the coloured version (final design) of the Webco Logo that was done as a A5 size. This is white color with a cyan blue background.</p>
                    </Col>
                </Row>

                <div className="p-3"></div>

                <Row>
                    <Col lg={7}>
                      <h2 class="text-left mr-auto">Secondary Colour</h2>
                      <p class="py-3 text-left mr-auto">Here is the coloured version (final design) of the Webco Logo that was done as a A5 size. This is blue color with a white background.</p>
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={4}>
                        <StyledImage src={SecondaryLogo} />
                    </Col>
                </Row>

                <div className="p-3"></div>

                <Row>
                    <Col lg={4}>
                        <StyledImage src={BlackAndWhiteLogo} />
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={7}>
                        <h2 class="text-right ml-auto">Black & White Colour</h2>
                        <p class="py-3 text-right ml-auto">Here is the black and white version (final design) of the Webco Logo that was done as a A5 size. This is black color with a white background.</p>
                    </Col>
                </Row>

                <div className="p-3"></div>

                <Row>
                    <h2>Visual Style Guide</h2>
                    <p>Here is the visual style guide which represents all the different types of styles used within the logos design. It includes the logo, colour scheme, rules for present and future logos and font scheme used within the logo.</p>
                </Row>

                <Col lg={12} md={8} sm={4}>
                    <StyledImage src={VSStyle} alt="Styleguide"/>
                </Col>
            </Container> 

            <div className="p-3"></div>

            <Container>
                <Row>
                    <h2>Website Ad Banners</h2>
                </Row>

                <Col lg={12} md={8} sm={4}>
                    <StyledImage src={WebcoBanners} alt="WebcoBanners"/>
                </Col>

                <div className="p-3"></div>

                <Row>
                    <p>Here is five advert banners for the organisation they include a desktop and mobile leaderboard, skyscraper, medium and large square. The banners uses our logo at the edge of the banner with a matte black and white background and two blue strips. The ad banners represent advertising information to allow us to attract new customers on other websites.</p>
                </Row>

                {/* Website Header */}

                <Row>
                    <h2>Website Header</h2>
                </Row>

                <Col lg={12} md={8} sm={4}>
                    <StyledImage src={WebcoHeader} alt="WebcoBanners"/>
                </Col>

                <div className="p-3"></div>

                <Row>
                    <p>Webco Website header uses a black background with the logo in the left corner. The height of the header matches the height of the logo. This gives it a better look and prevents the logo from being squashed/cramped into the header. The navigation bar uses Aldrich font and dispayed in white. Each tab is spaced out evenly to give it a more aesthetic and clean look.</p>
                </Row>

                {/* Website Business Cards */}

                <Row>
                    <h2>Website Business Cards</h2>
                </Row>

                <Col lg={12} md={8} sm={4}>
                    <StyledImage src={WebcoBusinessCard} alt="WebcoBanners"/>
                </Col>

                <div className="p-3"></div>

                <Row>
                    <p>Here is the business logo card which represents all the companies information. The information included is all the contact information: my name, our website, my email and organisation telephone number.</p>
                </Row>

                {/* Website A4 Card */}

                <Row>
                    <h2>Website A4 Page</h2>
                </Row>

                <Col lg={12} md={8} sm={4}>
                    <StyledImage src={WebcoA4} alt="WebcoBanners"/>
                </Col>

                <div className="p-3"></div>

                <Row>
                    <p>The A4 header and footer. At the top right hand corner of the header, the WebCo Logo is represented. At the bottom/footer has page numbers and company name. The page number is displayed at the bottom left corners of the footer in Aldrich black font.</p>
                </Row>

            </Container>           

        </>
    )
}

export default Webco;
