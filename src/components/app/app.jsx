import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {offersAmount} = props;

  return (
    <Main offersAmount={offersAmount}/>
  );
};

export default App;
