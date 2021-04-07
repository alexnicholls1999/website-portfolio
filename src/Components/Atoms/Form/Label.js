import React from 'react'
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLabel = styled.h5`
    position: absolute;
    top: ${({shrunk}) => (shrunk ? "-10px" : "0px")};
    left: 10px;
    font-family: Arial;
    font-size: ${({ shrunk }) => (shrunk ? "12px" : "15px")};
    transition: 0.3s ease-in;
    color: white;
`;

const StyledErrorLabel = styled.p`
    padding-top: 5px;
    color: red;
    
    p {
        margin: 0;
    }
`;

function Label({text, shrunk, errorLabel, errorMessage}) {
    return (
        <>
            {!errorLabel ? (
                <StyledLabel shrunk={shrunk}>{text}</StyledLabel>
            ) : (
                <StyledErrorLabel>{errorMessage}</StyledErrorLabel>
            )}
        </>
    )
}

Label.defaultProps = {
    shrunk: false,
    error: false,
    text: "",
    errorMessage: ""
}

Label.propTypes = {
    shrunk: PropTypes.bool,
    error: PropTypes.bool,
    text: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired
}

export default Label
