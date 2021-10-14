import React, { useState } from "react";
import styled from "styled-components";

export default function Input(props) {
  const [inputValue, setInputValue] = useState("");

  const changeInput = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <input value={inputValue} onChange={changeInput} />
    </div>
  );
}
