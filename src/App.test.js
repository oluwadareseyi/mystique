import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("app render", () => {
  it("renders app component without fail", () => {
    shallow(<App />);
  });
});
