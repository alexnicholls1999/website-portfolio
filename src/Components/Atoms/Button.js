import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`

    height: 45px;
    background: ${({theme}) => theme.colors.blue};
    border-radius: 7px;
    color: ${({theme}) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 6%;
    border: none;
    width: 100%;
    font-size: 15px;
    font-weight: 700;
    box-shadow: 0px 0px 17px 2px #107CDC;

`;

function Button(props) {

    const { onClick, text, ...Props } = props;

    return (
        <StyledButton onClick={onClick} {...Props}>
            {text}
        </StyledButton>      
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    onClick: () => {}
}


export default Button
