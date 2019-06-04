import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { loadVotePost } from "../actions/posts";
import PostOptions from "./PostOptions";

const PostItem = ({ post }) => (
  <div className="box">
    <div className="columns">
      <PostOptions
        post={post}
        commentCount={post.commentCount}
      />
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

export default PostItem
