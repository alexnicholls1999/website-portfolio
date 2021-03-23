import React from 'react'
import {a} from 'react-spring';
import styled from 'styled-components';

const StyledModal = styled(a.div)`
  z-index: 100;
  position: fixed;
  padding: 10%;
  left: 2vw;
  height: calc(100vh + 15%);
  width: 96vw;
  border-radius: 12px 12px 0px;
  box-shadow: 0px 0px 20px 3px #0f0f0f;
  background: #1f1f1f;
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
