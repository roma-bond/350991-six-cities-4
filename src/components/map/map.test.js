import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

const coordinates = [52.3909553943508, 4.85309666406198];

it(`Render Map`, () => {
  const tree = renderer
    .create(<Map
      coordinates={coordinates}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
