import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const ServerError = styled.div`
    position: relative;
    background-color: #CE0000;
    color: ${({theme}) => theme.colors.white};
    margin-bottom: 25px;
    margin-top: -10px;
    text-align: center;
    width: 100%;
`;

function ErrorMessage({children, style, active}) {

    return (
        <ServerError style={style} active={active}>
            {children}
        </ServerError>
    )
}

ErrorMessage.propTypes = {
    active: PropTypes.bool
}


export default ErrorMessage;
