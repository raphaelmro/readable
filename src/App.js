import React, { Component } from "react";
import LoadingBar from "react-redux-loading-bar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CategoriesPanel from "./components/CategoriesPanel";
import PostsPanel from "./components/PostsPanel";
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
              <Route exact path="/:category" component={PostsPanel} />
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
