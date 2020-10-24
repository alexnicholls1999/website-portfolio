import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

const StyledColorScheme = styled.div`
    background-color: #107CDC;
    padding: 5%;

    h2 {
        color: white;
    }
`;

function Pallete(props) {

    const StyledPallete = styled.div`
        
    
    `;

    const Color = styled.div`
    
        display: flex;
        flex-direction: column;
        background-color: red;
        height: 50px;
        width: 50px;
        padding: 10px;

        @media (min-width: 990px) {
            display: none;
        }
        

    `;

    const Hex = styled.div`
    
        

    `;

    const RGB = styled.div`
    
    `;

    const {hex, rgb} = props;

    return (
        <StyledPallete>
            <Color>
                <Hex>
                    <p> {hex} </p>
                </Hex>
                <RGB>
                    <p> {rgb} </p>
                </RGB>
            </Color>
        </StyledPallete>
    )
}

function ColorScheme(props) {

    const {hex, rgb} = props;

    return (
        <StyledColorScheme>
            <Container>
                <Row className="py-2 px-5">
                    <h2>Color Scheme</h2>
                </Row>

                
                <Pallete hex={hex} rgb={rgb}/>
                <Pallete hex={hex} rgb={rgb}/>
                <Pallete hex={hex} rgb={rgb}/>
                <Pallete hex={hex} rgb={rgb}/>
                <Pallete hex={hex} rgb={rgb}/>
                
            </Container>
        </StyledColorScheme>
    )
}

export default ColorScheme;