import React from 'react'
import { Row, Col } from "react-bootstrap";

import FadeIn from '../../Animations/FadeIn';

import Tile from './../Atoms/Tile';


function Projects({onClick, projectImg}) {

    return (
        <>
            <FadeIn>
                <Tile onClick={onClick}>
                    <img src={projectImg} alt="project"/>
                </Tile>
            </FadeIn>   
        </>
    )
}

export default Projects
