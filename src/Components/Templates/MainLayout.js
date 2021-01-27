import React from 'react'
import Header from '../Organisms/Header'
import styled from 'styled-components';

const MainWrapper = styled.div`

    

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
