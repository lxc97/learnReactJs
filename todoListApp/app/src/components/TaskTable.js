import React, { Component } from "react";
import TaskList from "./TaskList";

export default class TaskTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1, // -1 All, active 1 , done 0
    };
  }
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value,
    });
  };

  render() {
    let { tasks } = this.props;
    let { filterName, filterStatus } = this.state;
    let elmTask = tasks.map((task, index) => {
      return (
        <TaskList
          key={index}
          index={index}
          task={task}
          onUpdateStatus={this.props.onUpdateStatus}
          onDeleteTask={this.props.onDeleteTask}
          onEditTask={this.props.onEditTask}
        />
      );
    });
    return (
      <>
        <div className="task-table">
          <table>
            <tbody>
              <tr>
                <th>Stt</th>
                <th>Tên</th>
                <th>Trạng Thái</th>
                <th>Hành động</th>
              </tr>
              <tr className="table-search">
                <td colSpan="2">
                  <input
                    type="search"
                    name="filterName"
                    id=""
                    value={filterName}
                    onChange={this.onChange}
                  />
                </td>
                <td className="task-status">
                  <select
                    name="filterStatus"
                    value={filterStatus}
                    onChange={this.onChange}
                  >
                    <option value={-1}>All</option>
                    <option value={1}>Active</option>
                    <option value={0}>Done</option>
                  </select>
                </td>
                <td></td>
              </tr>

              {elmTask}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
