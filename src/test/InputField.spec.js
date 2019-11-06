import InputField from "@/components/InputField";
import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Test For InputField", () => {
  let wrapper, store, getters, actions;
  beforeEach(() => {
    getters = {
      listLength: jest.fn()
    };
    actions = {
      saveTaskToList: jest.fn()
    };
    store = new Vuex.Store({
      getters,
      actions
    });
    wrapper = mount(InputField, {
      localVue,
      store
    });
    wrapper.setData({
      itemValue: "default",
      keyUp: "default"
    });
  });

  it("should renders the input and button", () => {
    const input = wrapper.findAll("input").at(0);
    // const input = wrapper.find('input[type="text"]')
    expect(input.attributes().type).toEqual("text");
    const button = wrapper.findAll("input").at(1);
    // const button = wrapper.find('input[type="button"]')
    expect(button.attributes().type).toEqual("button");
    expect(button.attributes().value).toEqual("Add");
  });

  it("Should change value When set value in input Given : test", () => {
    expect(wrapper.vm.itemValue).toBe("default");
    const input = wrapper.find('input[type="text"]');
    input.setValue("test");
    //test v-model
    expect(wrapper.vm.itemValue).toBe("test");
  });

  it("Should trigger event When touch enter", () => {
    expect(wrapper.vm.keyUp).toBe("default");
    const input = wrapper.find('input[type="text"]');
    input.trigger("keyup.enter");
    //test v-model
    expect(wrapper.vm.keyUp).toBe("test");
    expect(getters.listLength).toHaveBeenCalled();
    expect(actions.saveTaskToList).toHaveBeenCalled();
  });

  it("Should trigger event When click button ", () => {
    wrapper.setData({
      keyUp: "button"
    });
    expect(wrapper.vm.keyUp).toBe("button");
    const button = wrapper.find('input[type="button"]');
    button.trigger("click");
    expect(wrapper.vm.keyUp).toBe("test");
    expect(getters.listLength).toHaveBeenCalled();
    expect(getters.listLength).toHaveBeenCalledTimes(1);
    expect(actions.saveTaskToList).toHaveBeenCalled();
    expect(actions.saveTaskToList).toHaveBeenCalledTimes(1);
  });

  it("Should not trigger event When input touch enter", () => {
    wrapper.setData({
      keyUp: "button"
    });
    const input = wrapper.find('input[type="text"]');
    input.setValue("   ");
    input.trigger("keyup.enter");
    expect(wrapper.vm.keyUp).toBe("test");
    expect(getters.listLength).not.toHaveBeenCalled();
    expect(actions.saveTaskToList).toHaveBeenCalledTimes(0);
  });
});
