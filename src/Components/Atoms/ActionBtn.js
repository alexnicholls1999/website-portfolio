import React from 'react';
import styled from "styled-components";
import Button from "./Button";

const StyledActionBtnWrapper = styled.div`
    position: fixed;
    z-index: 100;
    bottom: 7.5vh;
    right: 40px;
    height: 48px;
    width: 150px;
    display: flex; 
    align-items: center;
    justify-content: center;


    @media(min-width: 768px){
        display: none;
    }



`;



function ActionBtn({onClick}) {
    return (
    <StyledActionBtnWrapper onClick={onClick}>
        <Button onClick={onClick} text="MENU"/>
    </StyledActionBtnWrapper>
    )
}

export default ActionBtn
