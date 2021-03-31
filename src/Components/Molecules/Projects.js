import React from 'react'
import { Row, Col } from "react-bootstrap";

import FadeIn from '../../Animations/FadeIn';

import Tile from './../Atoms/Tile';


function Projects({onClickA, onClickB, projectImg, projectImgB}) {

    return (
        <>
            <Row>
                <Col md={6} sm={6}>
                    <FadeIn>
                        <Tile onClick={onClickA}>
                            <img src={projectImg} alt="project"/>
                        </Tile>
                        <br />
                    </FadeIn>
                </Col>
                    
                <Col md={6} sm={6}>
                    <FadeIn>
                        <Tile onClick={onClickB}>
                            <img src={projectImgB} alt="project"/>
                        </Tile>
                    </FadeIn>    
                </Col>
            </Row>
            <br />
        </>
    )
}

export default Projects
