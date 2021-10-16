import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { history } from "../redux/configStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { Grid, Text, Button, Image } from "../components/elements";
import styled from "styled-components";

export default function Header(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const toLogin = () => {
    //console.log("history", history);
    history.push("/login");
  };

  const toSignup = () => {
    history.push("/signup");
  };

  const toWishList = () => {
    history.push("/wish");
  };

  const toPostWrite = () => {
    history.push("/write");
  };

  const toLogOut = async () => {
    try {
      await dispatch(userActions.logOut());
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  if (user) {
    return (
      <HeaderContainer>
        <LogoLink to="/">
          <LogoImage src="/images/IdeaLogo.png" alt="logo" />
        </LogoLink>

        <ButtonWrap>
          <HeaderButton onClick={toWishList}>My Page</HeaderButton>
          <HeaderButton onClick={toPostWrite}>Post Write</HeaderButton>
          <HeaderButton onClick={toLogOut}>Log out</HeaderButton>
        </ButtonWrap>
      </HeaderContainer>
    );
  }

  return (
    <HeaderContainer>
      <LogoLink to="/">
        <LogoImage src="/images/IdeaLogo.png" alt="logo" />
      </LogoLink>

      <ButtonWrap>
        <HeaderButton onClick={toLogin}>Login</HeaderButton>
        <HeaderButton onClick={toSignup}>Signup</HeaderButton>
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
