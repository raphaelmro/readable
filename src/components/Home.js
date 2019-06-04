import React, { Component, Fragment } from "react";
import PostsPanel from "./PostsPanel";
import Header from "./Header";
import CategoriesPanel from "./CategoriesPanel";
import { Route } from "react-router-dom";

const postsPanelStyle = {
  padding: "30px"
};

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" />
        <Route exact path="/:category" component={PostsPanel} />
        <Header />
        <div className="columns" style={postsPanelStyle}>
          <div className="column is-three-quarters">
            <PostsPanel />
          </div>
          <div className="column">
            <CategoriesPanel />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
