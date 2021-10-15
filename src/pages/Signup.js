import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import AuthInput from "../components/AuthInput";
import styled from "styled-components";
import { mailRegCheck } from "../utils/validation";

export default function Signup(props) {
  const dispatch = useDispatch();
  const [signupInput, setSignupInput] = useState({
    email: "",
    pw: "",
    pwCheck: "",
    nickname: "",
  });
  const { email, pw, pwCheck, nickname } = signupInput;
  const onChangeSignUp = ({ target }) => {
    const { name, value } = target;

    setSignupInput({
      ...signupInput,
      [name]: value,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickSignup();
    }
  };

  const onClickSignup = () => {
    if (!mailRegCheck(email) || !email) {
      alert("이메일 형식을 다시 확인해주세요!");
      return;
    }
    if (!pw || pw.length < 4) {
      alert("비밀번호 입력란을 다시 확인해주세요! 비밀번호는 4자리 이상입니다");
      return;
    }
    if (pw !== pwCheck) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }
    if (!nickname) {
      alert("사용하실 닉네임을 입력해주세요!");
      return;
    }
    dispatch(userActions.signupMiddleware(signupInput));
  };

  return (
    <SubmitArea>
      <AuthInput
        labelText="E-Mail"
        authName="email"
        authValue={email}
        type="email"
        placeholder="email을 입력해주세요"
        authChange={onChangeSignUp}
        authKeydown={handleKeyDown}
      />
      <AuthInput
        labelText="Password"
        authName="pw"
        authValue={pw}
        type="password"
        placeholder="Password를 입력해주세요"
        authChange={onChangeSignUp}
        authKeydown={handleKeyDown}
      />
      <AuthInput
        labelText="Password confirm"
        authName="pwCheck"
        authValue={pwCheck}
        type="password"
        placeholder="Password를 한번 더 입력해주세요"
        authChange={onChangeSignUp}
        authKeydown={handleKeyDown}
      />
      <AuthInput
        labelText="nickname"
        authName="nickname"
        authValue={nickname}
        type="text"
        placeholder="닉네임을 입력해주세요"
        authChange={onChangeSignUp}
        authKeydown={handleKeyDown}
      />
      <AuthButton onClick={onClickSignup}>회원가입</AuthButton>
    </SubmitArea>
  );
}

const SubmitArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 150px;
`;

const AuthButton = styled.button`
  width: 100px;
  padding: 10px;
  margin: 10px;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: 0.4s ease-in;
  z-index: 1;
  &::before {
    background: #fbd914;
    content: "";
    z-index: -1;
  }
  &::after {
    background: #fbd914;
    content: "";
    z-index: -1;
  }
  &:hover {
    border: 2px solid #fbd914;
    color: #fbd914;
    background-color: #0438ae;
  }
`;
