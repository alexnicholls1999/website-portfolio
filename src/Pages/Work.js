import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";


import Project from '../Components/Molecules/Project';

import ProjectA from '../assets/project-tile-images/Project_A.png';
import ProjectB from '../assets/project-tile-images/Project_B.png';
import ProjectC from '../assets/project-tile-images/Project_C.mp4';
import ProjectD from '../assets/project-tile-images/Project_D.mp4';

import CV from '../assets/My_CV_2020.pdf';

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

function Work({showVintageMovies, showWebco, showYourGym, showDementia}) {

    const handleOpenPDF = (e) => {
        window.open(`${CV}`, '_blank');
        e.preventDefault();
    }

    return (
        <>
          <StyledWorkWrapper>
            <div className="p-3"></div>
            <Container>
                <Row>
                    <Project projectSrc={ProjectA} onClick={(e) => {showDementia(e)}} />
                    <Project projectSrc={ProjectB} onClick={(e) => {showVintageMovies(e)}} />   
                </Row>    
                <Row>
                    <Project animation projectSrc={ProjectC} onClick={(e) => {showWebco(e)}}/> 
                    <Project animation projectSrc={ProjectD} onClick={(e) => {showYourGym(e)}} />
                </Row>   

                <div className="p-3"></div>

                <FadeIn>
                    <Button text="View CV" onClick={handleOpenPDF}/>
                </FadeIn>
            </Container>
                    
          </StyledWorkWrapper>  
        </>
    )
}

Work.defaultProps = {
    showVintageMovies: () => {},
    showWebco: () => {},
    showYourGym: () => {},
    showDementia: () => {}
}

Work.propTypes = {
    showVintageMovies: PropTypes.func,
    showWebco: PropTypes.func,
    showYourGym: PropTypes.func,
    showDementia: PropTypes.func
}

export default Work;
