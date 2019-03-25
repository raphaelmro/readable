import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PostsPanel from "./components/PostsPanel";
import LinksPanel from "./components/LinksPanel";
import LoadingBar from "react-redux-loading-bar";

const postsPanelStyle = {
  padding: "30px"
};

class App extends Component {
  render() {
    return (
      <Fragment>
        <LoadingBar />
        <Header />
        <div className="columns" style={postsPanelStyle}>
          <div className="column is-three-quarters">
            <PostsPanel />
          </div>
          <div className="column">
            <LinksPanel />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
