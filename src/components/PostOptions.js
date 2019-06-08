import React, { Component } from "react";
import { connect } from "react-redux";
import { removePost } from "../actions/post";
import { postVote } from "../actions/vote";

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

const downIconStyle = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "flex-end",
  alignItems: "center",
  alignContent: "flex-end"
};

class PostOptions extends Component {
  render() {
    const { id, voteScore } = this.props.post;
    const { vote } = this.props;

    const score = vote[id] ? vote[id] : voteScore;
    return (
      <div className="column is-1 vote-box">
        <div className="columns is-desktop is-vcentered" style={postItemStyle}>
          <div className="column" style={upIconStyle}>
            <span onClick={() => this.props.postVote(id, "upVote", "posts")}>
              <i className="far fa-thumbs-up" />
            </span>
          </div>
          <div
            className="column"
            style={{ color: score >= 0 ? "green" : "red" }}
          >
            {score}
          </div>
          <div className="column" style={downIconStyle}>
            <span onClick={() => this.props.postVote(id, "downVote", "posts")}>
              <i className="far fa-thumbs-down" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ vote }) => ({ vote });

export default connect(
  mapStateToProps,
  { removePost, postVote }
)(PostOptions);
