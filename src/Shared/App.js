import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { history } from "../redux/configStore";

import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as wishActions } from "../redux/modules/wish";

import { Grid } from "../components/elements";
import Header from "../components/Header";
import PostList from "../pages/PostList";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
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
      dispatch(wishActions.getWishList());
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
            <Route path="/" component={PostList} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/signup" component={Signup} exact />
            <Route path="/wish" component={WishList} exact />
            <Route path="/write" component={PostWrite} exact />
            <Route path="/post/:postId" component={PostDetail} exact />
          </Switch>
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}
