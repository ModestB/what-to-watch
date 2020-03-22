import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { App } from "./App";
import SearchResults from "../searchResults/SearchResults";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  let wrapper;
  let searchResultsProps = [
    {
      id: 181812,
      video: false,
      vote_count: 3387,
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
      popularity: 386.162,
      media_type: "movie"
    },
    {
      id: 512200,
      video: false,
      vote_count: 2453,
      vote_average: 6.8,
      title: "Jumanji: The Next Level",
      release_date: "2019-12-04",
      original_language: "en",
      original_title: "Jumanji: The Next Level",
      genre_ids: [28, 12, 35, 14],
      backdrop_path: "/hreiLoPysWG79TsyQgMzFKaOTF5.jpg",
      adult: false,
      overview:
        "As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.",
      poster_path: "/bB42KDdfWkOvmzmYkmK58ZlCa9P.jpg",
      popularity: 252.566,
      media_type: "movie"
    }
  ];
  beforeEach(() => {
    wrapper = shallow(
      <App getTrendingShows={() => {}} getBookmarksStorage={() => {}} />
    );
  });

  it("should match snapshot", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should match snapshot with searchRsults props", () => {
    wrapper.setProps({ searchResults: searchResultsProps });
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should render <SearchResults /> with searchRsults props", () => {
    wrapper.setProps({ searchResults: searchResultsProps });
    expect(wrapper.find(SearchResults)).toHaveLength(1);
  });

  it("should render <LoadingSpinner /> if loading=true", () => {
    wrapper.setProps({ loading: true });
    expect(wrapper.find(LoadingSpinner)).toHaveLength(1);
  });
});
