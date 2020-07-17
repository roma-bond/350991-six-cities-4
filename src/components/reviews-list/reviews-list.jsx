import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review, index) => <Review key={index} review={review}/>)}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewsList;
