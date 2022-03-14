import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Badge } from "./Badge";

configure({ adapter: new Adapter() });

describe("<Badge />", () => {
  let wrapper;
  let props = {
    rating: 8,
  };
  let classNameMap = ["badgeSuccess", "badgeWarning", "badgeDanger"];

  beforeEach(() => {
    wrapper = shallow(<Badge {...props} />);
  });

  it("should match snapshot", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("badge should be success", () => {
    expectClassHandler(wrapper, classNameMap, "badgeSuccess");
  });
  it("should match snapshot 4 <= rating > 7 ", () => {
    wrapper.setProps({ rating: 6 });
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("badge should be warning", () => {
    wrapper.setProps({ rating: 6 });
    expectClassHandler(wrapper, classNameMap, "badgeWarning");
  });

  it("should match snapshot  rating < 4 ", () => {
    wrapper.setProps({ rating: 3 });
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("badge should be danger", () => {
    wrapper.setProps({ rating: 3 });
    expectClassHandler(wrapper, classNameMap, "badgeDanger");
  });
});

function expectClassHandler(wrapper, classNameMap, classToMatch) {
  classNameMap.forEach((className) => {
    return expect(wrapper.hasClass(className)).toEqual(
      className === classToMatch ? true : false
    );
  });
}
