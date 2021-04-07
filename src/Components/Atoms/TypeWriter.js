import React from 'react';
import PropTypes from "prop-types";
import useType from '../../react-hooks/useType';


function TypeWriter({messages, heading}) {

    const {state} = useType(messages);

    return (
        <h3>
            {heading}&nbsp;
            <span>{state.text}</span>
        </h3>
    )
}

TypeWriter.defaultProps = {
    messages: [],
    heading: ""
}

TypeWriter.propTypes = {
    messages: PropTypes.array.isRequired,
    heading: PropTypes.string.isRequired
}

export default TypeWriter
