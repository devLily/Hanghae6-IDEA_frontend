import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { Grid } from "../components/elements";
import Header from "../components/Header";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetail";
import PostWrite from "../pages/PostWrite";


function App() {

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