import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { votePost } from "../actions/posts";

const postItemStyle = {
  display: "flex",
  flexDirection: "column"
};

const upIconStyle = {
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "center",
  alignContent: "flex-start"
};

/*const voteScoreStyle = {
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center"
};*/

const downIconStyle = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "flex-end",
  alignItems: "center",
  alignContent: "flex-end"
};

class PostItem extends Component {
  render() {
    const { post, votePost } = this.props;

    return (
      <div className="box">
        <div className="columns">
          <div className="column is-1 vote-box">
            <div
              className="columns is-desktop is-vcentered"
              style={postItemStyle}
            >
              <div className="column" style={upIconStyle}>
                <span
                  className="icon"
                  onClick={() => votePost(post.id, "upVote")}
                >
                  <i className="fas fa-caret-up" />
                </span>
              </div>
              <div
                className="column"
                style={{ color: post.voteScore > 0 ? "green" : "red" }}
              >
                {post.voteScore}
              </div>
              <div className="column" style={downIconStyle}>
                <span
                  className="icon"
                  onClick={() => votePost(post.id, "downVote")}
                >
                  <i className="fas fa-caret-down" />
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{post.title}</strong>
                    <br />
                    <small>@{post.author}</small>
                    <br />
                    {post.body}
                  </p>
                </div>
                <nav className="level is-mobile">
                  <div className="level-left">
                    <div className="level-item">
                      <span className="icon has-text-info">
                        <i className="fas fa-reply" aria-hidden="true" />
                        <small>
                          {post.commentCount !== 0 ? post.commentCount : ""}
                        </small>
                      </span>
                    </div>
                    <div className="level-item">
                      <small>{moment(post.timestamp).format("lll")}</small>
                    </div>
                  </div>
                </nav>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
export default connect(
  mapStateToProps,
  { votePost }
)(PostItem);
