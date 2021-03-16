import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

export default class SearchSort extends Component {
  render() {
    return (
      <>
        <div className="task-search-sort">
          <Search onSearch={this.props.onSearch} />

          <Sort onSort={this.props.onSort} />
        </div>
      </>
    );
  }
}
