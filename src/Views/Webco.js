import React, {useState, useEffect} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';


// Components
import Navbar from '../Components/Navbar';
import Title from '../Components/Projects/Title';
import BulletPoint from '../Components/Projects/BulletPoint';
import Text from '../Components/Projects/Text';
import Wallpaper from '../Components/Projects/Wallpaper';
import ColorScheme from '../Components/Projects/ColorScheme';
import Gallery from '../Components/Projects/Gallery';
import Section from '../Components/Projects/Section';
import AdditionalInfo from '../Components/Projects/AdditionalInfo';
import Footer from '../Components/Footer';
import Video from '../Components/Projects/Video';

// Media


import A4Webco from '../assets/Projects/Webco/A4_Mockup_Webco.png';
import LowFidelity from '../assets/Projects/Webco/low-fidelity.png';
import MedFidelity from '../assets/Projects/Webco/med-fidelity.png';
import MindMap from '../assets/Projects/Webco/Mind-map.png';
import VS_Webco from '../assets/Projects/Webco/VS_Webco.png';
import WebcoAdBanner from '../assets/Projects/Webco/Webco_Ad_Banners.png';
import WebcoAnimation from '../assets/Projects/Webco/Webco_Animation_Logo.mp4';
import BlackAndWhite from '../assets/Projects/Webco/webco_black_white.png';
import HighFidelity from '../assets/Projects/Webco/webco_high_fidelity.png';
import PrimaryLogo from '../assets/Projects/Webco/Webco_Primary.png';
import SecondaryLogo from '../assets/Projects/Webco/webco_secondary.png';
import WebcoHeader from '../assets/Projects/Webco/WebCo_Website_Header.png';
import BusinessCard from '../assets/Projects/Webco/Business_Mockup_Webco.png';


// Navbar Logo
import LightLogo from "../assets/AZN-logo-light.png";


const Main = styled.main`
    background-color: ${({ theme }) => theme.colors.white};
    padding-bottom: 10%;
`;



function Webco() {
    const [menuOpen, setMenuOpen] = useState(false);

    const location = useLocation();
    
    const handleClick = e => {
      setMenuOpen(!menuOpen);
    };
  
    useEffect(() => {
      setMenuOpen(false);
    }, [location]);

    return (
        <>
            <Main>
                <Navbar activeKey="/about" bg="none" variant="primary" Logo={LightLogo} onClick={handleClick} open={menuOpen}/>
    
                <Container>
                    <Row className="py-5"/>
                    <Row>
                        <Col lg={12}>
                            <Video video={WebcoAnimation}/>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="p-5">
                        <Title title="Webco Case Study" description="Webco is a web design company requiring a professional and memorable logo to give the company a unique identity/brand to bring it to market and to support its marketing, growth and development as a leading web design company."/>
                    </Row>
                    <Row className="p-5">
                        <Text title="Research" text="Research focussed on the different types of logos, history surrounding 4 iconic brands (Microsoft, Apple, Cisco and HP), typography, the design process and images associated with other design competitors. It served as a reminder that pictures can come outdated quickly and even where iconic brands have developed, these have been relatively subtle over time. Here is some brainstorming of research on the logo."/>
                    </Row>
                </Container>

                <Wallpaper image={MindMap}/>

                <Container>
                    <Row className="p-5">
                        <Text title="Low Fidelity"/>
                    </Row>
                </Container>

                <Wallpaper image={LowFidelity}/>

                <Container>
                    <Row className="p-5">
                        <Text title="Medium Fidelity"/>
                    </Row>
                </Container>

                <Wallpaper image={MedFidelity}/>

                <Container>
                    <Row className="p-5">
                        <Text title="High Fidelity"/>
                    </Row>
                    <Row className="justify-content-center">
                        <Col className="py-2" lg={8} md={4} sm={4}>
                            <img className="w-100" src={HighFidelity}/>
                        </Col> 
                    </Row>
                    <Row className="p-5 text-center">
                        <Text text="This is a final design print of the Webco Logo. Using Adobe Illustrator a 6pt grid and guidelines where used to shape and create the new spider logo. Below is the logo in three different colours; Primary, Secondary and Black and White"/>
                    </Row>
                </Container>

                <Section title="Primary Colour" textlg={8} text="Here is the coloured version (final design) of the Webco Logo that was done as a A5 size. This is white color with a cyan blue background." imglg={4} image={PrimaryLogo} imageClassName="w-75"/>

                <Section rowclassName="flex-row-reverse" title="Secondary Colour" textlg={8} text="Here is the coloured version (final design) of the Webco Logo that was done as a A5 size. This is blue color with a white background." imglg={4} image={SecondaryLogo} imageClassName="w-75"/>

                <Section title="Black And White" textlg={8} text="Here is the black and white version (final design) of the Webco Logo that was done as a A5 size. This is black color with a white background." imglg={4} image={BlackAndWhite} imageClassName="w-75"/>

                <Container>
                    <Row className="p-5">
                        <Text title="Visual Style Guide" text="Here is the visual style guide which represents all the different types of styles used within the logos design. It includes the logo, colour scheme, rules for present and future logos and font scheme used within the logo."/>
                    </Row>
                </Container>

                <Wallpaper image={VS_Webco}/>

                <Container>
                    <Row className="p-5">
                        <Text title="Website Ad Banners"/>
                    </Row>
                </Container>

                <Wallpaper image={WebcoAdBanner}/>

                <Container>
                    <Row className="p-5">
                        <Text text="Here is five advert banners for the organisation they include a desktop and mobile leaderboard, skyscraper, medium and large square. The banners uses our logo at the edge of the banner with a matte black and white background and two blue strips. The ad banners represent advertising information to allow us to attract new customers on other websites."/>
                    </Row>
                </Container>

                <Container>
                    <Row className="p-5">
                        <Text title="Website Header"/>
                    </Row>
                </Container>

                <Wallpaper image={WebcoHeader}/>

                <Container>
                    <Row className="p-5">
                        <Text text="Webco Website header uses a black background with the logo in the left corner. The height of the header matches the height of the logo. This gives it a better look and prevents the logo from being squashed/cramped into the header. The navigation bar uses Aldrich font and dispayed in white. Each tab is spaced out evenly to give it a more aesthetic and clean look."/>
                    </Row>
                </Container>

                <Container>
                    <Row className="p-5">
                        <Text title="Website Business Cards"/>
                    </Row>
                </Container>

                <Wallpaper image={BusinessCard}/>

                <Container>
                    <Row className="p-5">
                        <Text text="The A4 header and footer. At the top right hand corner of the header, the WebCo Logo is represented. At the bottom/footer has page numbers and company name. The page number is displayed at the bottom left corners of the footer in Aldrich black font."/>
                    </Row>
                </Container>

                <AdditionalInfo />

            </Main>

            <Footer/>
        </>
    )
}

export default Webco;