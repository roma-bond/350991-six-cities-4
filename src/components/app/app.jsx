import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const titleHandler = () => {};

const App = ({offersAmount, offers}) => {
  return (
    <Main
      offersAmount={offersAmount}
      offers={offers}
      onTitleClick={titleHandler}
    />
  );
};

App.propTypes = {
  offersAmount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired
};

export default App;
