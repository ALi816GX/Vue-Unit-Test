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

  it("test for actions", () => {
    const task = {
      key: 1,
      value: "test3",
      isChecked: false,
      isEditable: false
    };
    const _taskList = store.getters.taskList(state);
    expect(_taskList.length).toEqual(2);
    // store.actions.saveTaskToList(task)
    // expect(_taskList.length).toEqual(2);
  });
});
