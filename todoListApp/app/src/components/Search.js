import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };
  render() {
    let { keyword } = this.state;
    return (
      <>
        <div className="task-search">
          <input
            type="search"
            placeholder="Nhap tim kiem..."
            name="keyword"
            value={keyword}
            onChange={this.onChange}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onSearch}
          >
            Tìm kiếm
          </button>
        </div>
      </>
    );
  }
}
