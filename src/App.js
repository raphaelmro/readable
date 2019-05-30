import React, { Component } from "react";
import Header from "./components/Header";
import PostsPanel from "./components/PostsPanel";
import CategoriesPanel from "./components/CategoriesPanel";
import LoadingBar from "react-redux-loading-bar";
import { BrowserRouter, Route } from 'react-router-dom'

const postsPanelStyle = {
  padding: "30px"
};

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <LoadingBar />
          <Route exact path="/" component={App}/>
          <Route exact path="/:category" component={PostsPanel}/>
        <Header />
        <div className="columns" style={postsPanelStyle}>
          <div className="column is-three-quarters">
            <PostsPanel />
          </div>
          <div className="column">
            <CategoriesPanel />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;