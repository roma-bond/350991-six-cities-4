import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const OFFERS_AMOUNT = 312;
const OFFERS_NAMES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      offersAmount={OFFERS_AMOUNT}
      offersNames={OFFERS_NAMES}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
