import React from 'react'
import styled from "styled-components";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import SocialMedia from '../Molecules/SocialMedia';

const StyledHero = styled.div`
  margin-top: -10px;
  background-color: black;
  color: white;
  padding-bottom: 5%;
`;

const StyledHeroBorder = styled.div`
    background-color: black;
    height: 50px;
    transform: skewY(-1deg);
    margin-top: -1%;
    position: relative;
`;


const StyledProjectHero = styled.div`
  background: ${(props) => `url(${props.img}) no-repeat center`};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

function Hero({ project, img }) {
    return (
        <>
            {!project ? (
                <>
                <StyledHero>
                    <Container>
                        <br />
                        <h3>I am a UX Designer.</h3>
                        <p>I am currently an under-graduate student at Southampton Solent University studying for a BSc (Hons) in Web Design and Development and have just successfully completed year 2. Southampton Solent encourages students to seek industry placements and I am looking for an opportunity to consolidate my knowledge and skills and gain work experience in the ﬁeld. My intention is to graduate with both academic and practical skills but also a greater understanding of the industry. I have developed a range of skills within front end development including Sketch, InVision and Hype. I see my future in the design industry and aspire to be a UX/UI designer, however, I am also a competent programmer who is keen to develop my programming skills.</p>
                        <div className="p-2"></div>
                        <SocialMedia />
                    </Container>
                </StyledHero>
                <StyledHeroBorder />
                </>
            ) : (
                <StyledProjectHero img={img}/>
            )}
        </>
    )
}

Hero.defaultProps = {
    project: false,
    img: " "
}

Hero.propTypes = {
    project: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired
}

export default Hero;
