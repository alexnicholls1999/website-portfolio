import React from 'react'
import styled from "styled-components";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

const StyledHero = styled.div`
  height: 250px;
  margin-top: -10px;
  background-color: black;
  color: white;
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
                <StyledHero>
                    <Container>
                        <h3>I am a UX Designer.</h3>
                    </Container>
                </StyledHero>
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
