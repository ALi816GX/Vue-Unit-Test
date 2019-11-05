import InputField from "@/components/InputField";
import { mount } from "@vue/test-utils";

describe("Test For TodoList", () => {
  const wrapper = mount(InputField);
  wrapper.setData({
    itemValue: "default",
    keyUp: "default"
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
  });

  it("Should trigger event When click button ", () => {
    wrapper.setData({
      keyUp: "button"
    });
      expect(wrapper.vm.keyUp).toBe("button");
      const button = wrapper.find('input[type="button"]');
      button.trigger("click");
      expect(wrapper.vm.keyUp).toBe("test");
  });
});
