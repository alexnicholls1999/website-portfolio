import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';

const StyledUl = styled.ul`
    padding-left: 10%;

`;


function BulletPoint(props) {

    const {data} = props;

    return (
        <>
            <Row className="px-5">
                <StyledUl>
                    {data.map(function(d, idx){
                        return (<li key={idx}>{d.userstory}</li>)
                    })}
                </StyledUl>
            </Row>
        </>
    )
}

export default BulletPoint;