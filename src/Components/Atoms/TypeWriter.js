import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useType from "./../../reacthooks/useType";

function TypeWriter({ messages, heading }) {
  const { state, setState, getMessage } = useType();

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState((cs) => ({
          ...cs,
          isDeleting: true
        }));
      }, 500);
    } else if (state.isDeleting && state.text === "") {
      setState((cs) => ({
        ...cs, // cs means currentState
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, messages)
      }));
    }
  }, [state.text, state.message, state.isDeleting, messages]);

  return (
    <h3>
      {heading}&nbsp;
      <span>{state.text}</span>
      <span id="cursor" />
    </h3>
  );
}

export default TypeWriter;