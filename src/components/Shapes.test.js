import React from "react";
import Shapes from "./Shapes";
import { shallow } from "enzyme";

describe("component render", () => {
  it("renders shape component without fail", () => {
    shallow(<Shapes />);
  });
  it("component has no shape with empty state", () => {
    const wrapper = shallow(<Shapes />);
    expect(wrapper.find(".shape-con").length).toBe(0);
  });
});
