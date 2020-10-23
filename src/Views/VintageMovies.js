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


// Images

import MobileTVCover from '../assets/Projects/Vintage Movies/mobile_tv_cover.png';
import VMLogoCropped from '../assets/Projects/Vintage Movies/VM_logo_-_cropped.png';
import HTA from "../assets/Projects/Vintage Movies/HTA.png";
import Wireframes from "../assets/Projects/Vintage Movies/wireframes.png";
import Wireframes_TV from "../assets/Projects/Vintage Movies/wireframes_tv.png";

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
        width: 320px;
    }
`;

const Main = styled.div`


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

                

            </Main>
        </>
    )
}

export default VintageMovies;

