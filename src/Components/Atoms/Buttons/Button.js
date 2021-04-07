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

const StyledActionBtn = styled.div`
  position: fixed;
  bottom: 80px;
  right: 40px;
  height: 48px;
  width: 150px;
  border-radius: 5px;
  background: #107cdc;
  box-shadow: 0px 3px 30px 0px #107cdc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 15px;
  font-weight: 700;

  @media (min-width: 768px) {
    display: none;
  }
`;

function Button({onClick, menuButton , text}) {
    return (
        <>
            {menuButton ? (
                <StyledActionBtn onClick={onClick}>MENU</StyledActionBtn> 
            ) : (
                <StyledButton onClick={onClick}>{text}</StyledButton>
            )}
        </>
    )
}

Button.defaultProps = {
    onClick: () => {},
    menuButton: false,
    text: ""
}

Button.propTypes = {
    onClick: PropTypes.func,
    menuButton: PropTypes.bool,
    text: PropTypes.string.isRequired
}

export default Button
