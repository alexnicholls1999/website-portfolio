import React from 'react';
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

import Project from '../Components/Molecules/Project';

import ProjectA from '../assets/project-tile-images/Project_A.png';
import ProjectB from '../assets/project-tile-images/Project_B.png';
import ProjectC from '../assets/project-tile-images/Project_C.gif';
import ProjectD from '../assets/project-tile-images/Project_D.gif';
import Button from '../Components/Atoms/Form/Button';

const StyledWorkWrapper = styled.div`
    h2, p {
        color: white;
    }

    button {
        margin: 0 auto;
        width: 200px;
    }
`;

function Work() {
    return (
        <>
          <StyledWorkWrapper>
            <div className="p-3"></div>
            <Container>
                <Row>
                    <Project projectImg={ProjectA} />

                    <Project projectImg={ProjectB} />    
                </Row>    
                <Row>
                    <Project projectImg={ProjectC} />

                    <Project projectImg={ProjectD} />    
                </Row>   

                <div className="p-3"></div>

                <Button text="View CV"/>
            </Container>  
                    
          </StyledWorkWrapper>  
        </>
    )
}

export default Work;
