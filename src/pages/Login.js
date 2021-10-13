import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { apis } from "../utils/apis";
import { setCookie, getCookie } from "../utils/cookie";
import { actionCreators as userActions } from "../redux/modules/user";

import styled from "styled-components";

export default function Login(props) {
  const dispatch = useDispatch();
  const [loginInput, setLoginInput] = useState({
    email: "",
    pw: "",
  });

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
    dispatch(userActions.loginMiddleware(loginInput));
  };

  return (
    <Fragment>
      <input
        name="email"
        value={loginInput.email}
        type="text"
        onChange={onChangeLogin}
      />
      <input
        name="pw"
        value={loginInput.pw}
        type="password"
        onChange={onChangeLogin}
      />
      <button onClick={onClickLogin}>로그인</button>
    </Fragment>
  );
}
