import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const OFFERS_AMOUNT = 312;
const OFFERS_NAMES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offersAmount={OFFERS_AMOUNT}
      offersNames={OFFERS_NAMES}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
