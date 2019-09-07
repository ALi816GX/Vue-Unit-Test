import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);


const store = new Vuex.Store({

    state: {
        buttonState: "ALL",
        taskList: [],
        taskListByState: []
    },

    getters: {
        getButtonState(state) {
            return state.buttonState;
        },
        getTaskList(state) {
            return state.taskList;
        },
        getTaskListLength(state) {
            return state.taskList.length;
        },
        getTaskListByState(state) {
            return state.taskListByState;
        }
    },
    mutations: {

        setButtonState(state, value) {
            state.buttonState = value;
            store.commit("changeTaskListByState");
        },

        addTaskToList(state, value) {
            state.taskList.push(value);
            store.commit("changeTaskListByState");
        },
        changeTaskListByState(state) {
            switch (state.buttonState) {
                case 'ALL':
                    state.taskListByState = state.taskList;
                    break;
                case 'Active':
                    state.taskListByState = state.taskList.filter(item => !item.isChecked);
                    break;
                case 'Complete':
                    state.taskListByState = state.taskList.filter(item => item.isChecked);
                    break;
            }
        }
    }


});

export default store;