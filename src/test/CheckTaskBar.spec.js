import CheckTaskBar from "@/components/CheckTaskBar";
import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Test For TodoList", () => {
  let wrapper, store, actions, mockTask;
  beforeEach(() => {
    actions = {
      saveTaskToList: jest.fn()
    };
    store = new Vuex.Store({
      actions
    });
    mockTask = {
      key: 0,
      value: "test",
      isChecked: false,
      isEditable: false
    };
    wrapper = mount(CheckTaskBar, {
      localVue,
      store,
      propsData: {
        task: mockTask
      }
    });
  });

  it("Should get the epxpect result When props data Given mockTask ", () => {
    expect(wrapper.props("task")).toBe(mockTask);
  });

  it("Should trigger the event saveTaskToList and change isEditable When touch selected ", () => {
    expect(wrapper.props("task")).toBe(mockTask);
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.trigger("click");
    expect(mockTask.isChecked).toBe(true);
    expect(actions.saveTaskToList).toHaveBeenCalled();
  });

  it("Should trigger the event saveTaskToList and change isEditable When span change value ",() => {
    const span = wrapper.find("span");
    expect(span.text()).toBe("test");
    expect(span.attributes().contenteditable).toBe("false");
    span.trigger("dblclick");
    expect(mockTask.isEditable).toBe(true);
    expect(actions.saveTaskToList).toHaveBeenCalled();
  });


});
