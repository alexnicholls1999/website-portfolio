import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import DesignThinkingModel from "./../assets/dementia/DesignThinkingModel.png";
import LiteratureReview from "./../assets/dementia/LiteratureReview.png";
import Interviews_1to1 from "./../assets/dementia/1to1Interviews.png";

const StyledThinkingModel = styled.img`


`;


function Dementia() {
    return (
        <>
            <Container>
                <Row>
                    <h1>Vintage Movies: SmartTV and Mobile App Clickable Prototype</h1>
                    <p>Vintage Movies is a copyright free online streaming company and appointed me a UX/UI designer, to create a new logo and modern design concept for Samsung SmartTV and Apple's iPhone. This blog will cover the design process taken, explaining and walking through each stage from research and competitive analysis to designs and user feedback.</p>
                </Row>
                <Row>
                    <h2>Design Thinking Model</h2>
                    <p>The Design Thinking Model was used to identify key problems and areas of improvement when designing a website for those with dementia. This was split into the five stages: Empathsise, Define, Ideate, Prototype and Test. </p>
                </Row>
            </Container>

            <StyledThinkingModel src={DesignThinkingModel} alt="Design_Thinking_Model"/>

            <Container>
                    <h2>Empathsise</h2>
                    <p> Empathising consists of identifying problems and complications for those with dementia when using websites. </p>
                    
                    <Row>
                        <Col lg={7}>
                            <h2 class="text-right mr-auto">Literature Review</h2>
                            <p class="py-3 text-right mr-auto">Literature Review provided background research on the topic and highlighted current problems and design suggestions when designing for those with dementia.</p>
                        </Col>
                        <Col lg={1} />
                        <Col lg={4}>
                            <StyledImage src={LiteratureReview} alt="Literature_Review"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <StyledImage src={Interviews_1to1} alt="1_to_1_Interviews"/>
                        </Col>
                        <Col lg={1} />
                        <Col lg={7}>
                            <h2 class="text-right ml-auto">1 to 1 interviews</h2>
                            <p class="py-3 text-right ml-auto">1 to 1 interviews were then conducted using telephone or Zoom (voice communication software) to give a broader aspect on the common problems for those with living with dementia. Consent Forms, 10-point questionnaire and Results Summary were created to approve, collect, and analyse findings.</p>
                        </Col>
                    </Row>
            </Container>

        </>
    )
}

export default Dementia
