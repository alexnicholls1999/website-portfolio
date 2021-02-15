import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledErrorLabel = styled.p`
    color: red;


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
