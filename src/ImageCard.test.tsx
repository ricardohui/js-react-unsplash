import ImageCard from "./ImageCard";
import * as React from "react";

import { shallow } from "enzyme";

it("can renders without crashing using enzyme", () => {
  const wrapper = shallow(<ImageCard />);

  expect(wrapper.text()).toBe("ImageCard");
});
