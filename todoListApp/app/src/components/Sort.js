import React, { Component } from "react";

export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: {
        by: "name",
        value: 1,
      },
    };
  }
  onSort = async (sortBy, sortValue) => {
    await this.setState({
      sort: {
        by: sortBy,
        value: sortValue,
      },
    });
    this.props.onSort(this.state.sort);
  };
  render() {
    let { sort } = this.state;
    return (
      <>
        <div className="task-sort">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Săp xếp
            </button>
            <div className="dropdown-menu" aria-labelledby="triggerId">
              <li
                onClick={() => this.onSort("name", 1)}
                className={
                  sort.by === "name" && sort.value === 1 ? "sort-selected" : ""
                }
              >
                <a className="dropdown-item" href="#">
                  A-Z
                </a>
              </li>

              <li
                onClick={() => this.onSort("name", -1)}
                className={
                  sort.by === "name" && sort.value === -1 ? "sort-selected" : ""
                }
              >
                <a className="dropdown-item" href="#">
                  Z-A
                </a>
              </li>

              <li
                onClick={() => this.onSort("value", 1)}
                className={
                  sort.by === "value" && sort.value === 1 ? "sort-selected" : ""
                }
              >
                <a className="dropdown-item" href="#">
                  Active
                </a>
              </li>

              <li
                onClick={() => this.onSort("value", -1)}
                className={
                  sort.by === "value" && sort.value === -1
                    ? "sort-selected"
                    : ""
                }
              >
                <a className="dropdown-item" href="#">
                  Done
                </a>
              </li>
            </div>
          </div>
        </div>
      </>
    );
  }
}
