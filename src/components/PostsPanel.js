import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/posts";

class PostsPanel extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {
    }

    render() {
        console.log(this.props.posts)
    return (
      <div>
        <div className="container is-fluid">

        </div>
      </div>
    );
  }
}

function mapStateToProps (state)  {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsPanel);
