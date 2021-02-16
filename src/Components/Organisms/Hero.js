import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import SocialMedia from '../Molecules/SocialMedia';
import Typewriter from './../Atoms/TypeWriter';

const HeroWrapper = styled.div`
  width: 100%;
  position: relative;
  background: black;
  // padding-bottom: 50px;
  clip-path: polygon(0px 0px, 100% 0px, 100% 90%, 0px 100%);
  padding-bottom: 35%;

  @media (min-width: 768px){ 
    padding-bottom: 5%;
  }

`;

const AboutMe = styled.div`
  padding: 15px;

  h3 {
      margin-bottom: 10px;
  }
`;

function Hero() {
    return (
        <HeroWrapper>
            <Container>
                <AboutMe>
                  <Typewriter
                    heading={"I am a"}
                    messages={["Front End Developer.", "UX Designer.", "UI Designer."]}
                  />
                    <p>I am currently an under-graduate student at Southampton Solent University studying for a BSc (Hons) in Web Design and Development and have just successfully completed year 2. Southampton Solent encourages students to seek industry placements and I am looking for an opportunity to consolidate my knowledge and skills and gain work experience in the ﬁeld. My intention is to graduate with both academic and practical skills but also a greater understanding of the industry. I have developed a range of skills within front end development including Sketch, InVision and Hype. I see my future in the design industry and aspire to be a UX/UI designer, however, I am also a competent programmer who is keen to develop my programming skills.</p>
                </AboutMe>
                <SocialMedia/>
                
            </Container>
        </HeroWrapper>
    )
}

export default Hero
