import React from "react";
import PostItem from "./PostItem";

const postsPanelStyle = {
  padding: "30px"
};

const PostsPanel = () => {
  return (
    <div className="container is-fluid" style={postsPanelStyle}>
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
};

export default PostsPanel;
