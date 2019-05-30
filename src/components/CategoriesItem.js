import React from "react";
import { Link } from "react-router-dom";

const CategoriesItem = props => {
  const { name, path } = props;
  return (
    <Link to={`/${path}`} className="panel-block">
      <span className="panel-icon">
        <i className="fas fa-hashtag" aria-hidden="true" />
      </span>
      {name}
    </Link>
  );
};

export default CategoriesItem;
