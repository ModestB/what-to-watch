import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Navigation } from "./Navigation";

configure({ adapter: new Adapter() });

describe("<Navigation />", () => {
  let wrapper;
  let displayedResults = [
    {
      id: 181812,
      video: false,
      vote_count: 3460,
      vote_average: 6.5,
      title: "Star Wars: The Rise of Skywalker",
      release_date: "2019-12-18",
      original_language: "en",
      original_title: "Star Wars: The Rise of Skywalker",
      genre_ids: [28, 12, 878],
      backdrop_path: "/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg",
      adult: false,
      overview:
        "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
      poster_path: "/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
      popularity: 295.608,
      media_type: "movie"
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });

  it("it should match snapshot", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("it should match snapshot if displaySinglePage=true", () => {
    wrapper.setProps({
      displaySinglePage: true,
      displayedResults: displayedResults
    });
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("it should render 2 buttons if displaySinglePage=true", () => {
    wrapper.setProps({
      displaySinglePage: true,
      displayedResults: displayedResults
    });
    expect(wrapper.find(".btn")).toHaveLength(3);
  });

  it("it should match snapshot if displaySinglePage=true && singlePageType = person", () => {
    wrapper.setProps({
      displaySinglePage: true,
      displayedResults: displayedResults,
      singlePageType: "person"
    });
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("it should render 3 buttons if displaySinglePage=true && singlePageType = person", () => {
    wrapper.setProps({
      displaySinglePage: true,
      displayedResults: displayedResults,
      singlePageType: "person"
    });
    expect(wrapper.find(".btn")).toHaveLength(2);
  });
});
