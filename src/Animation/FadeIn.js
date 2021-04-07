import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useFadeIn from '../react-hooks/useFadeIn';

const StyledFadeIn = styled.div`
  opacity: ${({ active }) => (active ? "1" : "0")};
  transform: ${({ active }) => (active ? "none" : "translateY(20vh)")};
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  transition: opacity 1200ms ease-out, transform 500ms ease-out,
    visibility 1200ms ease-out;
  will-change: opacity, transform, visibility;
`;

function FadeIn({children}) {
    const {isVisible, domRef} = useFadeIn();

    return (
        <StyledFadeIn active={isVisible} ref={domRef}>
            {children}
        </StyledFadeIn>
    )
}

FadeIn.defaultProps = {
    children: undefined
}

FadeIn.propTypes = {
    children: PropTypes.node.isRequired,
}


export default FadeIn
