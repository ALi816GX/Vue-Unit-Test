import store from "@/store/store";

describe("Test For store", () => {
  let state;
  beforeEach(() => {
    state = {
      buttonState: "ALL",
      taskList: [
        {
          key: 0,
          value: "test1",
          isChecked: true,
          isEditable: false
        },
        {
          key: 1,
          value: "test2",
          isChecked: false,
          isEditable: true
        }
      ],
      taskListByState: [
        {
          key: 0,
          value: "test1",
          isChecked: false,
          isEditable: false
        }
      ],
      listLength: 0
    };
  });

  it("test for getters", () => {
    const _buttonState = store.getters.buttonState(state);
    const _taskList = store.getters.taskList(state);
    const _taskListByState = store.getters.taskListByState(state);
    const _listLength = store.getters.listLength(state);
    expect(_buttonState).toEqual(state.buttonState);
    expect(_taskList).toEqual(state.taskList);
    expect(_taskListByState).toEqual(state.taskListByState);
    expect(_listLength).toEqual(2);
  });

  it("test for mutation", () => {
    //test buttonState
    store.mutations.setButtonState(state, "Complete");
    const _buttonState = store.getters.buttonState(state);
    expect(_buttonState).toEqual("Complete");

    // test taskList
    const testObject = {
      key: 2,
      value: "test3",
      isChecked: false,
      isEditable: false
    };
    store.mutations.setTaskList(state, testObject);
    const _taskList = store.getters.taskList(state);
    expect(_taskList).toEqual(testObject);

    // test taskListByState
    store.mutations.setTaskListByState(state, testObject);
    const _taskListByState = store.getters.taskListByState(state);
    expect(_taskListByState).toEqual(testObject);
  });

  it("test for actions - saveTaskToList", () => {
    const commit = jest.fn();
    const dispatch = jest.fn();
    const getters = {
      taskList: [
        {
          key: 1,
          value: "test3",
          isChecked: false,
          isEditable: false
        }
      ]
    };

    // test when task not exist
    const task = {
      key: 1,
      value: "test3",
      isChecked: false,
      isEditable: false
    };
    store.actions.saveTaskToList({ commit, getters, dispatch }, task);
    expect(commit).toHaveBeenCalledTimes(1);
    expect(commit).toHaveBeenCalledWith("setTaskList", getters.taskList);
    expect(getters.taskList.length).toBe(1);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith("changeTaskListByState");

    // test when task exist
    const task2 = {
      key: 2,
      value: "test3",
      isChecked: false,
      isEditable: false
    };
    store.actions.saveTaskToList({ commit, getters, dispatch }, task2);
    expect(getters.taskList.length).toBe(2);
  });

  it("test for actions - changeButtonState", () => {
    const commit = jest.fn();
    const dispatch = jest.fn();
    const buttonValue = "Complete";
    store.actions.changeButtonState({ commit, dispatch }, buttonValue);

    expect(commit).toHaveBeenCalledTimes(1);
    expect(commit).toHaveBeenCalledWith("setButtonState", buttonValue);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith("changeTaskListByState");
  });

  it("test for actions - changeTaskListByState", () => {
    const getters = {
      taskList: [
        {
          key: 1,
          value: "test3",
          isChecked: false,
          isEditable: false
        }
      ],
      buttonState: "Complete"
    };
    const commit = jest.fn();

    store.actions.changeTaskListByState({commit,getters})
    expect(commit).toHaveBeenCalledTimes(1);
    expect(commit).toHaveBeenCalledWith("setTaskListByState",[]);
  });
});
