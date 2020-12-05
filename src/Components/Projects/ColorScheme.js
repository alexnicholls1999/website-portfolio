import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

const StyledColorScheme = styled.div`
    background-color: #107CDC;
    padding: 5%;

`;

const StyledPallete = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 768px) {
        flex-direction: row;
    }

`;

const StyledColor = styled.div`

    height: 125px;
    width: 125px;
    background-color: ${props => props.color};
    margin: 2.5%;
    text-align: center;
    padding: 20px;
    box-shadow: 0px 0px 15px 0px ${props => props.color};
    overflow-wrap: break-word;


    p {
        color: ${props => props.fontcolor};
    }



`;


const Hex = styled.div`

    p {
        margin: 0;
        color: ${props => props.fontcolor};
    }



`;


const RGB = styled.div`

    p {
        color: ${props => props.fontcolor};
        
    }



`;


function ColorScheme(props) {

    const {hex, rgb} = props;

    return (
        <StyledColorScheme>
            <Container>
                <Row className="py-2 px-5">
                    <h2>Color Scheme</h2>
                </Row>
                
                <Pallete/>
            </Container>
        </StyledColorScheme>
    )
}

function Pallete(props) {

    const {hex, rgb} = props;

    return (
        <StyledPallete>
            <Color color="#FFFFFF" fontcolor="black" rgb="RGB(255,255,255)"/>
            <Color color="#000000" rgb="RGB(0,0,0)"/>
            <Color color="#0B89F5" rgb="RGB(11,137,245)"/>
            <Color color="#7ED321" rgb="RGB(126,211,33)"/>
            <Color color="#D0021B" rgb="RGB(208,2,27)"/>
        </StyledPallete>
    )
}

function Color(props) {
    return (
        <StyledColor color={props.color} fontcolor={props.fontcolor}>
            <Hex>
                <p>{props.color}</p>
            </Hex>

            <RGB>
                <p>{props.rgb}</p>
            </RGB>

        </StyledColor>
    )
}

export default ColorScheme;