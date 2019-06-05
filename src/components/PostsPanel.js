import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/posts";
import { sortPosts } from "../actions/sortPosts";
import PostItem from "./PostItem";
import LoadingBar from "react-redux-loading-bar";

class PostsPanel extends Component {
  componentDidMount = () => {
    this.props.fetchPosts();
  };

  render() {
    const postsNotDeleted = this.props.posts.filter(
      post => post.deleted === false
    );
    const { category } = this.props.match.params;
    // show posts by category
    const showingPosts = !category
      ? postsNotDeleted
      : postsNotDeleted.filter(post => post.category === category);
    // sort posts by date or score
    const { orderBy, sortBy } = this.props.sort;
    const { sortPosts } = this.props;
    const sortedPosts = orderBy
      ? showingPosts.sort((a, b) => a[sortBy] - b[sortBy])
      : showingPosts.sort((a, b) => b[sortBy] - a[sortBy]);

    return (
      <div>
        <LoadingBar />
        <div className="container is-fluid">
          <div className="field is-grouped">
            <p className="control">
              <button
                className="button is-light"
                onClick={() => sortPosts(!orderBy, "timestamp")}
              >
                By Date
              </button>
            </p>
            <p className="control">
              <button
                className="button is-light"
                onClick={() => sortPosts(!orderBy, "voteScore")}
              >
                By Score
              </button>
            </p>
          </div>
          {sortedPosts.length === 0 ? (
            <h3>No posts available</h3>
          ) : (
            sortedPosts.map(post => <PostItem post={post} key={post.id} />)
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ posts, sort }) => ({ posts, sort });
export default connect(
  mapStateToProps,
  { fetchPosts, sortPosts }
)(PostsPanel);
