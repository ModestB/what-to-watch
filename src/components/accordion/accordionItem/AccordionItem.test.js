import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { AccordionItem } from "./AccordionItem";

configure({ adapter: new Adapter() });

describe("<AccordionItem />", () => {
  let wrapper;
  let props = {
    title: "Trailers",
    body: <p>No Information</p>,
  };

  beforeEach(() => {
    wrapper = shallow(<AccordionItem {...props} />);
  });

  it("should match snapshot", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should match props title in header", () => {
    expect(wrapper.find(".title p").text()).toEqual(props.title);
  });
});
