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


// Images

import MobileTVCover from '../assets/Projects/Vintage Movies/mobile_tv_cover.png';
import VMLogoCropped from '../assets/Projects/Vintage Movies/VM_logo_-_cropped.png';
import HTA from "../assets/Projects/Vintage Movies/HTA.png";
import Wireframes from "../assets/Projects/Vintage Movies/wireframes.png";
import Wireframes_TV from "../assets/Projects/Vintage Movies/wireframes_tv.png";
import VM_Logo from "../assets/Projects/Vintage Movies/vintage_movies_logo.png";
import VM_Logo_Fib from "../assets/Projects/Vintage Movies/Vintage_Movies_Fibonacci_Sequence.png";
import Mobile1 from "../assets/Projects/Vintage Movies/mobile1.png";
import Mobile2 from "../assets/Projects/Vintage Movies/mobile2.png";
import Mobile3 from "../assets/Projects/Vintage Movies/mobile3.png";
import LoginPageTV from "../assets/Projects/Vintage Movies/Login_Page_samsung_d8000_front.png";
import VMPhone from "../assets/Projects/Vintage Movies/phone_vm.png";
import TVMobile from "../assets/Projects/Vintage Movies/tv_mobile.png";

// Navbar Logo
import DarkLogo from "../assets/AZN-logo-dark.png";



const StyledVMHeader = styled.header`
    height: 100vh;
    background-color: #1f1f1f;
`;

const StyledWallpaper = styled.div`
    img {
        width: 100%;
    }
`;

const VMCropped = styled.div`
    bottom: 0;
    position: absolute;

    img {
        top: 0;
        position: relative;
        width: 100%;
    }
`;

const Main = styled.div`

    background-color: white;

`;

const Typography = styled.div`

`;

const FontStyles = styled.div`

`;

function VintageMovies() {

    const [menuOpen, setMenuOpen] = useState(false);

    const location = useLocation();
    
    const handleClick = e => {
      setMenuOpen(!menuOpen);
    };
  
    useEffect(() => {
      setMenuOpen(false);
    }, [location]);

    const data = [{"userstory": "User Story A. As a user I want to be recommended Movies/TV shows based on interest"}, {"userstory":"User Story B. As a user I want to be able to see the latest Movies/TV shows"}, {"userstory" : "User Story C. As a user I want to be able to see most popular Movies/TV shows"}];


    return (
        <>
            <StyledVMHeader>
                <Navbar primary bg="none" variant="dark" Logo={DarkLogo} onClick={handleClick} open={menuOpen} />
                <Container>
                    <Row className="p-5"/>
                    <Row className="justify-content-center">
                        <Col lg={9}>
                            <StyledWallpaper>
                                <img src={MobileTVCover}/>
                            </StyledWallpaper>
                        </Col>
                    </Row>
                </Container>
                <VMCropped>
                    <img src={VMLogoCropped}/>
                </VMCropped>
            </StyledVMHeader>
            <Main>
                <Container>            
                    <Row className="p-5">
                        <Title title="Vintage Movies: SmartTV and Mobile App Clickable Prototype" description="Vintage Movies is a copyright free online streaming company and appointed me a UX/UI designer, to create a new logo and modern design concept for Samsung SmartTV and Apple's iPhone. This blog will cover the design process taken, explaining and walking through each stage from research and competitive analysis to designs and user feedback."/>
                    </Row>
                    <Row className="p-5">
                        <Text title="User Stories" text="User stories were used to gain user research to help Vintage Movies have a better understanding on what features and user needs may impact on our design decisions and rationale."/>
                        <BulletPoint text="Epic 1. As a user I want to be able to have a wide range of Movies/TV  shows to choose from." data={data}/>
                        <BulletPoint text="Epic 2. As a user I want to be able to have a wide range of Movies/TV  shows to choose from." data={data}/>
                    </Row>                    
                </Container>
                
                <Container>
                    <Row className="p-5">
                        <Text title="Hierachal Task Analysis"/>
                    </Row>
                </Container>
                <Wallpaper src={HTA}/>

                <Container>
                    <Row className="p-5">
                        <Text title="Wireframes"/>
                    </Row>
                </Container>
                <Wallpaper src={Wireframes}/>
                <Wallpaper src={Wireframes_TV}/>

                <ColorScheme />

                <Typography>
                    <Container>
                        <Row className="p-5">
                            <h2>Typography</h2>
                        </Row>
                        <Row className="p-5">
                            <Col lg={6}>
                                <h3>Font Styles</h3>
                                <FontStyles>
                                    <label>Header 1</label>
                                    <h1>Header 1</h1>
                                    <label>Header 2</label>
                                    <h2>Header 2</h2>
                                    <label>Header 3</label>
                                    <h3>Header 3</h3>
                                    <label>Hyperlink Style</label><br/>
                                    <a href="#">Hyperlink</a>
                                </FontStyles>

                            </Col>
                            <Col lg={6}>
                                <h3>Paragraph</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos laboriosam eos minima consectetur nemo labore adipisci perspiciatis eius fuga id?</p>
                            </Col>
                        </Row>
                        <Row className="p-5">
                            <Col lg={6}>
                                <h3>Numbered List</h3>
                                <BulletPoint data={data}/>
                            </Col>
                            <Col lg={6}>
                                <h3>BulletPoint List</h3>
                                <BulletPoint data={data}/>
                            </Col>
                        </Row>
                    </Container>
                </Typography>
                
                <Container>
                    <Row className="p-5">
                        <Text title="Logo"/>
                    </Row>
                    <Row className="p-5 justify-content-center">
                        <Text src={VM_Logo}/>
                    </Row>
                    <Row className="p-5 justify-content-center">
                        <Text src={VM_Logo_Fib}/>
                    </Row>
                </Container>

                <Gallery 
                 title="Watch on the go with your mobile"
                 lg={4}
                 md={4}
                 imageA={Mobile1}
                 imageB={Mobile2}
                 imageC={Mobile3}
                />
                
                <Gallery
                    title="Watch through the comfort of your home"
                    titleClassName="ml-auto"
                    lg={12}
                    md={10}
                    imageA={LoginPageTV}
                />

                <Section title="Find your favourite Films and TV Shows" text="Browse all the old Films or TV Shows you love to watch. Our search system provides you a range of different options to do this." imglg={6} image={VMPhone} imageClassName="w-75"/>

                <Section title="Continue" text="Fed up of having to forward a movie or tv show to where you left off. Unlike our competitors, Vintage Movies provides a continue watching system to allow users to resume from the last watch point." imglg={12} image={TVMobile} imageClassName="p-5 w-100"/>

                <AdditionalInfo />

                <div className="p-5"></div>
           </Main>
           <Footer/>
        </>
    )
}

export default VintageMovies;

