import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Bookmarks } from "./Bookmarks";
import { BookmarkItem } from "./bookmarkItem/BookmarkItem";

configure({ adapter: new Adapter() });

describe("<Bookmarks />", () => {
  let wrapper;
  let bookmarks = [
    {
      id: 420809,
      title: "Maleficent: Mistress of Evil",
      date: "2019",
      mediaType: "movie",
    },
    {
      id: 69823,
      title: "After M*A*S*H",
      date: "1983",
      mediaType: "tv",
    },
    {
      id: 49434,
      title: "Making M*A*S*H",
      date: "Not specified",
      mediaType: "tv",
    },
  ];

  beforeEach(() => {
    wrapper = shallow(<Bookmarks />);
  });

  it("should render initial layout no bookmarks", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should render initial layout with bookmarks", () => {
    wrapper.setProps({ bookmarks: bookmarks });
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should render 3 bookmarks/.body has 3 childs", () => {
    wrapper.setProps({ bookmarks: bookmarks });
    expect(wrapper.find(".body").children()).toHaveLength(3);
  });

  it("should render 0 bookmarks/.body has 1 child", () => {
    expect(wrapper.find(".body").children()).toHaveLength(1);
    expect(wrapper.find(".body p")).toHaveLength(1);
  });
});
