import ImageList from "./ImageList";
import * as React from "react";

import { shallow } from "enzyme";

it("can renders without crashing using enzyme", () => {
  const wrapper = shallow(<ImageList images={[]} />);

  expect(wrapper.find(".image-list")).toHaveLength(1);
});
