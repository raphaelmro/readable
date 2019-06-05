import React from "react";
import {Link} from "react-router-dom";

const containerHeaderStyle = {
  float: "left",
  paddingLeft: "4%"
};

const Header = () => {
  return (
    <section className="hero is-dark">
      <div className="hero-body">
        <div className="container" style={containerHeaderStyle}>
          <Link to={'/'}><h1 className="title">Twitty Posts</h1></Link>
          <h2 className="subtitle">Anon way to view posts</h2>
        </div>
      </div>
    </section>
  );
};

export default Header;
