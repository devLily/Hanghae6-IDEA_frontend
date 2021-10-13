import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { history } from "../redux/configStore";
import { Grid, Text, Button, Image } from "../components/elements";
import styled from "styled-components";

export default function Header(props) {
  const user = useSelector((state) => state.user.user);
  const toLoginPage = () => {
    console.log("history", history);
    history.push("/login");
  };

  const toSignupPage = () => {
    history.push("/signup");
  };

  return (
    <HeaderContainer>
      <LogoLink to="/">
        <LogoImage src="/images/IdeaLogo.png" alt="logo" />
      </LogoLink>

      <ButtonWrap>
        {user ? <h1>유저 있음 로그인함</h1> : <h1>유저 없음 로그인 안함</h1>}
        <HeaderButton onClick={toLoginPage}>Login</HeaderButton>
        <HeaderButton onClick={toSignupPage}>Signup</HeaderButton>
      </ButtonWrap>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  background-color: #0438ae;
  display: flex;
  justify-content: space-between;
  align-items: cneter;
  width: 100%;
  height: 70px;
  padding: 0 20px;
`;

const LogoLink = styled(Link)`
  display: block;
`;

const LogoImage = styled.img`
  width: 150px;
  height: 70px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderButton = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 3px;
  color: #fff10a;
  cursor: pointer;
  font-weight: bold;
  margin: 0 16px;
  padding: 0;
  position: relative;
  min-width: 60px;
  height: 40px;
  line-height: 40px;
  transition: all 0.3s;

  &::after {
    background-color: #ffffff;
    content: "";
    position: absolute;
    height: 2px;
    opacity: 0;
    width: 0;
    left: 0;
    bottom: 0;
    transition: all 0.3s;
  }

  &:hover {
    color: #ffffff;

    &::after {
      width: 100%;
      opacity: 1;
    }
  }
`;
