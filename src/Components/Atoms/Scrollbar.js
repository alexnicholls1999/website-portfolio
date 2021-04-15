import React from 'react';
import styled from 'styled-components';

const StyledScrollBar = styled.span`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.white};
    height: 3px;
    width: 65px;
    border-radius: 5px;
`;

function Scrollbar() {
    return <StyledScrollBar />
}

export default Scrollbar;
