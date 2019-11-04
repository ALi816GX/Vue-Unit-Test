import Header from "@/components/Header";
import { mount } from "@vue/test-utils";

describe("Test For TodoList", () => {
  const wrapper = mount(Header);

  it("should renders the correct title", () => {
    //标签选择器
    const title = wrapper.find("h3");
    const expectResult = "Jquery To Do List";
    const actualResult = title.text();
    expect(actualResult).toBe(expectResult);
    expect(actualResult).toEqual(expectResult);
    expect(actualResult).toContain(expectResult);
    expect(actualResult).toMatch(expectResult);
    //匹配器：
    //toBe/toEqual/toMatch(支持正则)/toContain 见jest 官网
  });

  it("should renders the correct content", () => {
    // const content = wrapper.findAll("span").at(1);
    const content = wrapper.find(".AB.testA"); //默认第一个 多个样式修饰
    const content2 = wrapper.find(".AB .testB"); //默认第一个 父子样式定位
    const expectResult = "Simple Todo List with adding and filter by diff status";
    const expectResult2 = "Simple Todo List with adding and filter by diff status2";
    const actualResult = content.text();
    const actualResult2 = content2.text();
    expect(actualResult).toBe(expectResult);
    expect(actualResult2).toBe(expectResult2);
  });
});
