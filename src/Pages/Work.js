import React from 'react';
import styled from 'styled-components';
import ProjectList from "./../Components/Organisms/ProjectList";
import Button from "./../Components/Atoms/Button";
import { Container, Row, Col } from 'react-bootstrap';

const StyledContainer = styled.div`

    button {
        width: 150px;
        margin: 0 auto;
    }

    @media (min-width: 768px) {
        button {
            width: 200px;
        }
    }
`;

function Work() {
    return (
        <StyledContainer>
            <div className="p-5"></div>
            <ProjectList />
            <div className="p-2"></div>
            <Button text="View CV"/>
            <div className="p-5"></div>
        </StyledContainer>
    )
}

export default Work
