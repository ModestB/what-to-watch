import { filterSinglePage } from "./filterSinglePage";
import {
  FILTER_SINGLE_PAGE,
  GET_EXTRA_SHOW_INFO,
  GET_EXTRA_PROFILE_INFO,
} from "../../actionTypes/actionTypes";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

jest.mock("../api/extraShowInfoActions.js");
jest.mock("../api/extraProfileInfoActions.js");

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  it("should create action to FILTER_SINGLE_PAGE, GET_EXTRA_SHOW_INFO", () => {
    const element = {
      original_name: "La casa de papel",
      id: 71446,
      name: "Money Heist",
      vote_count: 5003,
      vote_average: 8.5,
      first_air_date: "2017-05-02",
      poster_path: "/MoEKaPFHABtA1xKoOteirGaHl1.jpg",
      genre_ids: [80, 18],
      original_language: "es",
      backdrop_path: "/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg",
      overview:
        "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion - memorizing every step, every detail, every probability - culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.",
      origin_country: ["ES"],
      popularity: 168.463,
      media_type: "tv",
    };
    const displayedResults = [
      {
        original_name: "La casa de papel",
        id: 71446,
        name: "Money Heist",
        vote_count: 5003,
        vote_average: 8.5,
        first_air_date: "2017-05-02",
        poster_path: "/MoEKaPFHABtA1xKoOteirGaHl1.jpg",
        genre_ids: [80, 18],
        original_language: "es",
        backdrop_path: "/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg",
        overview:
          "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion - memorizing every step, every detail, every probability - culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.",
        origin_country: ["ES"],
        popularity: 168.463,
        media_type: "tv",
      },
      {
        id: 38700,
        video: false,
        vote_count: 3110,
        vote_average: 7.2,
        title: "Bad Boys for Life",
        release_date: "2020-01-15",
        original_language: "en",
        original_title: "Bad Boys for Life",
        genre_ids: [28, 80, 53],
        backdrop_path: "/upUy2QhMZEmtypPW3PdieKLAHxh.jpg",
        adult: false,
        overview:
          "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
        poster_path: "/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
        popularity: 189.491,
        media_type: "movie",
      },
      {
        id: 181812,
        video: false,
        vote_count: 4007,
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
        popularity: 170.482,
        media_type: "movie",
      },
    ];
    const singlePageType = "tv";
    const expectedOutput = [
      {
        type: FILTER_SINGLE_PAGE,
        payload: {
          itemId: element.id,
          displayedResults,
          singlePageType,
        },
      },
      { type: GET_EXTRA_SHOW_INFO },
    ];

    store.dispatch(filterSinglePage(element, displayedResults, singlePageType));

    return expect(store.getActions()).toEqual(expectedOutput);
  });

  it("should create action to FILTER_SINGLE_PAGE, GET_EXTRA_PROFILE_INFO", () => {
    const element = {
      known_for_department: "Acting",
      id: 1001657,
      name: "Sophie Turner",
      known_for: [
        {
          poster_path: "/qttNmCib9gHhR5q0QoZ3FgmGom9.jpg",
          vote_count: 9278,
          video: false,
          media_type: "movie",
          id: 246655,
          adult: false,
          backdrop_path: "/2ex2beZ4ssMeOduLD0ILzXKCiep.jpg",
          original_language: "en",
          original_title: "X-Men: Apocalypse",
          genre_ids: [28, 12, 14, 878],
          title: "X-Men: Apocalypse",
          vote_average: 6.5,
          overview:
            "After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
          release_date: "2016-05-18",
        },
        {
          original_name: "Game of Thrones",
          genre_ids: [18, 10765],
          media_type: "tv",
          name: "Game of Thrones",
          origin_country: ["US"],
          vote_count: 7682,
          first_air_date: "2011-04-17",
          backdrop_path: "/suopoADq0k8YZr4dQXcU6pToj6s.jpg",
          original_language: "en",
          id: 1399,
          vote_average: 8.2,
          overview:
            "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
          poster_path: "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
        },
        {
          poster_path: "/cCTJPelKGLhALq3r51A9uMonxKj.jpg",
          vote_count: 3236,
          video: false,
          media_type: "movie",
          id: 320288,
          adult: false,
          backdrop_path: "/cjRUhKyt2Jo3V1KNzc5tpPNfccG.jpg",
          original_language: "en",
          original_title: "Dark Phoenix",
          genre_ids: [28, 12, 878],
          title: "Dark Phoenix",
          vote_average: 6,
          overview:
            "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
          release_date: "2019-06-05",
        },
      ],
      popularity: 7.365,
      profile_path: "/5lzG6z74a8aYVWLsoAQVkyh5IEa.jpg",
      adult: false,
      media_type: "person",
      gender: 1,
    };
    const displayedResults = [
      {
        known_for_department: "Acting",
        id: 1001657,
        name: "Sophie Turner",
        known_for: [
          {
            poster_path: "/qttNmCib9gHhR5q0QoZ3FgmGom9.jpg",
            vote_count: 9278,
            video: false,
            media_type: "movie",
            id: 246655,
            adult: false,
            backdrop_path: "/2ex2beZ4ssMeOduLD0ILzXKCiep.jpg",
            original_language: "en",
            original_title: "X-Men: Apocalypse",
            genre_ids: [28, 12, 14, 878],
            title: "X-Men: Apocalypse",
            vote_average: 6.5,
            overview:
              "After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
            release_date: "2016-05-18",
          },
          {
            original_name: "Game of Thrones",
            genre_ids: [18, 10765],
            media_type: "tv",
            name: "Game of Thrones",
            origin_country: ["US"],
            vote_count: 7682,
            first_air_date: "2011-04-17",
            backdrop_path: "/suopoADq0k8YZr4dQXcU6pToj6s.jpg",
            original_language: "en",
            id: 1399,
            vote_average: 8.2,
            overview:
              "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
            poster_path: "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
          },
          {
            poster_path: "/cCTJPelKGLhALq3r51A9uMonxKj.jpg",
            vote_count: 3236,
            video: false,
            media_type: "movie",
            id: 320288,
            adult: false,
            backdrop_path: "/cjRUhKyt2Jo3V1KNzc5tpPNfccG.jpg",
            original_language: "en",
            original_title: "Dark Phoenix",
            genre_ids: [28, 12, 878],
            title: "Dark Phoenix",
            vote_average: 6,
            overview:
              "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
            release_date: "2019-06-05",
          },
        ],
        popularity: 7.365,
        profile_path: "/5lzG6z74a8aYVWLsoAQVkyh5IEa.jpg",
        adult: false,
        media_type: "person",
        gender: 1,
      },
    ];
    const singlePageType = "person";
    const expectedOutput = [
      {
        type: FILTER_SINGLE_PAGE,
        payload: {
          itemId: element.id,
          displayedResults,
          singlePageType,
        },
      },
      { type: GET_EXTRA_PROFILE_INFO },
    ];

    store.dispatch(filterSinglePage(element, displayedResults, singlePageType));

    return expect(store.getActions()).toEqual(expectedOutput);
  });
});
