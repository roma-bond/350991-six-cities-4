import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer.jsx";

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

const offer = {
  premium: true,
  price: 120,
  name: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  rating: 80,
  photoSrc: [`img/apartment-01.jpg`],
  coordinates: [52.3909553943508, 4.85309666406198],
  reviews: [
    {
      comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      date: `2019-05-08T14:13:56.569Z`,
      id: 1,
      rating: 4,
      user: {
        avatar: `img/avatar-max.jpg`,
        id: 4,
        pro: false,
        name: `Max`
      }
    }
  ]
};

it(`Should Offer render correctly`, () => {
  const tree = renderer
    .create(<Offer
      offer={offer}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
