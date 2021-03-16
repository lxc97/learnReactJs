import React, { Component } from "react";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }

  componentWillMount() {
    if (this.props.taskEdit) {
      this.setState({
        id: this.props.taskEdit.id,
        name: this.props.taskEdit.name,
        status: this.props.taskEdit.status,
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.taskEdit) {
      this.setState({
        id: nextProps.taskEdit.id,
        name: nextProps.taskEdit.name,
        status: nextProps.taskEdit.status,
      });
    } else if (!nextProps.taskEdit) {
      this.setState({
        id: "",
        name: "",
        status: false,
      });
    }
  }
  onCloseAddTask = () => {
    this.props.onCloseAddTask();
  };

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onCloseAddTask();
    this.onClear();
  };

  onClear = () => {
    this.setState({
      name: "",
      status: false,
    });
  };
  render() {
    let { id } = this.state;
    return (
      <>
        <div className="content-left">
          <div className="add-Task">
            <div className="add-task-title">
              <p>{id !== "" ? "Cập nhập công việc" : "Thêm công việc"}</p>
              <span onClick={this.onCloseAddTask}>
                <i className="fas fa-times-circle" />
              </span>
            </div>
            <form onSubmit={this.onSubmit}>
              <div className="add-task-name">
                <label htmlFor="name">Tên:</label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="add-task-status">
                <label htmlFor="status">Trạng thái:</label>
                <br />
                <select
                  name="status"
                  id="status"
                  value={this.state.status}
                  onChange={this.onChange}
                >
                  <option value={true}>Active</option>
                  <option value={false}>Done</option>
                </select>
              </div>
              <div className="add-task-action">
                <button type="submit" className="btn btn-primary">
                  Lưu lại
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.onClear}
                >
                  Hủy bỏ
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default AddTask;
