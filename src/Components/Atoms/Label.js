import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useField } from 'formik';

const StyledLabel = styled.label`
    color: ${({theme}) => theme.colors.white};


`;

function Label(props) {


    const {label} = props;

    return (
        <StyledLabel>
            {label}
        </StyledLabel>
    )
}

Label.propTypes = {
    label: PropTypes.string.isRequired
}


export default Label
