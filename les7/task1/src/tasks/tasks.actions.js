import * as tasksGateWay from './tasksGateWay';
import { taskListSelector } from './tasks.selectors';

export const TASKS_LIST_RICIVED = 'TASKS_LIST_RICIVED';

export const tasksListRecieved = tasksList => {
  const action = {
    type: TASKS_LIST_RICIVED,
    payload: {
      tasksList,
    },
  };
  return action;
};

export const getTaskList = () => {
  const thunkAction = function (dispatch) {
    tasksGateWay.fetchTasksList().then(tasksList => dispatch(tasksListRecieved(tasksList)));
  };
  return thunkAction;
};

export const updateTask = taskId => {
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const tasksList = taskListSelector(state);
    const task = tasksList.find(task => task.id === taskId);
    const updatedTask = {
      ...task,
      done: !task.done,
    };
    tasksGateWay.updateTask(taskId, updatedTask).then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};

export const deleteTask = taskId => {
  const thunkAction = function (dispatch) {
    tasksGateWay.deleteTask(taskId).then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};

export const createTask = text => {
  const thunkAction = function (dispatch) {
    const tastData = {
      text,
      done: false,
      createAt: new Date().toISOString(),
    };
    tasksGateWay.createTask(tastData).then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};
