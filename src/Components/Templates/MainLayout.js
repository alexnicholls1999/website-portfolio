import React from 'react'
import Header from '../Organisms/Header'
import styled from 'styled-components';

const MainWrapper = styled.div`
    background-color: ${({theme}) => theme.colors.black};
    

`;

function MainLayout({children}) {
    return (
        <MainWrapper>
            <Header /> 
            {children}
        </MainWrapper>
    )
}

export default MainLayout
