import React, { Component } from "react";
import LoadingBar from "react-redux-loading-bar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CategoriesPanel from "./components/CategoriesPanel";
import PostsPanel from "./components/PostsPanel";
import PostDetails from "./components/PostDetails";
import PostForm from "./components/PostForm";

import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <LoadingBar />
        <Header />
        <div className="columns">
          <div className="column">
            <Switch>
              <Route exact path="/" component={PostsPanel} />
              <Route exact path='/new' component={PostForm} />
              <Route path='/edit/:postId' component={PostForm} />
              <Route exact path="/:category" component={PostsPanel} />
              <Route exact path="/:category/:postId" component={PostDetails} />
            </Switch>
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
