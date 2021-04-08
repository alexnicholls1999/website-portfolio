import React from 'react'
import PropTypes from "prop-types"
import ErrorMessage from '../Atoms/Form/ErrorMessage'
import FormControl from '../Molecules/FormControl'
import Button from '../Atoms/Buttons/Button'
import useShrink from "./../../react-hooks/useShrink"
import useLogin from '../../react-hooks/useLogin'



function LoginForm({onSubmit, serverError}) {

    const { formik } = useLogin(onSubmit);

    const {        
        inputEmailRef,
        inputPasswordRef,
        isEmailShrinked,
        isPasswordShrinked,
        handleEmailOnBlur,
        handleEmailOnFocus,
        handlePasswordOnFocus,
        handlePasswordOnBlur
    } = useShrink(formik);

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
                inputRef={inputEmailRef}
                errorMessage={formik.errors.email}
            />

            <FormControl 
                password
                shrunk={isPasswordShrinked}
                onFocus={handlePasswordOnFocus}
                onBlur={handlePasswordOnBlur}
                labelName="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                inputRef={inputPasswordRef}
                errorMessage={formik.errors.password}
            />

            <div className="p-1"></div>

            <ErrorMessage>{serverError}</ErrorMessage>
            
            <Button type="submit" text="LOGIN" />
            
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