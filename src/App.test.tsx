import App from "./App";
import * as React from "react";

import { shallow } from "enzyme";

it("can renders without crashing using enzyme", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(".container")).toHaveLength(1);
});
