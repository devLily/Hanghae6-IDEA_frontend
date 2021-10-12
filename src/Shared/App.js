import React, { useEffect } from "react";

import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "../components/elements";
import Header from "../components/Header";

import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup"


function App() {


  return (
    <React.Fragment>
      <Grid isRoot>
        <BrowserRouter>
          <Route exact path="/" component={PostList} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
