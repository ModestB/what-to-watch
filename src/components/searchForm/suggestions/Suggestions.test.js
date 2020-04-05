import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Suggestions } from "./Suggestions";

configure({ adapter: new Adapter() });

describe("<suggestions />", () => {
  let wrapper;
  let props = {
    searchInputValue: "s",
    suggestionsResults: [
      {
        poster_path: "/aRYrV4EloKRgv0lCqzGtXFt3dXn.jpg",
        popularity: 15.705,
        vote_count: 245,
        video: false,
        media_type: "movie",
        id: 17532,
        adult: false,
        backdrop_path: "/2oxlor4lQrP2JX40ammAQdOqkEQ.jpg",
        original_language: "en",
        original_title: "S. Darko",
        genre_ids: [80, 9648, 878, 53],
        title: "S. Darko",
        vote_average: 3.9,
        overview:
          "S. Darko follows Samantha Darko, the younger sister of Donnie, the protagonist of Donnie Darko, and her friend Corey. On their way to California, their car breaks down, forcing them to wait in a small town until it is fixed. While there, Samantha begins to have dreams that warn her of the end of the universe.",
        release_date: "2009-04-28",
      },
      {
        poster_path: "/lX5XyaUQ4yXRY1knq5N8IKj6Ua4.jpg",
        popularity: 12.082,
        vote_count: 381,
        video: false,
        media_type: "movie",
        id: 13492,
        adult: false,
        backdrop_path: null,
        original_language: "fr",
        original_title: "Frontière(s)",
        genre_ids: [28, 18, 27, 53],
        title: "Frontier(s)",
        vote_average: 6.1,
        overview:
          "A gang of young thieves flee Paris during the violent aftermath of a political election, only to hole up at an Inn run by neo-Nazis.",
        release_date: "2007-07-01",
      },
      {
        original_name: "House",
        genre_ids: [35, 18, 9648],
        media_type: "tv",
        name: "House",
        popularity: 50.219,
        origin_country: ["US"],
        vote_count: 1485,
        first_air_date: "2004-11-16",
        backdrop_path: "/ncdS5plsKvO3DLbRX0fBETB6SNS.jpg",
        original_language: "en",
        id: 1408,
        vote_average: 8.3,
        overview:
          "Dr. Gregory House, a drug-addicted, unconventional, misanthropic medical genius, leads a team of diagnosticians at the fictional Princeton–Plainsboro Teaching Hospital in New Jersey.",
        poster_path: "/lxSzRZ49NXwsiyHuvMsd19QxduC.jpg",
      },
      {
        known_for_department: "Acting",
        id: 1001657,
        name: "Sophie Turner",
        known_for: [
          {
            poster_path: "/zSouWWrySXshPCT4t3UKCQGayyo.jpg",
            vote_count: 9226,
            video: false,
            media_type: "movie",
            id: 246655,
            adult: false,
            backdrop_path: "/oQWWth5AOtbWG9o8SCAviGcADed.jpg",
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
            vote_count: 7303,
            first_air_date: "2011-04-17",
            backdrop_path: "/mUkuc2wyV9dHLG0D0Loaw5pO2s8.jpg",
            original_language: "en",
            id: 1399,
            vote_average: 8.2,
            overview:
              "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
            poster_path: "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
          },
          {
            poster_path: "/cCTJPelKGLhALq3r51A9uMonxKj.jpg",
            vote_count: 3136,
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
        popularity: 4.492,
        profile_path: "/5lzG6z74a8aYVWLsoAQVkyh5IEa.jpg",
        adult: false,
        media_type: "person",
        gender: 1,
      },
    ],
  };

  beforeEach(() => {
    wrapper = shallow(<Suggestions {...props} />);
  });

  it("should match snapshot", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("item count should match suggestionsResults array length", () => {
    expect(wrapper.find(".item")).toHaveLength(props.suggestionsResults.length);
  });

  it("item should be correctly formated with highlight", () => {
    expect(
      wrapper.find(".item p").forEach((node, index) => {
        const textToCompare = replaceMatch(
          props.searchInputValue,
          resultTitleHandler(props.suggestionsResults[index])
        );

        expect(node.html()).toEqual(`<p>${textToCompare}</p>`);
      })
    );
  });

  it("item count should be 0", () => {
    wrapper.setProps({ suggestionsResults: [] });
    expect(wrapper.find(".item")).toHaveLength(0);
  });
});

function replaceMatch(matchedText, text) {
  const pattern = new RegExp(matchedText, "gi");
  const updateText = text
    .toLowerCase()
    .replace(pattern, `<span>${matchedText}</span>`);
  return updateText;
}

function resultTitleHandler(element) {
  switch (element.media_type) {
    case "tv":
      return element.original_name;
    case "person":
      return element.name;
    default:
      return element.original_title;
  }
}
