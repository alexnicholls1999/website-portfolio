import React, { useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, useFormik, Field } from 'formik';
import * as yup from "yup";

import useShrink from "./../../reacthooks/useShrink";
import emailRef from "./../../reacthooks/useShrink";
import passwordRef from "./../../reacthooks/useShrink";

// Components
import Button from '../Atoms/Button';
import FormControl from '../Molecules/FormControl';
import ErrorMessage from '../Atoms/ErrorMessage';

const loginFormSchema = yup.object({
    email: yup.string().email('Please enter a valid email address').required('Please enter email!'),
    password: yup.string().min(5, 'Password must be at 5 characters long').required('Please enter a password!')
})

function LoginForm(props) {
    const {onSubmit, serverError, active} = props;

    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const inputLabel = useRef(null);
    const [isShrinked, setIsShrinked] = useState(false)

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })

        console.log(state)

    }

    useEffect(() => {
        if (state.email === "" || state.password === "") {
            setIsShrinked(false)
            console.log("blur")
        } else {
            setIsShrinked(true);
            console.log("focus")
        }

    }, [state])


    const handleInnerSubmit = data => {
        // onSubmit(data)
        console.log(data);
    }



    const errorPadding = serverError => serverError !== ' ' ? ({padding: '5%'}) : null

    return (
        <Formik 
            initialValues= {{
                email: '',
                password: ''
            }}       
            onSubmit={data => {
                handleInnerSubmit(data);
                // console.log(data)
            }}
        >
            <Form autoComplete="off">
                <FormControl labelText="Email" name="email" shrink={isShrinked} value={state.email} onChange={handleChange}/>
                <FormControl labelText="Password" name="password" shrink={isShrinked} value={state.password} onChange={handleChange}/> 

                {/* <Field type="text" name="email"/>

                <Field type="text" name="password"/> */}

                
                <div className="p-3"></div>

                <ErrorMessage style={errorPadding(serverError)}>
                    {serverError}    
                </ErrorMessage>                
                
                <Button type="submit" text="Login"/>
 
            </Form>
        </Formik>
    )
}

LoginForm.propTypes = { 
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
}

LoginForm.defaultProps = {
    serverError: ' '
}

export default LoginForm;
