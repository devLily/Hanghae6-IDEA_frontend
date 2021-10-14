import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Grid } from "../components/elements";
import Header from "../components/Header";
import PostList from "../pages/PostList";
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
      </Grid>
    </React.Fragment>
  );
}

export default App;