import React from 'react'
import styled from 'styled-components'

const StyledScrollbar = styled.span`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  height: 3px;
  width: 25%;
`;


function HorizontalScrollbar() {
    return <StyledScrollbar />;
}

export default HorizontalScrollbar
