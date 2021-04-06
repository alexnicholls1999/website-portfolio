import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledCopyRight = styled.div`
    padding-top: 50px;
    padding-bottom: 10%;
    p {
        padding: 40px;
        text-align: center;
    }
`;

function CopyRight() {

    const [year, setYear] = useState();

    const getYear = () => setYear(new Date().getFullYear())

    useEffect(() => {
        getYear();
    }, []);

    return (
        <StyledCopyRight>
            <p>Copyright © {year} - Alex Zietara Nicholls</p>
        </StyledCopyRight>
    )
}

export default CopyRight
