import React from "react";
import PostItem from "./PostItem";

const PostsPanel = () => {
  return (
    <div className="container is-fluid">
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
};

export default PostsPanel;
