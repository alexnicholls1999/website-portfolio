import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';

import yourGymWork1 from './../assets/yourGym/your-gym-work1.png';
import yourGymWork2 from './../assets/yourGym/your-gym-work2.png';

const StyledImage = styled.img`
    width: 100%;
    background: white;
`;

function YourGym() {
    return (
        <>
            <Container>
                <div className="p-5"></div>
                <Row>
                    <StyledImage src={yourGymWork1} /> 
                </Row>
                <div className="p-5"></div>
                <Row>
                    <StyledImage src={yourGymWork2} /> 
                </Row>
            </Container>
        </>
    )
}

export default YourGym;
