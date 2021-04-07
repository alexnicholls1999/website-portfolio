import { useState, useEffect, useRef } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const LoginSchema = Yup.object({
    email: Yup.string().min(2, "Too Short!").required("Required!"),
    password: Yup.string().min(2, "Too Short!").required("Required!")
})

export default function useShrink(onSubmit) {
    const [isEmailShrinked, setIsEmailShrinked] = useState(false);
    const [isPasswordShrinked, setIsPasswordShrinked] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleInnerSubmit = (data) => {onSubmit(data)}

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: LoginSchema,
        onSubmit: data => {
            handleInnerSubmit(data)
        }
    })

    const handleEmailOnFocus = () => {
        emailRef.current.focus(setIsEmailShrinked(true));
    };

    const handleEmailOnBlur = () => {
        if (formik.values.email.length === 0) emailRef.current.blur(setIsEmailShrinked(false))
    }

    const handlePasswordOnFocus = () => {
        passwordRef.current.blur(setIsPasswordShrinked(true));
    }

    const handlePasswordOnBlur = () => {
        if (formik.values.password.length === 0) passwordRef.current.blur(setIsPasswordShrinked(false))
    }

    useEffect(() => {
        if (formik.values.email.length > 0) setIsEmailShrinked(true);
        if (formik.values.password.length > 0) setIsPasswordShrinked(true);
    }, [formik.values.email, formik.values.password]);

    return {
        formik,
        emailRef,
        passwordRef,
        isEmailShrinked,
        isPasswordShrinked,
        handleEmailOnFocus,
        handleEmailOnBlur,
        handlePasswordOnFocus,
        handlePasswordOnBlur
    }

}