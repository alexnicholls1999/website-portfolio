import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {Col, Row} from "react-bootstrap";


const StyledCopyRight = styled.div`
    padding-top: 50px;
    padding-bottom: 10%;
    p {
        padding: 40px;
        text-align: center;
    }

`

function CopyRight() {
    
    const [year, setYear] = useState();

    const getYear = () => setYear(new Date().getFullYear())

    useEffect(() => {
        getYear();
    }, [])
    return (
        <StyledCopyRight>
            <p>CopyRight © {year} - Alex Zietara Nicholls</p>
        </StyledCopyRight>
    )
}

export default CopyRight
