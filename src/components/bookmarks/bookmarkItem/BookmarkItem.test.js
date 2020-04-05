import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { BookmarkItem } from "./BookmarkItem";

configure({ adapter: new Adapter() });

describe("<BookmarkItem />", () => {
  let wrapper;
  let bookmark = {
    id: 420809,
    title: "Maleficent: Mistress of Evil",
    date: "2019",
    mediaType: "movie",
  };

  beforeEach(() => {
    wrapper = shallow(<BookmarkItem {...bookmark} />);
  });

  it("should render initial layout", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("title should match props.title", () => {
    expect(wrapper.find(".title").text()).toEqual(
      `${bookmark.title} (${bookmark.date})`
    );
  });
});
