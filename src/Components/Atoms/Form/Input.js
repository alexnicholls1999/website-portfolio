import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledInput = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 10px;
    border: none;
    outline: none;
    background: none;
    padding-bottom: .2rem;
    font-size: 1rem;
    color: white;
`;

function Input({inputRef, ...props}) {
    return <StyledInput ref={inputRef} {...props}/>
}


Input.defaultProps = {
    inputRef: {}
}

Input.propTypes = {
    inputRef: PropTypes.object
}


export default Input
