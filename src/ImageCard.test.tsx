import ImageCard from "./ImageCard";
import * as React from "react";

import { shallow } from "enzyme";

it("can renders without crashing using enzyme", () => {
  const wrapper = shallow(<ImageCard alt="" key="" url={{ regular: " " }} />);

  expect(wrapper.find("img")).toHaveLength(1);
});
