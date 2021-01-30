import React, {useState, useRef } from 'react'

function useShrink() {
    const [shrink, setIsShrinked] = useState(false);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    if (emailRef.length < 0) {
        setIsShrinked(true);
        console.log(shrink);
    }

    setIsShrinked(false);

    return {
        shrink, 
        emailRef,
        passwordRef
    }

}

export default useShrink
