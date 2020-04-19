import * as actions from "./showByIdActions";
import { SET_SHOW_BY_ID } from "../../actionTypes/actionTypes";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("showByIdActions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  it("should create action to SET_SHOW_BY_ID", () => {
    const searchResults = [
      {
        adult: false,
        backdrop_path: "/cjRUhKyt2Jo3V1KNzc5tpPNfccG.jpg",
        belongs_to_collection: {
          id: 748,
          name: "X-Men Collection",
          poster_path: "/31rqs6ZxFdi5nWZZaFPIr17q8jt.jpg",
          backdrop_path: "/5R4gZp4xZJY8A9IqJ72VpHHpku6.jpg",
        },
        budget: 200000000,
        genres: [
          {
            id: 878,
            name: "Science Fiction",
          },
          {
            id: 28,
            name: "Action",
          },
          {
            id: 12,
            name: "Adventure",
          },
        ],
        homepage: "http://darkphoenix.com",
        id: 320288,
        imdb_id: "tt6565702",
        original_language: "en",
        original_title: "Dark Phoenix",
        overview:
          "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
        popularity: 52.754,
        poster_path: "/cCTJPelKGLhALq3r51A9uMonxKj.jpg",
        production_companies: [
          {
            id: 431,
            logo_path: null,
            name: "The Donners' Company",
            origin_country: "US",
          },
          {
            id: 25,
            logo_path: "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
            name: "20th Century Fox",
            origin_country: "US",
          },
          {
            id: 28788,
            logo_path: null,
            name: "Genre Films",
            origin_country: "US",
          },
          {
            id: 9168,
            logo_path: "/hQNXrYIuyLRxMSBuGHk0GX7CCBS.png",
            name: "Bad Hat Harry Productions",
            origin_country: "US",
          },
          {
            id: 7505,
            logo_path: "/837VMM4wOkODc1idNxGT0KQJlej.png",
            name: "Marvel Entertainment",
            origin_country: "US",
          },
          {
            id: 112049,
            logo_path: null,
            name: "Kinberg Genre",
            origin_country: "",
          },
        ],
        production_countries: [
          {
            iso_3166_1: "US",
            name: "United States of America",
          },
        ],
        release_date: "2019-06-05",
        revenue: 245000000,
        runtime: 114,
        spoken_languages: [
          {
            iso_639_1: "en",
            name: "English",
          },
        ],
        status: "Released",
        tagline: "The phoenix will rise",
        title: "Dark Phoenix",
        video: false,
        vote_average: 6,
        vote_count: 3242,
      },
    ];
    const mediaType = "movie";
    const expectedOutput = [
      {
        type: SET_SHOW_BY_ID,
        payload: {
          searchResults,
          mediaType,
        },
      },
    ];

    store.dispatch(actions.setShowById(searchResults, mediaType));
    return expect(store.getActions()).toEqual(expectedOutput);
  });
});
