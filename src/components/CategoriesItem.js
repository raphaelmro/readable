import React, { Component } from "react";
import { Link } from "react-router-dom";

class CategoriesItem extends Component {

  handleCategoryList = () => {
    alert('Clicked!')
  }

  render() {
    const { name, path } = this.props;
    return (
      <Link to={`/${path}`} className="panel-block" onClick={this.handleCategoryList}>
      <span className="panel-icon">
        <i className="fas fa-hashtag" aria-hidden="true" />
      </span>
        {name}
      </Link>
    );
  }
};

export default CategoriesItem;
