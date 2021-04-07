import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";


import Project from '../Components/Molecules/Project';

import ProjectA from '../assets/project-tile-images/Project_A.png';
import ProjectB from '../assets/project-tile-images/Project_B.png';
import ProjectC from '../assets/project-tile-images/Project_C.gif';
import ProjectD from '../assets/project-tile-images/Project_D.gif';
import Button from '../Components/Atoms/Buttons/Button';
import FadeIn from '../Animation/FadeIn';

const StyledWorkWrapper = styled.div`
    h2, p {
        color: white;
    }

    button {
        margin: 0 auto;
        width: 200px;
    }
`;

function Work({showSPA}) {
    return (
        <>
          <StyledWorkWrapper>
            <div className="p-3"></div>
            <Container>
                <Row>
                    <Project projectImg={ProjectA} onClick={(e) => {showSPA(e)}} />

                    <Project projectImg={ProjectB} />    
                </Row>    
                <Row>
                    <Project projectImg={ProjectC} />

                    <Project projectImg={ProjectD} />    
                </Row>   

                <div className="p-3"></div>

                <FadeIn>
                    <Button text="View CV"/>
                </FadeIn>
            </Container>  
                    
          </StyledWorkWrapper>  
        </>
    )
}

Work.defaultProps = {
    showSPA: () => {},

}

Work.propTypes = {
    showSPA: PropTypes.func
}

export default Work;
