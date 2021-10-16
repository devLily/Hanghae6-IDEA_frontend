import React from "react";

import styled from "styled-components";

export default function Input(props) {
  const {
    labelText,
    type,
    authName,
    authValue,
    placeholder,
    authChange,
    authKeyDown,
  } = props;

  return (
    <InputWrap>
      <AuthLabel htmlFor={authName}>{labelText}</AuthLabel>
      <Inputs
        type={type}
        name={authName}
        value={authValue}
        placeholder={placeholder}
        onChange={authChange}
        onKeyDown={authKeyDown}
        required
        autoFocus
      />
    </InputWrap>
  );
}

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AuthLabel = styled.label`
  text-align: left;
  min-width: 90px;
`;

const Inputs = styled.input`
  width: 300px;
  padding: 10px;
  margin: 20px;
  border-top: none;
  border-left: none;
  border-right: none;
  &:required {
    border-color: #ffb319;
    &:invalid {
      border-color: #ffb319;
    }
  }
`;
