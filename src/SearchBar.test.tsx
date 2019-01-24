import SearchBar from "./SearchBar";
import * as React from "react";

import { shallow } from "enzyme";

it("can renders without crashing using enzyme", () => {
  const wrapper = shallow(<SearchBar />);

  expect(wrapper.find("div")).toHaveLength(1);
});
