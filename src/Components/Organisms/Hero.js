import React from 'react'
import styled from "styled-components";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import SocialMedia from '../Molecules/SocialMedia';
import TypeWriter from '../Atoms/TypeWriter';

const StyledHero = styled.div`
  margin-top: -10px;
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  padding-bottom: 5%;
`;

const StyledHeroBorder = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
    height: 50px;
    transform: skewY(-1deg);
    margin-top: -1%;
    position: relative;
`;


const StyledProjectHero = styled.div`
  background: ${(props) => `url(${props.img}) no-repeat center`};
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

function Hero({ project, img}) {
    return (
        <>
            {!project ? (
                <>
                <StyledHero>
                    <Container>
                        <br />
                        <TypeWriter heading={"I am a"} messages={["Front End Developer.", "UX Designer.", "UI Designer."]} />
                        <p>May 2020, I completed a 3 year BSc (Hons) in Web Design and Development course at Southampton Solent University, achieving a first class honours. Since September, Ive taken the opportunity to take on some voluntary work designing websites for small companies; Strike 9 (Young football training academy) and Maverick Motors (Classic Cars Company). I am now looking for an opportunity to build on my knowledge, understanding and skills to gain some experience in the field. I have developed a range of skills within front end development including Sketch, InVision and Hype. I see my future in the design industry and aspire to be a UX/UI designer. However, I am also a competent programmer who is keen to develop my programming skills.</p>
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
    color: " ",
    img: {}
}

Hero.propTypes = {
    project: PropTypes.bool.isRequired,
    color: PropTypes.string,
    img: PropTypes.object
}

export default Hero;
