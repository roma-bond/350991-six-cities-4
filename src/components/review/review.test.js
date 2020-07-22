import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";

const review = {
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
};

it(`Should Review render correctly`, () => {
  const tree = renderer
    .create(<Review
      review={review}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
