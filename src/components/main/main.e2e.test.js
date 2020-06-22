import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const OFFERS_AMOUNT = 312;
const OFFERS_NAMES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main component`, () => {
  it(`Should offer title be pressed`, () => {
    const onTitleClick = jest.fn();

    const main = shallow(
        <Main
          offersAmount={OFFERS_AMOUNT}
          offersNames={OFFERS_NAMES}
          onTitleClick={onTitleClick}
        />
    );

    const titles = main.find(`.place-card__name`);

    titles.forEach((title) => {
      title.props().onClick();
    });

    expect(onTitleClick.mock.calls.length).toBe(OFFERS_NAMES.length);
  });
});
