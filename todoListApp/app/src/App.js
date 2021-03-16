import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import AddTask from "./components/AddTask";
import SearchSort from "./components/SearchSort";
import TaskTable from "./components/TaskTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], //id: unique , name , status
      isDisplayAddTask: false,
      editTask: null,
      filter: {
        name: "",
        status: -1,
      },
      keyword: "",
      sort: {
        by: "name",
        value: 1,
      },
    };
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      let tasks = localStorage.getItem("tasks");
      this.setState({
        tasks: JSON.parse(tasks),
      });
    }
  }

  onToggleForm = () => {
    if (this.state.isDisplayAddTask && this.state.editTask !== null) {
      this.setState({
        isDisplayAddTask: true,
        editTask: null,
      });
    } else {
      this.setState({
        isDisplayAddTask: !this.state.isDisplayAddTask,
        editTask: null,
      });
    }
  };

  onCloseAddTask = () => {
    this.setState({
      isDisplayAddTask: false,
    });
  };
  onOpenAddTask = () => {
    this.setState({
      isDisplayAddTask: true,
    });
  };

  onSubmit = (data) => {
    let { tasks } = this.state;
    if (data.id === "") {
      let task = {
        id: uuidv4(),
        name: data.name,
        status: data.status,
      };
      tasks.push(task);
    } else {
      //Editing
      let index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      editTask: null,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  onUpdateStatus = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks,
      });
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  findIndex = (id) => {
    let { tasks } = this.state;
    let result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };

  onDeleteTask = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks,
      });
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.onCloseAddTask();
  };

  onEditTask = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    let editTask = tasks[index];
    this.setState({
      editTask: editTask,
    });
    this.onOpenAddTask();
  };

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus,
      },
    });
  };

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword,
    });
  };
  onSort = (sort) => {
    this.setState({
      sort: {
        by: sort.by,
        value: sort.value,
      },
    });
  };
  render() {
    let {
      tasks,
      isDisplayAddTask,
      editTask,
      filter,
      keyword,
      sort,
    } = this.state;
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }

      tasks = tasks.filter((task) => {
        if (filter.status === -1) {
          return task;
        } else {
          return task.status === (filter.status === 1 ? true : false);
        }
      });
    }
    if (keyword) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }
    let elmAddTask =
      isDisplayAddTask === true ? (
        <AddTask
          onCloseAddTask={this.onCloseAddTask}
          onSubmit={this.onSubmit}
          taskEdit={editTask}
        />
      ) : (
        ""
      );
    if (sort.by === "name") {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sort.value;
        else if (a.name < b.name) return -sort.value;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return -sort.value;
        else if (a.status < b.status) return sort.value;
        else return 0;
      });
    }

    return (
      <>
        <div className="container">
          <h1 className="caption">Quản lí công việc</h1>

          <div className="container-content">
            {elmAddTask}

            <div className="content-right">
              <div className="add-task-btn">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.onToggleForm}
                >
                  Thêm công việc
                </button>
              </div>

              <SearchSort onSearch={this.onSearch} onSort={this.onSort} />

              <TaskTable
                tasks={tasks}
                onUpdateStatus={this.onUpdateStatus}
                onDeleteTask={this.onDeleteTask}
                onEditTask={this.onEditTask}
                onFilter={this.onFilter}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
