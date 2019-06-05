import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../actions/categories";
import { Link } from "react-router-dom";

class CategoriesPanel extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="container is-fluid">
        <nav className="panel">
          <p className="panel-heading">Categories</p>
          <p className="panel-tabs">
            <Link to="/"> All categories </Link>
          </p>
          {categories.map((category, index) => (
            <Link
              to={`/${category.name}`}
              key={`${category.name}-${index}`}
              className="panel-block"
            >
              <span className="panel-icon">
                <i className="fas fa-hashtag" aria-hidden="true" />
              </span>
              {category.name}
            </Link>
          ))}
        </nav>
        <Link className="button" to="/new">
          New Post
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => ({ categories });
export default connect(
  mapStateToProps,
  { fetchCategories }
)(CategoriesPanel);
