
const states = {
    buttonState: "ALL",
    taskList: [],
    taskListByState: [],
    listLength: 0
}


const getters = {
    buttonState: state => state.buttonState,
    taskList: state => state.taskList,
    taskListByState: state => state.taskListByState,
    listLength: state => state.taskList.length
}


const mutations = {
    setButtonState(state, value) {
        state.buttonState = value;
        this.commit("changeTaskListByState");
    },

    addTaskToList(state, value) {
        state.taskList.push(value);
        this.commit("changeTaskListByState");
    },
    changeTaskListByState(state) {
        const STATE_TO_VALUE = {
            ALL:state.taskList,
            Active:state.taskList.filter(item => !item.isChecked),
            Complete:state.taskList.filter(item => item.isChecked)
        };
        state.taskListByState = STATE_TO_VALUE[state.buttonState]
    }
}

export default {
    state: states,
    getters,
    mutations
}