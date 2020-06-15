import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { SearchForm } from "./SearchForm";

configure({ adapter: new Adapter() });

describe("<SearchForm />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchForm />);
  });

  it("should match snapshot", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should match snapshot if searchInputValue !== null", () => {
    wrapper.setProps({ searchInputValue: "value" });
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should render iconClose component", () => {
    wrapper.setProps({ searchInputValue: "value" });
    expect(wrapper.find(".iconClose")).toHaveLength(1);
  });
});
