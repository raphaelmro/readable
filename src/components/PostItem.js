import React, { Component } from "react";

class PostItem extends Component {
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p>
                <strong>John Smith</strong>
                <br />
                <small>@johnsmith</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <span className="icon has-text-info">
                  <i className="fas fa-reply" aria-hidden="true" />
                </span>
                <span className="icon has-text-success">
                  <i className="fas fa-caret-up" />
                  <small>2</small>
                </span>
                <span className="icon has-text-danger">
                  <i className="fas fa-caret-down" />
                  <small>1</small>
                </span>
                <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </nav>
          </div>
        </article>
      </div>
    );
  }
}

export default PostItem;
