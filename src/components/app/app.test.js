import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

const OFFERS_AMOUNT = 312;
const offers = [{
  premium: true,
  price: 120,
  name: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  rating: 4,
  photoSrc: [`img/apartment-01.jpg`, `img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`],
  coordinates: [52.3909553943508, 4.85309666406198]
}, {
  premium: false,
  price: 80,
  name: `Wood and stone place`,
  type: `Private room`,
  rating: 4,
  photoSrc: [`img/room.jpg`],
  coordinates: [52.369553943508, 4.85309666406198]
}, {
  premium: false,
  price: 132,
  name: `Canal View Prinsengracht`,
  type: `Apartment`,
  rating: 4,
  photoSrc: [`img/apartment-02.jpg`],
  coordinates: [52.3909553943508, 4.929309666406198]
}, {
  premium: true,
  price: 180,
  name: `Nice, cozy, warm big bed apartment`,
  type: `Apartment`,
  rating: 5,
  photoSrc: [`img/apartment-03.jpg`],
  coordinates: [52.3809553943508, 4.939309666406198]
}];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offersAmount={OFFERS_AMOUNT}
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
