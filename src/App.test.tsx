import App from "./App";
import * as React from "react";
import * as moxios from "moxios";
import { mount } from "enzyme";
const url =
  "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjUxODExfQ";
const description = "brown Scottish fold in brown thick-pile blanket";
const key = '"NodtnCsLdTE"';
beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://api.unsplash.com/search/photos", {
    status: 200,
    response: [
      { url, description, key },
      { url, description, key },
      { url, description, key },
      { url, description, key }
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("should fetch a list of images and display them", async done => {
  const wrapper = mount(<App />);
  wrapper.find("input").simulate("change", { target: { value: "cat" } });
  wrapper.find("form").simulate("submit");
  await moxios.wait(() => {
    wrapper.update();
    console.log("moxios wait invoked");

    expect(wrapper.find("img")).toHaveLength(1);
    done();

    wrapper.unmount();
  });
});
