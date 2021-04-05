import React from 'react';
import styled from "styled-components";
import Projects from './../Molecules/Projects';

import ProjectA from "./../../assets/Project_A.png";
import ProjectB from "./../../assets/Project_B.png";
import ProjectC from "./../../assets/Project_C.gif";
import ProjectD from "./../../assets/Project_D.gif";

import useProjects from '../../reacthooks/useProjects';
import Modal from '../Atoms/Modal';
import { Col, Container, Row } from 'react-bootstrap';

const StyledModalWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
`;

function ProjectList() {

    const {state, showSPA, showVintageMovies, showWebco, showStrike9Training} = useProjects();

    return (
        <>
                <Container>
                    <Row>
                        <Col md={6}>
                            <Projects projectImg={ProjectA} onClick={(e) => showSPA(e)}/>
                        </Col>
                        <Col md={6}>
                            <Projects />
                        </Col>
                    </Row>
                </Container>

            <StyledModalWrapper>
                <Modal onClose={showSPA} show={state.spa} >
                    <h2>SPA</h2>
                </Modal>
            </StyledModalWrapper>

        </>
    )
}

export default ProjectList
