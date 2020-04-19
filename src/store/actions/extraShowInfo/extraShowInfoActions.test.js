import * as actions from "./extraShowInfoActions";
import { SET_EXTRA_SHOW_INFO } from "../../actionTypes/actionTypes";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

actions.getExtraShowInfo = jest.fn(() => {
  return {
    type: SET_EXTRA_SHOW_INFO,
  };
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("extraShowInfoActions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  it("should create action to SET_EXTRA_SHOW_INFO if getExtraShowInfo is called", () => {
    const expectedOutput = [{ type: SET_EXTRA_SHOW_INFO }];

    store.dispatch(actions.getExtraShowInfo());
    return expect(store.getActions()).toEqual(expectedOutput);
  });

  it("should create action to SET_EXTRA_SHOW_INFO if setExtraShowInfo is called", () => {
    const reviewsData = [
      {
        author: "krapfikra",
        content: "Best Series 🥰",
        id: "5e87c267726fb10013515f5d",
        url: "https://www.themoviedb.org/review/5e87c267726fb10013515f5d",
      },
    ];
    const trailersData = [
      {
        id: "5c9655269251416b33f32459",
        iso_639_1: "en",
        iso_3166_1: "US",
        key: "cQYvQIrM1FY",
        name: "La Casa De Papel (Money Heist) TV Series Trailer",
        site: "YouTube",
        size: 1080,
        type: "Trailer",
      },
      {
        id: "5e974edd097c4900120a4229",
        iso_639_1: "en",
        iso_3166_1: "US",
        key: "ZAXA1DV4dtI",
        name: "Money Heist - Part 2 | Official Trailer | Netflix",
        site: "YouTube",
        size: 1080,
        type: "Trailer",
      },
      {
        id: "5e974eaed1444300124fd952",
        iso_639_1: "en",
        iso_3166_1: "US",
        key: "TFJwUwnShnA",
        name: "Money Heist: Part 3 | Official Trailer | Netflix",
        site: "YouTube",
        size: 1080,
        type: "Trailer",
      },
      {
        id: "5e974e2bb339030015a0fe21",
        iso_639_1: "en",
        iso_3166_1: "US",
        key: "p_PJbmrX4uk",
        name: "Money Heist: Part 4 | Official Trailer | Netflix",
        site: "YouTube",
        size: 1080,
        type: "Trailer",
      },
    ];
    const expectedOutput = [
      {
        type: SET_EXTRA_SHOW_INFO,
        payload: {
          reviewsData,
          trailersData,
        },
      },
    ];

    store.dispatch(actions.setExtraShowInfo(reviewsData, trailersData));
    return expect(store.getActions()).toEqual(expectedOutput);
  });
});
