import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Input from '../Atoms/Input';
import Label from '../Atoms/Label';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ErrorLabel from '../Atoms/ErrorLabel';


const eye = <FontAwesomeIcon icon={faEye}/>
const eyeHidden = <FontAwesomeIcon icon={faEyeSlash}/>


const StyledFormControl = styled.div`
  position: relative;
  width: 250px;
  padding: 5px 0;
  border-bottom: 2px solid white;

  @media (min-width: 765px) {
    width: 300px;
  }

`;

const Eye = styled.i`
  position: absolute;
  top: 5%;
  right: 10px;
  color: white;

  :hover {
    cursor: pointer;
  }

`;

function FormControl({ labelName, shrunk, InputRef, type, password, errorLabel, ...props}) {

  const [passwordShow, setPasswordShow] = useState(false);
  const [eyeVisible, setEyeVisible] = useState(false);
  
  const togglePasswordVisibilty = () => {
    setPasswordShow(passwordShow ? false : true);
    setEyeVisible(eyeVisible ? false : true);
  }

  return (
    <>
        {!password ? (
          <>
            <StyledFormControl>
              <Label shrunk={shrunk} text={labelName} />
              <br/>
              <Input 
                type={type}
                InputRef={InputRef}
                {...props}
              />
            </StyledFormControl>

            <ErrorLabel errorMessage={errorLabel} />
          </>
        ) : (
          <>
            <StyledFormControl>
              <Label shrunk={shrunk} text={labelName} />
              <br/>
              <Input 
                type={passwordShow ? "text" : "password"}
                InputRef={InputRef}
                {...props}
              />

              <Eye onClick={togglePasswordVisibilty}>{eyeVisible ? eyeHidden : eye}</Eye>
            </StyledFormControl>

            <ErrorLabel errorMessage={errorLabel}/>
          </>
        )}
    
    </>


    )
}

FormControl.propTypes = {
  labelName: PropTypes.string,
  shrunk: PropTypes.bool
}

FormControl.defaultProps = {
  labelName: ' ',
  shrunk: false
}

export default FormControl;
