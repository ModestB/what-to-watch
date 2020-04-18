import { showPreviousResults } from "./showPrevResults";
import { SHOW_PREVIOUS_RESULTS } from "../../actionTypes/actionTypes";

describe("showPrevResults", () => {
  it("it should create action to SHOW_PREVIOUS_RESULTS results", () => {
    const prevResults = [
      {
        original_name: "La casa de papel",
        id: 71446,
        name: "Money Heist",
        vote_count: 4358,
        vote_average: 8.5,
        first_air_date: "2017-05-02",
        poster_path: "/MoEKaPFHABtA1xKoOteirGaHl1.jpg",
        genre_ids: [80, 18],
        original_language: "es",
        backdrop_path: "/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg",
        overview:
          "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion - memorizing every step, every detail, every probability - culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.",
        origin_country: ["ES"],
        popularity: 233.128,
        media_type: "tv",
      },
    ];
    const expectedOutput = {
      type: SHOW_PREVIOUS_RESULTS,
      payload: {
        prevResults,
      },
    };
    expect(showPreviousResults(prevResults)).toEqual(expectedOutput);
  });
});
