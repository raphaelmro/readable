import React, { Fragment } from "react";

const CategoriesItem = (props) => {
    const { name,/*path*/ } = props;
  return (
    <Fragment>
      <a className="panel-block" href="https://github.com">
        <span className="panel-icon">
          <i className="fas fa-hashtag" aria-hidden="true" />
        </span>
        {name}
      </a>
    </Fragment>
  );
};

export default CategoriesItem;
