<<<<<<< HEAD
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { history } from "../redux/configStore";

import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as userActions } from "../redux/modules/user";
=======
import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0

import { Grid } from "../components/elements";
import Header from "../components/Header";
import PostList from "../pages/PostList";
<<<<<<< HEAD
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import WishList from "../pages/WishList";
import { getCookie } from "../utils/cookie";

// 전역 스타일지정 - 파일로 만들어도 좋다눙 ㅇㅅㅇ!
const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;
// 1. cookie가 있는지 확인 => getcookie
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (getCookie("user")) {
      dispatch(userActions.setUser(getCookie("user")));
    }
    dispatch(postActions.getPostList());
  }, []);
  //console.log("user", getCookie("user"));

  return (
    <React.Fragment>
      <GlobalStyle />
      <Grid>
        <ConnectedRouter history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={PostList} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/wish/:id" exact component={WishList} />
          </Switch>
        </ConnectedRouter>
=======
import PostDetail from "../pages/PostDetail";
import PostWrite from "../pages/PostWrite";
import { actionCreators as postActions } from "../redux/modules/post";


function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.getPostList());
    // console.log("getPostList() @ App.js");
  }, []);

  return (
    <React.Fragment>
      <Grid isRoot>
        <Header />
        <BrowserRouter>
          <Route exact path="/" component={PostList} />
          <Route path="/write" exact component={PostWrite} />
          <Route exact path="/post/:postId" component={PostDetail} />
        </BrowserRouter>
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0
      </Grid>
    </React.Fragment>
  );
}
<<<<<<< HEAD
=======

export default App;
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0
