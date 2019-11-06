import ListContainer from "@/components/ListContainer";
import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Test For ListContainer", () => {
  let wrapper, store, getters, actions;
  const stubs = ["check-task-bar"];
  beforeEach(() => {
    getters = {
      taskListByState: () => [{}]
    };
    actions = {
      changeButtonState: jest.fn()
    };
    store = new Vuex.Store({
      getters,
      actions
    });
    wrapper = mount(ListContainer, {
      localVue,
      store,
      stubs
    });
  });

  it("Should renders the three button", () => {
    const buttons = wrapper.findAll("button");
    expect(buttons.length).toBe(3);
    expect(buttons.at(0).text()).toBe("ALL");
    expect(buttons.at(1).text()).toBe("Active");
    expect(buttons.at(2).text()).toBe("Complete");
  });

  it("Should call actions and emmit button name when click ALL", () => {
    const ALL_Button = wrapper.find("button");
    ALL_Button.trigger("click");
    expect(actions.changeButtonState).toHaveBeenCalled();
    expect(wrapper.emitted("showButtonName")[0][0]).toBe("ALL");
  });

  it("Should render list Given default taskListByState", () => {
    const inputs = wrapper.findAll("check-task-bar-stub");
    expect(inputs.length).toBe(1);
  });
});
