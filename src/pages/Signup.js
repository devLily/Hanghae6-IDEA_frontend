import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import styled from "styled-components";

export default function Signup(props) {
  const dispatch = useDispatch();
  const [signupInput, setSignupInput] = useState({
    email: "",
    pw: "",
    pwCheck: "",
    nickname: "",
  });

  const onChangeSignUp = ({ target }) => {
    const { name, value } = target;

    setSignupInput({
      ...signupInput,
      [name]: value,
    });
  };

  const onClickSignup = () => {
    console.log(signupInput);
    dispatch(userActions.signupMiddleware(signupInput));
  };

  //const { email, pw, pwCheck, nickname } = signUpInput;

  // const signUpAccount = (e) => {
  //   const { name, value } = e.target;
  //   setSignUpInput({
  //     ...signUpInput,
  //     [name]: value,
  //   });
  // };

  // const saveSignupDB = () => {
  //   console.log(signUpInput);
  //   //dispatch(userActions.signupMiddleware(signUpInput));
  // };
  return (
    <Wrap>
      <input
        name="email"
        value={signupInput.email}
        type="text"
        onChange={onChangeSignUp}
      />
      <input
        name="pw"
        value={signupInput.pw}
        type="password"
        onChange={onChangeSignUp}
      />
      <input
        name="pwCheck"
        value={signupInput.pwCheck}
        type="password"
        onChange={onChangeSignUp}
      />
      <input
        name="nickname"
        value={signupInput.nickname}
        type="text"
        onChange={onChangeSignUp}
      />
      <button onClick={onClickSignup}>회원가입</button>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
