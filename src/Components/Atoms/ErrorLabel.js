import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledErrorLabel = styled.p`
    padding-top: 5px;
    color: red;
    opacity: 0;

`;

function ErrorLabel({errorMessage}) {
    
    return <StyledErrorLabel>{errorMessage}</StyledErrorLabel>
}

ErrorLabel.defaultProps = {
    errorMessage: ' '
}

ErrorLabel.propTypes = {
    errorMessage: PropTypes.string.isRequired
}

export default ErrorLabel;
