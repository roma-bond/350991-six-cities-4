import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = ({offersAmount, offersNames}) => {
  return (
    <Main
      offersAmount={offersAmount}
      offersNames={offersNames}
    />
  );
};

App.propTypes = {
  offersAmount: PropTypes.number.isRequired,
  offersNames: PropTypes.array.isRequired
};

export default App;
