import React from "react";
import renderer from "react-test-renderer";
import Photos from "./photos.jsx";

const offer = {
  premium: true,
  price: 120,
  name: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  rating: 4,
  photoSrc: [`img/apartment-01.jpg`]
};

it(`Should Photos render correctly`, () => {
  const tree = renderer
    .create(<Photos
      photos={offer.photoSrc}
      type={offer.type}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
