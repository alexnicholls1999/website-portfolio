import { useState, useRef, useEffect } from "react";

export default function useShrink(form) {

    const [isEmailShrinked, setIsEmailShrinked] = useState(false);
    const [isPasswordShrinked, setIsPasswordShrinked] = useState(false);

    const inputEmailRef = useRef();
    const inputPasswordRef = useRef();

    const handleEmailOnFocus = () => {
        inputEmailRef.current.focus(setIsEmailShrinked(true));
    };

    const handlePasswordOnFocus = () => {
        inputPasswordRef.current.focus(setIsPasswordShrinked(true));
    };

    const handleEmailOnBlur = () => {
        if (form.values.email.length === 0) inputEmailRef.current.blur(setIsEmailShrinked(false));
    }

    const handlePasswordOnBlur = () => {
        if (form.values.password.length === 0) inputPasswordRef.current.blur(setIsPasswordShrinked(false));
    }

    useEffect(() => {
        if (form.values.email.length > 0) setIsEmailShrinked(true);
        if (form.values.password.length > 0) setIsPasswordShrinked(true);
    }, [form.values.email, form.values.password]);


    return {
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