import React from "react";

const LinksPanel = () => {
  return (
    <div className="container is-fluid">
      <nav className="panel">
        <p className="panel-heading">Categories</p>
        <a className="panel-block" href="https://github.com">
          <span className="panel-icon">
            <i className="fas fa-hashtag" aria-hidden="true" />
          </span>
          React
        </a>
        <a className="panel-block" href="https://github.com">
          <span className="panel-icon">
            <i className="fas fa-hashtag" aria-hidden="true" />
          </span>
          Redux
        </a>
        <a className="panel-block" href="https://github.com">
          <span className="panel-icon">
            <i className="fas fa-hashtag" aria-hidden="true" />
          </span>
          React-router
        </a>
      </nav>
    </div>
  );
};

export default LinksPanel;
