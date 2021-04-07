import { useState, useEffect } from "react";

function getCurrentText(currentState) {
    return currentState.isDeleting
        ? currentState.message.substring(0, currentState.text.length - 1)
        : currentState.message.substring(0, currentState.text.length + 1);
}

function getTypingSpeed(currentState) {
    return currentState.isDeleting ? 150 : 30;
}

function getMessage(currentState, data) {
    return data[Number(currentState.loopNum) % Number(data.length)];
}

function typeMessage(currentState, setCurrentState, messages){
    if (!currentState.isDeleting && currentState.text === currentState.message) {
        setTimeout(() => {
            setCurrentState((cs) => ({
                ...cs,
                isDeleting: true,
            }))
        }, 500)
    }

    if(currentState.isDeleting && currentState.text === "") {
        setCurrentState((cs) => ({
            ...cs,
            isDeleting: false,
            loopNum: cs.loopNum + 1,
            message: getMessage(cs, messages)
        }));
    }
}

export default function useType(messages) {
    const [state, setState] = useState({
        text: "",
        message: "",
        isDeleting: false,
        loopNum: 0,
        typingSpeed: 150
    });

    useEffect(() => {
        let timer = "";

        const handleType = () => {
            setState((cs) => ({
                ...cs,
                text: getCurrentText(cs),
                typingSpeed: getTypingSpeed(cs)
            }));
            timer = setTimeout(handleType, state.typingSpeed)
        }

        handleType();

        return () => clearTimeout(timer);
    }, [state.isDeleting, state.typingSpeed]);

    useEffect(() => {
        typeMessage(state, setState, messages)
    }, [state.text, state.message, state.isDeleting, messages]);

    return {
        state
    }

}
