import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { PersonContent } from "./PersonContent";

configure({ adapter: new Adapter() });

describe("<PersonContent />", () => {
  let wrapper;
  let props = {
    displaySinglePage: false,
    personName: "Sophie Turner",
    profileKnownFor: "Acting",
    profileDetails: {
      birthday: "1996-02-21",
      known_for_department: "Acting",
      deathday: null,
      id: 1001657,
      name: "Sophie Turner",
      also_known_as: ["소피 터너", "Σόφι Τέρνερ", "Софи Тёрнер"],
      gender: 1,
      biography:
        "Sophie Turner (born 21 February 1996) is an English actress. Turner made her professional acting debut as Sansa Stark on the HBO fantasy television series Game of Thrones (2011–2019), which brought her international recognition.\n\nTurner has also starred in the television film The Thirteenth Tale (2013) and she made her feature film debut in Another Me (2013). She has also starred in the action comedy Barely Lethal (2015) and portrays a young Jean Grey / Phoenix in the X-Men film series.",
      popularity: 8.512,
      place_of_birth: "Northampton, Northamptonshire, England",
      profile_path: "/5lzG6z74a8aYVWLsoAQVkyh5IEa.jpg",
      adult: false,
      imdb_id: "nm3849842",
      homepage: null
    }
  };

  beforeEach(() => {
    wrapper = shallow(<PersonContent {...props} />);
  });

  it("should match snapshot displaySinglePage = false", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
  it("should match snapshot displaySinglePage = true", () => {
    wrapper.setProps({ displaySinglePage: true });
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
