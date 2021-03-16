import React, { Component } from "react";

export default class TaskList extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };
  onDeleteTask = () => {
    this.props.onDeleteTask(this.props.task.id);
  };
  onEditTask = () => {
    this.props.onEditTask(this.props.task.id);
  };
  render() {
    let { task, index } = this.props;
    return (
      <>
        <tr>
          <td className="task-list-stt">{index + 1}</td>
          <td className="task-list-content">{task.name}</td>
          <td className="task-list-status">
            <button
              type="button"
              className={
                task.status === true ? "btn btn-danger" : "btn btn-success"
              }
              onClick={this.onUpdateStatus}
            >
              {task.status === true ? "Active" : "Done"}
            </button>
          </td>
          <td className="task-list-action">
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.onEditTask}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.onDeleteTask}
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  }
}
