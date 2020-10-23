import React from 'react';
import {Col, Row} from 'react-bootstrap';
import styled from 'styled-components';

const StyledText = styled.div`
    p {
        color: black;
    }
`;

function Text(props) {

    const {title, text, img} = props;

    return (
        <StyledText>
            <h2>{title}</h2>
            <p>{text}</p>
            <img>{img}</img>
        </StyledText>
    )
}

export default Text;