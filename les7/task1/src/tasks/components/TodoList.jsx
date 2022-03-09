import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateTaskInput from './CreateTaskInput.jsx';
import TasksList from './TasksList.jsx';
import * as tasksAction from '../tasks.actions';
import { sortedTaskListSelector } from '../tasks.selectors';
import PropTypes from 'prop-types';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.props.createTask} />
          <TasksList
            tasks={this.props.tasks}
            handleTaskStatusChange={this.props.updateTask}
            handleTaskDelete={this.props.deleteTask}
          />
        </main>
      </>
    );
  }
}

const mapDispatch = {
  getTaskList: tasksAction.getTaskList,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
  createTask: tasksAction.createTask,
};

const mapState = state => {
  return {
    tasks: sortedTaskListSelector(state),
  };
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTaskList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(TodoList);
