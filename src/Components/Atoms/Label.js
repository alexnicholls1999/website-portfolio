import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useField } from 'formik';

const StyledLabel = styled.h5`
    position: absolute;
    top: ${({ shrunk }) => (shrunk ? "-10px" : "0px")};
    left: 10px;
    font-family: "Arial";
    font-size: ${({ shrunk }) => (shrunk ? "12px" : "15px")};
    transition: 0.3s ease-in;
    color: white;
`;

function Label(props) {


    const {text, shrunk} = props;

    return (
        <StyledLabel shrunk={shrunk}>
            {text}
        </StyledLabel>
    )
}

Label.defaultProps = {
    shrunk: false
}

Label.propTypes = {
    label: PropTypes.string.isRequired,
    shrunk: PropTypes.bool
}


export default Label
