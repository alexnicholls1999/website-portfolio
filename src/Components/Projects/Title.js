import React from 'react'
import {Row, Container, Col} from 'react-bootstrap';
import styled from 'styled-components';

const StyledTitle = styled.div`
    h1 {
        color: #107CDC;
    }    

    p {
        color: black; 
    }
`;

const Title = (props) => {
    const {title, description, src, alt} = props;
    
    return (
        <>
            <StyledTitle>
                <h1>{title}</h1>
                <p>{description}</p>
                <img src={src} alt={alt}/>
            </StyledTitle>
        </>
    )
}

export default Title;