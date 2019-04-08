import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/posts";
import PostItem from "./PostItem";

class PostsPanel extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    if (this.props.posts.posts.length !== undefined) {
      return this.props.posts.posts.map(post => {
        return (
          <PostItem
            key={post.id}
            post={post}
          />
        );
      });
    }
  }

  render() {
    console.log(this.props.posts.posts)
    return (
      <div>
        <div className="container is-fluid">{this.renderList()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsPanel);
