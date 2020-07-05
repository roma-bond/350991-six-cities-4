import React from "react";
import PropTypes from "prop-types";
import PhotoItem from "../photo-item/photo-item.jsx";

const Photos = (props) => {
  const {photos, type} = props;
  return (
    photos.map((src, index) => (
      <PhotoItem
        key={`${index}-${src}`}
        src={src}
        type={type}
      />
    ))
  );
};

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};

export default Photos;
