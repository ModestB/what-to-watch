import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { ShowContent } from "./ShowContent";

configure({ adapter: new Adapter() });

describe("<ShowContent />", () => {
  let wrapper;
  let props = {
    showTitle: "Star Wars: The Rise of Skywalker Skywalker",
    showOverview:
      "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
    showDate: "2019-12-18",
  };

  beforeEach(() => {
    wrapper = shallow(<ShowContent {...props} />);
  });

  it("should match snapshot", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should match snapshot mediaTyoe = movie", () => {
    wrapper.setProps({ mediaType: "movie" });
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should match snapshot displaySinglePage = true", () => {
    wrapper.setProps({ displaySinglePage: true });
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should ellipse title", () => {
    expect(wrapper.find(".title").text()).toHaveLength(43);
    expect(
      wrapper
        .find(".title")
        .text()
        .endsWith("...")
    ).toEqual(true);
    expect(wrapper.find(".title").text()).not.toEqual(props.showTitle);
  });

  it("should not ellipse title", () => {
    wrapper.setProps({ showTitle: "Star Wars: The Rise of Skywalker" });
    expect(wrapper.find(".title").text()).toEqual(
      "Star Wars: The Rise of Skywalker"
    );
  });

  it("should ellipse overview", () => {
    expect(wrapper.find(".description").text()).toHaveLength(133);
    expect(
      wrapper
        .find(".description")
        .text()
        .endsWith("...")
    ).toEqual(true);
    expect(wrapper.find(".description").text()).not.toEqual(props.showOverview);
  });

  it("should not ellipse overview", () => {
    wrapper.setProps({ displaySinglePage: true });
    expect(wrapper.find(".description").text()).toEqual(props.showOverview);
  });

  it("should start with Air Date", () => {
    expect(
      wrapper
        .find(".date")
        .text()
        .startsWith("Air Date:")
    ).toEqual(true);
  });

  it("should start with Released Date", () => {
    wrapper.setProps({ mediaType: "movie" });
    expect(
      wrapper
        .find(".date")
        .text()
        .startsWith("Released Date:")
    ).toEqual(true);
  });
});
