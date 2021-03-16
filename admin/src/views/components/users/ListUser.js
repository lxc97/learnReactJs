import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Tag, Space, Input } from "antd";
import { fetchUsers } from "../../../actions/users";

const { Search } = Input;

class ListUser extends Component {
  constructor() {
    super();
    this.state = {
      columns: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          render: (text) => <a>{text}</a>,
        },
        {
          title: "Age",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "Address",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "Tags",
          key: "tags",
          dataIndex: "tags",
          render: (tags) => (
            <>
              {tags.map((tag) => (
                <Tag color={"green"} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              ))}
            </>
          ),
        },
        {
          title: "Action",
          key: "action",
          render: () => (
            <Space size="middle">
              <a>View</a>
              <a>Edit</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ],
      key: "",
      current: 1,
      pageSize: 6,
    };
  }

  componentDidMount() {
    const { key, current, pageSize } = this.state;
    this.props.fetchUsers({ key, current, pageSize });
  }
  onFetchUsers = (key, current) => {
    const { pageSize } = this.state;
    this.props.fetchUsers({ key, current, pageSize });
  };
  onPageChange = (current) => {
    this.setState({ current });
    this.onFetchUsers(this.state.key, current);
  };
  onSearch = (key) => {
    this.setState({ key, current: 1 });
    this.onFetchUsers(key, 1);
  };
  onSearchChange = (event) => {
    let key = event.target.value

    this.onSearch(key)
  };
  render() {
    let { columns, current, pageSize } = this.state;
    let { list } = this.props;
    return (
      <>
        <Search
          placeholder="input search text"
          onSearch={this.onSearch}
          onChange={this.onSearchChange}
          enterButton
          style={{ width: 300, margin: "10px 0" }}
        />
        <Table
          loading={list.loading}
          columns={columns}
          dataSource={list.users}
          pagination={{
            pageSize,
            current,
            total: list.total,
            onChange: this.onPageChange,
          }}
        />
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    list: state.users.list,
  };
}

export default connect(mapStateToProps, { fetchUsers })(ListUser);
