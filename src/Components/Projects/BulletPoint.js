import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';

const StyledBulletPointList = styled.div`

    p { 
        color: black;
    
    }
`;

const StyledUl = styled.ul`
    padding-left: 10%;

    p {
        color: black;
    }

`;


function BulletPoint(props) {

    const {data, text} = props;

    return (
        <StyledBulletPointList>  
            <p>{text}</p>
            <StyledUl>
                {data.map(function(d, idx){
                    return (<li key={idx}>{d.userstory}</li>)
                })}
            </StyledUl>
        </StyledBulletPointList>
    )
}

export default BulletPoint;