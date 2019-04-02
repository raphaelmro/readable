import React, { Component } from "react";
import CategoriesItem from "./CategoriesItem";
import { connect } from "react-redux";
import { fetchCategories } from "../actions/categories";

class CategoriesPanel extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderList() {
    if (this.props.categories.categories !== undefined) {
      return this.props.categories.categories.map(category => {
        return <CategoriesItem name={category.name} path={category.path} />;
      });
    }
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
