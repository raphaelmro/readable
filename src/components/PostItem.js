import React from "react";
import moment from "moment";

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

const voteScoreStyle = {
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center"
};

const downIconStyle = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "flex-end",
  alignItems: "center",
  alignContent: "flex-end"
};

const PostItem = props => {
  const { timestamp, title, author, body, commentCount, voteScore } = props;

  return (
    <div className="box">
      <div className="columns">
        <div className="column is-1 vote-box">
          <div
            className="columns is-desktop is-vcentered"
            style={postItemStyle}
          >
            <div className="column" style={upIconStyle}>
              <span className="icon">
                <i className="fas fa-caret-up" />
              </span>
            </div>
            <div className="column" style={voteScoreStyle} style={{color: voteScore > 0 ? 'green': 'red'}}>
              {voteScore}
            </div>
            <div className="column" style={downIconStyle}>
              <span className="icon">
                <i className="fas fa-caret-down" />
              </span>
            </div>
            {/*
             */}
          </div>
        </div>
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
                      <small>{commentCount !== 0 ? commentCount : ""}</small>
                    </span>
                  </div>
                  {/*<div className="level-item">
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
                  </div>*/}
                  <div className="level-item">
                    <small>{moment(timestamp).format("lll")}</small>
                  </div>
                </div>
              </nav>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
