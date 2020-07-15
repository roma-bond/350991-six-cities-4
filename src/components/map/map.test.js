import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

const coordinates = [
  [52.3909553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198]
];

jest.mock(`leaflet`, () => {
  const map = {
    fitBounds: jest.fn(),
    setView: jest.fn()
  };

  return {
    map: jest.fn(() => map),
    tileLayer: () => ({
      addTo: jest.fn()
    }),
    latLngBounds: jest.fn(),
    icon: jest.fn(),
    marker: () => ({
      addTo: jest.fn()
    }),
  };
});

it(`Render Map`, () => {
  const tree = renderer
    .create(<Map
      coordinates={coordinates}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
