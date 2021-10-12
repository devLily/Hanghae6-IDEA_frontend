import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/modules/configStore";

import { actionCreators as postActions } from "../redux/modules/post";

import { Grid } from "../components/elements";
import Header from "../components/Header";
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import WishList from "../pages/WishList";


export default function App() {
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(postActions.getPostList());
  }, []);

  return (
    <React.Fragment>
    <Grid>
      <ConnectedRouter history={history}>
      <Header></Header>
        <Route path="/" exact component={PostList} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/wish/:id" exact component={WishList} />
      </ConnectedRouter>
    </Grid>
  </React.Fragment>
  );
}
