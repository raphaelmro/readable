import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/posts";
import PostItem from "./PostItem";

class PostsPanel extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <PostItem
          key={post.id}
          title={post.title}
          author={post.author}
          body={post.body}
          commentCount={post.commentCount}
          timestamp={post.timestamp}
        />
      );
    });
  }

  render() {
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
