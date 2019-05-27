import React, { Component } from "react";
import CategoriesItem from "./CategoriesItem";
import { connect } from "react-redux";
import { fetchCategories } from "../actions/categories";

class CategoriesPanel extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderList() {
    const { categories } = this.props.categories;
    return categories && categories.map((category, index) =>
        <CategoriesItem
            key={`${category.name}-${index}`}
            name={category.name}
            path={category.path} />
    )
  }

  render() {
    return (
        <div className="container is-fluid">
          <nav className="panel">
            <p className="panel-heading">Categories</p>
            {this.renderList()}
          </nav>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { categories: state.categories };
}

export default connect(
    mapStateToProps,
    { fetchCategories }
)(CategoriesPanel);