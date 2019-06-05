import React, { Component } from "react";
import moment from "moment";
import PostOptions from "./PostOptions";
import { connect } from "react-redux";
import CommentsList from "./CommentsList";
import CommentsForm from "./CommentsForm";
import { fetchComments } from "../actions/comments";
import { fetchPost } from "../actions/post";
import { fetchPosts } from "../actions/posts";
import { removePost } from "../actions/post";
import { Link } from "react-router-dom";

class PostDetails extends Component {
  componentDidMount = () => {
    const { postId } = this.props.match.params;
    this.props.fetchPost(postId);
    this.props.fetchComments(postId);
    this.props.fetchPosts();
  };
  render() {
    const { post, comments, history } = this.props;
    const { id, author, title, body, timestamp, commentCount } = post;
    const commentsNotDeleted = comments.filter(
      comment => comment.deleted === false
    );
    return (
      <div className="container is-fluid">
        <div className="box">
          <div className="columns">
            <PostOptions
              post={post}
              commentCount={commentCount}
              history={history}
            />
            <div className="column">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{title}</strong>
                      <br />
                      <small>@{author}</small>
                      <br />
                      {body}
                    </p>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <div className="level-item">
                        <span className="icon has-text-info">
                          <i className="fas fa-reply" aria-hidden="true" />
                          <small>
                            {commentCount !== 0 ? commentCount : ""}
                          </small>
                        </span>
                      </div>
                      <div className="level-item">
                        <small>{moment(timestamp).format("lll")}</small>
                      </div>
                    </div>
                    <div className="level-right">
                      <Link to={`/edit/${id}`}>
                        <i className="far fa-edit" />
                      </Link>
                      <span
                        onClick={() => {
                          this.props.removePost(post);
                          history && history.push("/");
                        }}
                      >
                        <i className="far fa-trash-alt" />
                      </span>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </div>
        </div>
        <CommentsList parentId={id} comments={commentsNotDeleted} />
        <CommentsForm parentId={id} />
      </div>
    );
  }
}

const mapStateToProps = ({ post, comments }) => ({ post, comments });
export default connect(
  mapStateToProps,
  { fetchComments, fetchPost, fetchPosts, removePost }
)(PostDetails);
