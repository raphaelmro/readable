import React, { Component } from "react";
import CommentsForm from "./CommentsForm";
import { removeComment } from "../actions/comments";
import { connect } from "react-redux";
import { postVote } from "../actions/vote";

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

class CommentsList extends Component {
  state = {
    showEdit: false,
    comment: {}
  };

  handleVote = (vote, id) => {
    if (vote === "up") {
      this.props.postVote(id, "upVote", "comments");
    } else if (vote === "down") {
      this.props.postVote(id, "downVote", "comments");
    }
  };

  setEdit = comment => this.setState({ showEdit: true, comment });
  cancelEdit = () => this.setState({ showEdit: false });

  render() {
    const { comments, parentId } = this.props;
    const { showEdit, comment } = this.state;

    return (
      <div className="box">
        <h3>Comments</h3>
        {!showEdit ? (
          comments.map(comment => (
            <article className="message is-dark" key={comment.id}>
              <div className="message-header">
                <p>
                  {comment.author} -{" "}
                  {new Date(comment.timestamp).toString().substr(0, 21)}
                </p>
                <div
                  className="column"
                  style={upIconStyle}
                  onClick={() => this.handleVote("up", comment.id)}
                >
                  <span>
                    <i className="far fa-thumbs-up" />
                  </span>
                </div>
                <div
                  className="column"
                  style={downIconStyle}
                  onClick={() => this.handleVote("down", comment.id)}
                >
                  <span>
                    <i className="far fa-thumbs-down" />
                  </span>
                </div>
                <div
                  className="column"
                  style={{ color: comment.voteScore > 0 ? "green" : "red" }}
                >
                  {comment.voteScore}
                </div>
                <span onClick={() => this.setEdit(comment)}>
                  <i className="far fa-edit" />
                </span>
                <button
                  className="delete"
                  aria-label="delete"
                  onClick={() => this.props.removeComment(comment)}
                />
              </div>
              <div className="message-body">{comment.body}</div>
            </article>
          ))
        ) : (
          <CommentsForm
            comment={comment}
            parentId={parentId}
            hideEdit={this.cancelEdit}
          >
            <button onClick={() => this.cancelEdit()}>Cancel</button>
          </CommentsForm>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => ({ comments });
export default connect(
  mapStateToProps,
  { removeComment, postVote }
)(CommentsList);
