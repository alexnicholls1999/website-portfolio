import { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";


export default function useShrink(onSubmit) {

    const [isEmailShrinked, setIsEmailShrinked] = useState(false);
    const [isPasswordShrinked, setIsPasswordShrinked] = useState(false);

    const handleInnerSubmit = (data) => {onSubmit(data)}

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: data => {
            handleInnerSubmit(data)
        }
    })


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


    return {
        formik,
        inputEmailRef,
        inputPasswordRef,
        isEmailShrinked,
        isPasswordShrinked,
        handleEmailOnBlur,
        handleEmailOnFocus,
        handlePasswordOnBlur,
        handlePasswordOnFocus,
    }

}