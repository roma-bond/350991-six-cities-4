import React from "react";
import PropTypes from "prop-types";

const PhotoItem = (props) => {
  const {src, type} = props;
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={src} alt={`Photo ${type}`}/>
    </div>
  );
};

PhotoItem.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default PhotoItem;
