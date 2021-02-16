import React from 'react'
import styled from 'styled-components';
import Tile from './../Atoms/Tile';
import { Row, Col } from "react-bootstrap";


function Projects(props) {

    const {projectImg, projectImgB, projectAlt} = props;

    return (
        <>
            <Row>
                <Col xl={6} lg={6} md={6}>
                    <Tile>
                        <img src={projectImg} alt={projectAlt}/>
                    </Tile>
                    <br />
                </Col>
                <Col xl={6} lg={6} md={6}>
                    <Tile>
                        <img src={projectImgB} alt={projectAlt}/>
                    </Tile>
                </Col>
            </Row>
            <br/>
        </>
    )
}

export default Projects
