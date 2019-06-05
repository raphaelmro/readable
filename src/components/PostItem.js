import React, { Component } from "react";
import moment from "moment";
import PostOptions from "./PostOptions";
import { Link } from "react-router-dom";
import { removePost } from "../actions/post";
import { connect } from "react-redux";

class PostItem extends Component {
  render() {
    const { id } = this.props.post;
    const {
      history,
      post
    } = this.props;

    return (
      <div className="box">
        <div className="columns">
          <PostOptions post={post} commentCount={post.commentCount} />
          <div className="column">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <p>
                    <Link to={`/${post.category}/${post.id}`}>
                      <strong>{post.title}</strong>
                    </Link>
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
    );
  }
}

const mapStateToProps = ({ vote }) => ({ vote });
export default connect(
  mapStateToProps,
  { removePost }
)(PostItem);
