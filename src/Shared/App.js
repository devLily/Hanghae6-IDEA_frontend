import React from "react";

import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "../components/elements";

import PostList from "../pages/PostList";
import Header from "../components/Header";


function App() {
  return (
    <React.Fragment>
      <Grid isRoot>
        <BrowserRouter>
        <Header />
          <Route exact path="/" component={PostList} />
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
