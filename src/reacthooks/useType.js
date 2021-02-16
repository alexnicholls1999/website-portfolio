import { useState, useEffect } from "react";

function getCurrentText(currentState) {
  return currentState.isDeleting
    ? currentState.message.substring(0, currentState.text.length - 1)
    : currentState.message.substring(0, currentState.text.length + 1);
}

function getMessage(currentState, data) {
  return data[Number(currentState.loopNum) % Number(data.length)];
}

function getTypingSpeed(currentState) {
  return currentState.isDeleting ? 150 : 30;
}

export default function useType() {
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
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting]);

  return {
    state,
    setState,
    getMessage
  };
}
