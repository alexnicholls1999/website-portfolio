import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Atoms/Input';
import Label from '../Atoms/Label';
import { Field } from 'formik';
import ErrorLabel from '../Atoms/ErrorLabel';
import styled from 'styled-components';

const StyledFormControl = styled.div`
  position: relative;
  width: 316px;
  padding: 5px 0;
  margin: 25px 0;
  border-bottom: 2px solid white;


`

function FormControl(props) {

  const { 
    labelName , 
    shrunk, 
    InputRef 
  } = props;

  return (
        <StyledFormControl>
          <Label shrunk={shrunk} text={labelName} />
          <br/>
          <Input 
            InputRef={InputRef}
            {...props}
          />
        </StyledFormControl>
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
