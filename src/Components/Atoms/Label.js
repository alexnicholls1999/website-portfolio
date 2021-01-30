import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useField } from 'formik';

const StyledLabel = styled.label`
    color: ${({theme}) => theme.colors.white};
    font: ${({shrink}) => shrink ? "0px" : "10px"};

`;

function Label(props) {


    const {label, shrink} = props;

    return (
        <StyledLabel shrink={shrink}>
            {label}
        </StyledLabel>
    )
}

Label.propTypes = {
    label: PropTypes.string.isRequired
}


export default Label
