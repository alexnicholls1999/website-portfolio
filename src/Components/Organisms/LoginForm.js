import React, {useEffect, useRef, useState} from 'react'
import PropTypes from "prop-types"
import useShrink from '../../reacthooks/useShrink'
import { Formik, useFormik } from 'formik'
import Button from '../Atoms/Button'
import ErrorMessage from '../Atoms/ErrorMessage'
import FormControl from '../Molecules/FormControl'
import * as Yup from "yup";
import ErrorLabel from '../Atoms/ErrorLabel'

const LoginSchema = Yup.object({
    email: Yup.string().min(2, "Too Short!").required("Required!"),
    password: Yup.string().min(2, "Too Short!").required("Required!")
});

function LoginForm(props) {

    const {onSubmit, serverError} = props;

    const [isEmailShrinked, setIsEmailShrinked] = useState(false);
    const [isPasswordShrinked, setIsPasswordShrinked] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: LoginSchema,
        onSubmit: data => {
            handleInnerSubmit(data);
        }
    })

    const handleInnerSubmit = data => {
        onSubmit(data);
    }

    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();

    const handleEmailOnFocus = () => {
        inputEmailRef.current.focus(setIsEmailShrinked(true));
    };

    const handleEmailOnBlur = () => {
        if (formik.values.email.length === 0) {
            inputEmailRef.current.blur(setIsEmailShrinked(false));
        }
    }

    const handlePasswordOnFocus = () => {
        inputPasswordRef.current.focus(setIsPasswordShrinked(true));
    };

    const handlePasswordOnBlur = () => {
        if (formik.values.password.length === 0) {
            inputPasswordRef.current.blur(setIsPasswordShrinked(false));
        }
    }

    useEffect(() => {
        if (formik.values.email.length > 0) {
            setIsEmailShrinked(true)
        }

        if (formik.values.password.length > 0) {
            setIsPasswordShrinked(true)
        }
    }, [formik.values.email, formik.values.password ]);


    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <FormControl 
                shrunk={isEmailShrinked}
                onFocus={handleEmailOnFocus}
                onBlur={handleEmailOnBlur}
                labelName="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                InputRef={inputEmailRef}
            />

            <ErrorLabel errorMessage={formik.errors.email}/>

            <FormControl 
                shrunk={isPasswordShrinked}
                onFocus={handlePasswordOnFocus}
                onBlur={handlePasswordOnBlur}
                labelName="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                InputRef={inputPasswordRef}
            />

            <ErrorLabel errorMessage={formik.errors.password}/>

            <div className="p-1"></div>

            <ErrorMessage>{serverError}</ErrorMessage>
            
            <Button type="submit" text="LOGIN"/>
            
        </form>
    )
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
}

LoginForm.defaultProps = {
    serverError: ' '
}


export default LoginForm
