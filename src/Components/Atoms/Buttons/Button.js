import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const StyledButton = styled.button`
    height: 45px;
    background: ${({ theme }) => theme.colors.blue};
    border-radius: 7px;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    width: 100%;
    font-size: 15px;
    font-weight: 700;

    &:hover {
        box-shadow: 0px 0px 17px 2px ${({ theme }) => theme.colors.blue};
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
  box-shadow: 0px 3px 30px 0px ${({ theme }) => theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: 700;

  @media (min-width: 768px) {
    display: none;
  }
`;

function Button({onClick, menuButton , mailToButton, mailto, text, style}) {

    const handleContactClick = (e) => {
        window.location = mailto;
        e.preventDefault();
    }
    
    return (
        <>


            {mailToButton ? (
                <StyledButton onClick={handleContactClick}>Contact</StyledButton>
            ) : (
                <>
                    {menuButton ? (
                        <StyledActionBtn onClick={onClick}>MENU</StyledActionBtn> 
                    ) : (
                        <StyledButton style={style} onClick={onClick}>{text}</StyledButton>
                    )}
                </>
            )}
        </>
    )
}

Button.defaultProps = {
    onClick: () => {},
    menuButton: false,
    mailToButton: false,
    text: "",
    mailto: ""
}

Button.propTypes = {
    onClick: PropTypes.func,
    menuButton: PropTypes.bool,
    mailToButton: PropTypes.bool,
    text: PropTypes.string.isRequired,
    mailto: PropTypes.string.isRequired
}

export default Button
