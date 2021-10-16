import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { history } from "../redux/configStore";

import { actionCreators as userActions } from "../redux/modules/user";

import { Grid } from "../components/elements";
import Header from "../components/Header";
import PostList from "../pages/PostList";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import WishList from "../pages/WishList";
import { getCookie } from "../utils/cookie";

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
  const user = useSelector((state) => state.user.user);
  const userByCookie = getCookie("user");
  const dispatch = useDispatch();

  useEffect(() => {
    // 사용자 정보가 redux state에는 있지만 cookie에는 없을 때, 로그인 정보 초기화
    if (!user && userByCookie) {
      dispatch(userActions.setUser(getCookie("user")));
    }
    if (user && !userByCookie) {
      dispatch(userActions.setUser(null));
    }
  }, [dispatch, user, userByCookie]);

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
            <Route path="/write/:postId" component={PostWrite} exact />
            <Route path="/post/:postId" component={PostDetail} exact />
          </Switch>
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}
