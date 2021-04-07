import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
    height: 45px;
    background: #107CDC;
    border-radius: 7px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    width: 100%;
    font-size: 15px;
    font-weight: 700;

    &:hover {
        box-shadow: 0px 0px 17px 2px #107CDC;
        transform: scale(1.025);
        transition: 0.5s ease;
    }
`;

function Button({onClick, text}) {
    return <StyledButton onClick={onClick}>{text}</StyledButton>
}

Button.defaultProps = {
    onClick: () => {}
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
}

export default Button
