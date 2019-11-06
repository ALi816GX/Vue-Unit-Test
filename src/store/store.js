import _ from 'lodash'

const states = {
  buttonState: "ALL",
  taskList: [],
  taskListByState: [],
  listLength: 0
};

const getters = {
  buttonState: state => state.buttonState,
  taskList: state => state.taskList,
  taskListByState: state => state.taskListByState,
  listLength: state => state.taskList.length
};

const mutations = {
  setButtonState(state, value) {
    state.buttonState = value;
  },
  setTaskList(state, value) {
    state.taskList = value;
  },
  setTaskListByState(state, value) {
    state.taskListByState = value;
  }
};

const actions = {
  saveTaskToList({ commit, getters, dispatch }, task) {
    commit("setTaskList", _saveTask(getters.taskList, task));
    dispatch("changeTaskListByState");
  },
  changeButtonState({ commit, dispatch }, value) {
    commit("setButtonState", value);
    dispatch("changeTaskListByState");
  },
  changeTaskListByState({ commit, getters }) {
    const STATE_TO_VALUE = {
      ALL: _.cloneDeep(getters.taskList),
      Active: getters.taskList.filter(item => !item.isChecked),
      Complete: getters.taskList.filter(item => item.isChecked)
    };
    commit("setTaskListByState", STATE_TO_VALUE[getters.buttonState]);
  }
};

const _saveTask = (taskList, task) => {
  const index = _.findIndex(taskList, item => {
    return item.key === task.key;
  });
  if (index === -1) {
    taskList.push(task);
  } else {
    taskList[index] = task;
  }
  return taskList;
};

export default {
  state: states,
  getters,
  mutations,
  actions
};
