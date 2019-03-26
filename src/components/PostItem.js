import React from "react";
import moment from "moment";

const PostItem = props => {
  const { timestamp, title, author, body, commentCount } = props;

  return (
    <div className="box">
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
                <span className="icon has-text-success">
                  <i className="fas fa-caret-up" />
                  <small>2</small>
                </span>
              </div>
              <div className="level-item">
                <span className="icon has-text-danger">
                  <i className="fas fa-caret-down" />
                  <small>1</small>
                </span>
              </div>
              <div className="level-item">
                <small>{moment(timestamp).format("lll")}</small>
              </div>
            </div>
          </nav>
        </div>
      </article>
    </div>
  );
};

export default PostItem;
