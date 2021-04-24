import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import DesignThinkingModel from "./../assets/dementia/DesignThinkingModel.png";
import LiteratureReview from "./../assets/dementia/LiteratureReview.png";
import Interviews_1to1 from "./../assets/dementia/1to1Interviews.png";
import PersonaA from "./../assets/dementia/UserPersonaA.png";
import PersonaB from "./../assets/dementia/UserPersonaB.png";

const StyledThinkingModel = styled.img`
    width: 100%;

`;

const StyledUserPersona = styled.img`
    width: 100%;    

`;

const StyledPrototype = styled.img`
    width: 100%;
`;

const StyledImage = styled.img`
    width: 100%;
`;

function Dementia() {
    return (
        <>
            <Container>
                <Row>
                    <h1>Web Accessibility for those with Early Stage Dementia </h1>
                    <p>This study research’s the challenges faced by those living with dementia when using websites and looks into creating a set of design principles/framework to accommodate their needs using an MVP approach and a robust design methodology. Many websites are aimed towards younger audiences. As dementia is a rapidly growing disease more support is needed for those affected, especially in the future where majority of the world’s population will lean towards an older demographic. Although there are guidelines, these are not always followed, and designers and developers do not always keep ahead of advancements in technology and the costs associated with making adjustments for those with disabilities can be prohibitive.</p>
                </Row>
                <Row>
                    <h2>Design Thinking Model</h2>
                    <p>The Design Thinking Model was used to identify key problems and areas of improvement when designing a website for those with dementia. This was split into the five stages: Empathsise, Define, Ideate, Prototype and Test. </p>
                </Row>
            </Container>

            <StyledThinkingModel src={DesignThinkingModel} alt="Design_Thinking_Model"/>

            <div className="p-4"></div>

            <Container>
                    <Row>
                        <h2>Empathsise</h2>
                        <p> Empathising consists of identifying problems and complications for those with dementia when using websites. </p>
                    </Row>
                    
                    <Row>
                        <Col lg={7}>
                            <h3 class="mr-auto">Literature Review</h3>
                            <p class="py-3 mr-auto">Literature Review provided background research on the topic and highlighted current problems and design suggestions when designing for those with dementia.</p>
                        </Col>
                        <Col lg={1} />
                        <Col lg={4}>
                            <StyledImage src={LiteratureReview} alt="Literature_Review"/>
                        </Col>
                    </Row>

                    <div className="p-3"></div>

                    <Row>
                        <Col lg={4}>
                            <StyledImage src={Interviews_1to1} alt="1_to_1_Interviews"/>
                        </Col>
                        <Col lg={1} />
                        <Col lg={7}>
                            <h3 class="text-right ml-auto">1 to 1 interviews</h3>
                            <p class="py-3 text-right ml-auto">1 to 1 interviews were then conducted using telephone or Zoom (voice communication software) to give a broader aspect on the common problems for those with living with dementia. Consent Forms, 10-point questionnaire and Results Summary were created to approve, collect, and analyse findings.</p>
                        </Col>
                    </Row>
            </Container>

            <Container>
                    <h2>Define</h2>
                    <p>Defining explored user requirements. It considered the users problems, needs, goals, motivations, and frustrations. Research from the literature review and 1 to 1 interviews provided the foundation for this stage. Two user personas were developed (one for the over 65’s) and (one for those under 65 to represent someone with young onset dementia) to provide a better understanding of the user demographic. </p>
            </Container>

            <StyledUserPersona src={PersonaA} alt="Persona_A"/>

            <div className="p-4"></div>

            <StyledUserPersona src={PersonaB} alt="Persona_B"/>

            <div className="p-4"></div>

            <Container>
                <h2>Ideate</h2>
                <p> Ideation phase consisted of different UX design methodologies to inspire a range of ideas to provide new solutions. </p>
                
                <Row>
                    <Col lg={7}>
                        <h3 class="mr-auto">HMWs and Brainstorming</h3>
                        <p class="py-3 mr-auto">A series of “How might we question” (HMWs) provided an insight into some problem statement and help launch brainstorming. Brainstorming providing a range of different ideas which potentially could be implemented in the prototype. </p>
                    </Col>
                    <Col lg={1} />
                    <Col lg={4}>
                        <StyledImage src={LiteratureReview} alt="Literature_Review"/>
                    </Col>
                </Row>

                <div className="p-3"></div>

                <Row>
                    <Col lg={4}>
                        <StyledImage src={Interviews_1to1} alt="1_to_1_Interviews"/>
                    </Col>
                    <Col lg={1} />
                    <Col lg={7}>
                        <h3 class="text-right ml-auto">StoryBoarding and Rough Sketches</h3>
                        <p class="py-3 text-right ml-auto">Brainstorming providing a range of different ideas which potentially could be implemented in the prototype. Storyboarding was used by collecting user journeys and structuring set tasks for a potential solution from a given idea. A rough sketches were then created and implemented for each task. They were evaluated, and the best sketches were chosen within the prototype. </p>
                    </Col>
                </Row>
            </Container>
                
            <Container>
                <h2>Prototype</h2>
            </Container>

            <StyledPrototype src={PersonaA} alt="Persona_A"/>

            <div className="p-1"></div>

            <Container>
                <p>A clickable wireframe prototype was created using design software MockingBot. The prototype was based on a dementia website to demonstrate a real life, website with content, design features and navigation to help analyse the websites usability during testing. Navigation consisted of two methods, horizontal navigation bar and two buttons for next and previous page links. Design layout consisted of implementing a mixture of videos, images, text, input forms and headings into the layout of each page on the prototype. The main goal was to keep information short, accessible, and simple for users to read by using short sentences and dissecting large amounts of information into key points. Images and videos were then combined with text to help users understand the research provided within each page. </p>
            </Container>

            <div className="p-4"></div>

            <Container>
                    <Row>
                        <Col lg={7}>
                            <h2>Test</h2>
                            <p> Unmoderated remote testing gave consenting users scenarios, tasks and a 5-point questionnaires (SurveyMonkey) to fill out after completing the prototype through a direct link to MockingBot. All data from the feedback was collected, evaluated ready to re-iterate and design the next version of the prototype. </p>
                        </Col>
                        <Col lg={1} />
                        <Col lg={4}>
                            <StyledImage src={LiteratureReview} alt="Literature_Review"/>
                        </Col>
                    </Row>
            </Container>

            <div className="p-4"></div>

            <Container>
                <h2>Results</h2>
            </Container>

            <StyledUserPersona src={PersonaA} alt="Persona_A"/>

            <div className="p-4"></div>

            <StyledUserPersona src={PersonaB} alt="Persona_B"/>

            <div className="p-3"></div>

            <Container>
                <h2>Conclusion</h2>
                <p>Dementia affects people differently – the type and stage of dementia will impact people's ability to engage with websites as will as other health conditions and general technological ability prior to diagnosis. Generally, those living with dementia need help processing information, navigation and orientation. Understanding their challenges may help others with different disabilities, e.g. learning disabilities and brain injury. Designers must include those living with dementia in design process. A MVP approach is beneficial when exploring the quality of design. No significant gaps emerged from this study but the findings are complementary and add further detail to existing guidance. Designers would benefit from a greater understanding of dementia to help them better understand users needs. </p>
            </Container>
        </>
    )
}

export default Dementia
