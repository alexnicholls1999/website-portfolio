import React from 'react'
import {a} from 'react-spring';
import styled from 'styled-components';

const StyledModal = styled(a.div)`
  z-index: 100;
  position: fixed;
  padding: 10%;
  left: 2vw;
  height: calc(100vh + 140px);
  width: 96vw;
  border-radius: 12px 12px 0px;
  background: #0f0f0f;
  color: white;
  div {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    text-transform: capitalize;
  }
`;

function MenuModal({children, ...props}) {
    return <StyledModal {...props}>{children}</StyledModal>;
}

export default MenuModal
