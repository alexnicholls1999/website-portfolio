import React from 'react'
import PropTypes from "prop-types";
import styled from "styled-components";
import { a } from "react-spring";

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 200;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  padding: 50px 20px;
  overflow-y: hidden;
`;

const StyledModal = styled.div`
  width: 795px;
  height: 90vh;
  background-color: #0f0f0f;
  position: relative;
  border: 5px;
  box-shadow: 2px 4px 20px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;

`;

const StyledMenuModal = styled(a.div)`
  z-index: 100;
  position: fixed;
  padding: 10%;
  left: 2.5%;
  height: calc(100vh + 140px);
  width: 95%;
  border-radius: 12px 12px 0px;
  box-shadow: 0px 0px 20px 10px black;
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

function Modal({ show, menuModal, children, ...props}) {
    return (
        <>
          {!show ? null : (
            <ModalWrapper>
              <StyledModal>{children}</StyledModal>
            </ModalWrapper>
          )}
          {menuModal && (
            <StyledMenuModal {...props}>
              {children}
            </StyledMenuModal>
          )}
        </>
      );
}

Modal.defaultProps = {
    show: false,
    menuModal: false,
    children: undefined
};
  
  Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    menuModal: PropTypes.bool.isRequired,
    children: PropTypes.node    
};

export default Modal
