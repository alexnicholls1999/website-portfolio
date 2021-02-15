import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import SocialMedia from '../Molecules/SocialMedia';

const HeroWrapper = styled.div`
  height: 350px;
  width: 100%;
  position: relative;
  background: black;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: inherit;
    z-index: -1;
    bottom: 0;
    transform-origin: right bottom;
    transform: skewY(-3deg);
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
                    <h3>I am a UX Designer</h3>
                    <p>I am currently an under-graduate student at Southampton Solent University studying for a BSc (Hons) in Web Design and Development and have just successfully completed year 2. Southampton Solent encourages students to seek industry placements and I am looking for an opportunity to consolidate my knowledge and skills and gain work experience in the ﬁeld. My intention is to graduate with both academic and practical skills but also a greater understanding of the industry. I have developed a range of skills within front end development including Sketch, InVision and Hype. I see my future in the design industry and aspire to be a UX/UI designer, however, I am also a competent programmer who is keen to develop my programming skills.</p>
                </AboutMe>
                <SocialMedia />
            </Container>
        </HeroWrapper>
    )
}

export default Hero
