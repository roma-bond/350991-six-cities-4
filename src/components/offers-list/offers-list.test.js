import React from "react";
import renderer from "react-test-renderer";
import OffersList from "./offers-list.jsx";

const offers = [{
  premium: true,
  price: 120,
  name: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  rating: 4,
  photoSrc: [`img/apartment-01.jpg`]
}, {
  premium: false,
  price: 80,
  name: `Wood and stone place`,
  type: `Private room`,
  rating: 4,
  photoSrc: [`img/room.jpg`]
}, {
  premium: false,
  price: 132,
  name: `Canal View Prinsengracht`,
  type: `Apartment`,
  rating: 4,
  photoSrc: [`img/apartment-02.jpg`]
}, {
  premium: true,
  price: 180,
  name: `Nice, cozy, warm big bed apartment`,
  type: `Apartment`,
  rating: 5,
  photoSrc: [`img/apartment-03.jpg`]
}];

it(`Should Offers List render correctly`, () => {
  const tree = renderer
    .create(<OffersList
      offers={offers}
      onTitleClick={() => {}}
      classPrefix={`cities`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
