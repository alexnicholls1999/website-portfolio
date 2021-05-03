import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useLocation from "react-router-dom";
import { useEffect } from 'react';

const StyledForwardButton = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
`;

const StyledForwardButtonLabel = styled.label`
    width: 100%;
    padding-right: 75px;
`;

const StyledArrow = styled.svg`
    height: 30px;
    width: 30px;
    fill: ${({ theme }) => theme.colors.blue};
`;


function ForwardButton({text, pathname}) {

    const onHandleClick = (e) => {
        window.open(pathname);
        e.preventDefault();
    }

    // const onHandleClick = (e) => {
    //     window.open(`${CV}`, '_blank');
    //     e.preventDefault();
    // }

    return (
        <StyledForwardButton onClick={onHandleClick}>
            <StyledForwardButtonLabel>{text}</StyledForwardButtonLabel>
            <StyledArrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/>
            </StyledArrow>
        </StyledForwardButton>
    )
}

ForwardButton.defaultProps = {
    text: "",
    pathname: ""
}

ForwardButton.propTypes = {
    text: PropTypes.string,
    pathname: PropTypes.string
}

export default ForwardButton;
