import SearchBar from "./SearchBar";
import * as React from "react";

import { shallow } from "enzyme";

it("can renders without crashing using enzyme", () => {
  const onSubmit = (term: String) => {};
  const wrapper = shallow(<SearchBar onSubmit={onSubmit} />);

  expect(wrapper.find("div")).toHaveLength(1);
});
