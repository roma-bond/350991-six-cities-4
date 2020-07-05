import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer.jsx";

const offer = {
  premium: true,
  price: 120,
  name: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  rating: 80,
  photoSrc: [`img/apartment-01.jpg`]
};

it(`Should Offer render correctly`, () => {
  const tree = renderer
    .create(<Offer
      offer={offer}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
