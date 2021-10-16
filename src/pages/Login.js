import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";

import { mailRegCheck } from "../utils/validation";
import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as wishActions } from "../redux/modules/wish";

import AuthInput from "../components/AuthInput";
import styled from "styled-components";

export default function Login(props) {
  const dispatch = useDispatch();
  const [loginInput, setLoginInput] = useState({
    email: "",
    pw: "",
  });
  const { email, pw } = loginInput;
  const onChangeLogin = ({ target }) => {
    const { name, value } = target;

    setLoginInput({
      ...loginInput,
      [name]: value,
    });
  };

  // const onClickLogin = async () => {
  //   try {
  //     const res = await apis.login(loginInput);
  //     console.log("login res", res.data);
  //     if (res.status === 200) {
  //       const { token } = res.data;
  //       setCookie("user", token);

  //       console.log("user", getCookie("user"));
  //     }
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // };

  const onClickLogin = () => {
    if (!mailRegCheck(email) || !email) {
      alert("이메일 형식을 다시 확인해주세요!");
      return;
    }
    if (!pw || pw.length < 4) {
      alert("비밀번호 입력란을 다시 확인해주세요! 비밀번호는 4자리 이상입니다");
      return;
    }
    dispatch(userActions.loginMiddleware(loginInput));
    //dispatch(wishActions.getWishList());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickLogin();
    }
  };

  return (
    <SubmitArea>
      <AuthInput
        labelText="E-Mail"
        authName="email"
        authValue={email}
        type="email"
        placeholder="email을 입력해주세요"
        authChange={onChangeLogin}
        authKeydown={handleKeyDown}
      />
      <AuthInput
        labelText="Password"
        authName="pw"
        authValue={pw}
        type="password"
        placeholder="패스워드를 입력해주세요"
        authChange={onChangeLogin}
        authKeydown={handleKeyDown}
      />
      <AuthButton onClick={onClickLogin}>로그인</AuthButton>
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
