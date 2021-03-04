import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useType from "./../../reacthooks/useType";

function TypeWriter({ messages, heading }) {
  const { state } = useType(messages);

  return (
    <h3>
      {heading}&nbsp;
      <span>{state.text}</span>
      <span id="cursor" />
    </h3>
  );
}

export default TypeWriter;