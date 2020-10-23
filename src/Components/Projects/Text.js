import React from 'react';
import {Col, Row} from 'react-bootstrap';
import styled from 'styled-components';

const StyledText = styled.div`
    p {
        color: black;
        margin-bottom: 1rem;
    }
    img {
        width: 100%
    }
`;

function Text(props) {

    const {title, text, src, alt} = props;

    return (
        <StyledText>
            <h2>{title}</h2>
            <p>{text}</p>
            <img src={src} alt={alt}/>
        </StyledText>
    )
}

export default Text;