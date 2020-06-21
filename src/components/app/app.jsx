import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const titleHandler = () => {};

const App = ({offersAmount, offersNames}) => {
  return (
    <Main
      offersAmount={offersAmount}
      offersNames={offersNames}
      onTitleClick={titleHandler}
    />
  );
};

App.propTypes = {
  offersAmount: PropTypes.number.isRequired,
  offersNames: PropTypes.array.isRequired
};

export default App;
