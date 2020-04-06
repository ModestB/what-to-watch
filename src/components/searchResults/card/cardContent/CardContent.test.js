import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { CardContent } from "./CardContent";
import ShowContent from "./showContent/ShowContent";
import PersonContent from "./personContent/PersonContent";

configure({ adapter: new Adapter() });

describe("<CardContent />", () => {
  let wrapper;
  let props = {};

  beforeEach(() => {
    wrapper = shallow(<CardContent {...props} />);
  });

  it("should match snapshot", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should have <ShowContent />", () => {
    expect(wrapper.find(ShowContent)).toHaveLength(1);
  });

  it("should match snapshot than cardType = person", () => {
    wrapper.setProps({ cardType: "person" });
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should have <PersonContent /> than cardType = person", () => {
    wrapper.setProps({ cardType: "person" });
    expect(wrapper.find(PersonContent)).toHaveLength(1);
  });
});
