import React, {useState, useRef, useEffect} from 'react';
import {useIntersection, useGetSetState} from "react-use";
import gsap, {TweenLite, Power4} from "gsap";
import styled from "styled-components";
import {useLocation} from "react-router-dom";

import LightLogo from "../assets/AZN-logo-light.png";
import ProfilePicture from "../assets/profile_picture.JPG";

// Components
import Header from "../Components/Header";
import Tile from "../Components/Tile";
import Navbar from "../Components/Navbar";
import { Container , Col, Row } from "react-bootstrap";
import Footer from "../Components/Footer";
import Slider from "../Components/Medium/Slider.js"

const AboutMe = styled.div `

    h1 {
        color: ${({ theme }) => theme.colors.blue};
    }

    p {
        color: ${({ theme }) => theme.colors.blue};
    }

`;

const Profile = styled.div `

    width: 100%;
    position: relative;

    img {
        width: 100%;
        z-index: 1;
        position: relative;
        transform: skew(0.5deg);
    }
    
`;

const BgProfile = styled.div`

   background: linear-gradient(45deg, #25B3F0, #107CDC);
   width: 90%;
   height: 100%;
   margin-top: 5%;
   margin-left: 12%;
   position: absolute;
   transform: skewY(2deg); 

`;

const Icon = styled.div`
    margin: 1%;
    height: 65px;
    width: 65px;

    background-image: url(${props => props.backgroundImage});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

const IconImages = {
    sketch: "https://www.sketch.com/images/pages/press/sketch-press-kit/app-icons/sketch-mac-icon@2x.png",
    invision: "https://cdn.worldvectorlogo.com/logos/invision.svg", 
    figma:"https://cdn.worldvectorlogo.com/logos/figma-1.svg",
    illustrator:"https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc.svg"
}

function About(props) {

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
            <Container>
                <Navbar logo={LightLogo} hamcolor={"#107CDC"} onClick={handleClick} open={menuOpen}/>
                <Row className="p-5">
                    <Col sm="12"></Col>
                </Row>

                <Row>
                    <Col lg="7">
                        <AboutMe>
                            <h1> About Me </h1>
                            <p className="py-1">I am currently an under-graduate student at Southampton Solent University studying for a BSc (Hons) in Web Design and Development and have just successfully completed year 2. Southampton Solent encourages students to seek industry placements and I am looking for an opportunity to consolidate my knowledge and skills and gain work experience in the ﬁeld. My intention is to graduate with both academic and practical skills but also a greater understanding of the industry. I have developed a range of skills within front end development including Sketch, InVision and Hype. I see my future in the design industry and aspire to be a UX/UI designer, however, I am also a competent programmer who is keen to develop my programming skills.</p>
                        </AboutMe>
                    </Col>
                    <Col md="8" lg="5" sm="12">
                        <Profile>
                            <BgProfile/>
                            <img src={ProfilePicture}/>
                        </Profile>
                    </Col>
                </Row>

                <div className="p-5"></div>

                <Row className="justify-content-center"> 
                    <Icon backgroundImage={IconImages.sketch}/>
                    <Icon backgroundImage={IconImages.invision}/>
                    <Icon backgroundImage={IconImages.figma}/>
                    <Icon backgroundImage={IconImages.illustrator}/>
                </Row>
                <Row className="py-5">
                    <p className="text-center" style={{color: "#107CDC"}}> Currently I am at Southampton Solent Unversity studying BSc (Hons) in Web Design and Development. I have just finished my second year achieving 3 As in Interactive Design, Human Computer Interaction Design and Digital Marketing and 3 Cs in Graduate and Professional Development, Web Site Design and Developing for the Internet. I am now planning a ‘gap year’ to gain some industry experience prior to returning to complete my final year with the aim of graduating in the summer of 2021. </p>
                </Row>
            
                <Slider />
            </Container>        
        </>
    )
}

export default About;