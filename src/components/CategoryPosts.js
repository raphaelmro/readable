import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPosts, sortByDate, sortByScore } from "../actions/posts";
import PostItem from "./PostItem";
import LoadingBar from "react-redux-loading-bar";

class PostsPanel extends Component {
  state = {
    selectedValue: "selected"
  };

  componentDidMount() {
    this.props.loadPosts();
  }

  sortByDate = posts => {
    this.props.sortByDate(posts.posts);
  };

  sortByScore = posts => {
    this.props.sortByScore(posts.posts);
  };

  renderList() {
    const { posts } = this.props.posts;
    return (
      posts.length > 0 &&
      posts.map(post => <PostItem key={post.id} post={post} />)
    );
  }

  handleChange = event => {
    if (event.target.value === "date") {
      this.setState({
        selectedValue: "date"
      });
      this.sortByDate(this.props.posts);
    } else if (event.target.value === "score") {
      this.setState({
        selectedValue: "score"
      });
      this.sortByScore(this.props.posts);
    } else {
      this.setState({
        selectedValue: "selected"
      });
    }
  };

  render() {
    const { fetching, error } = this.props.posts;
    return (
      <div>
        <LoadingBar />
        <div className="container is-fluid">
          <span className="sort-title">Sort </span>
          <div className="select is-small">
            <select
              onChange={this.handleChange}
              value={this.state.selectedValue}
            >
              <option>- Select an option -</option>
              <option value="date">by Date</option>
              <option value="score">by Score</option>
            </select>
          </div>
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
});

const mapDispatchToProps = dispatch => ({
  sortByDate: posts => dispatch(sortByDate(posts)),
  sortByScore: posts => dispatch(sortByScore(posts)),
  loadPosts: () => dispatch(loadPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsPanel);
