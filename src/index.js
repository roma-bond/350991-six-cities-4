import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const OFFERS_AMOUNT = 312;
const OFFERS_NAMES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

ReactDOM.render(
    <App
      offersAmount={OFFERS_AMOUNT}
      offersNames={OFFERS_NAMES}
    />,
    document.querySelector(`#root`)
);
