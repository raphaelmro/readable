import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPosts } from "../actions/posts";
import PostItem from "./PostItem";

class PostsPanel extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  renderList() {
    const { posts } = this.props.posts;
    return posts.length > 0 && posts.map(post => <PostItem key={post.id} post={post} />);
  }

  render() {
    const { fetching, error } = this.props.posts;

    return (
        <div>
          <div className="container is-fluid">
            {fetching && <h1>Loading...</h1>}

            {!fetching && !!error && <h1>{error}</h1>}

            {!fetching && this.renderList()}
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(
    mapStateToProps,
    { loadPosts }
)(PostsPanel);
