import React from 'react'
import styled from "styled-components";
import useFadeIn from '../reacthooks/useFadeIn';

const StyledFadeIn = styled.div`
    opacity: ${({active}) => (active ? "1" : "0")};
    transform: ${({active}) => (active ? "none" : "translateY(20vh)")};
    visibilty: ${({active}) => (active ? "visible" : "hidden")};
    transition: opacity 1200ms ease-out, transform 600ms ease-out, visiblity 1200ms ease-out;
    will-change: opacity, transform, visibility;
`;

function FadeIn({ children }) {

    const { isVisible, domRef } = useFadeIn(); 

    return (
        <StyledFadeIn active={isVisible} ref={domRef}>
            {children}
        </StyledFadeIn>    
    )
}

export default FadeIn
