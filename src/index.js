import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {offers} from "./mocks/offers.js";

const OFFERS_AMOUNT = 312;

ReactDOM.render(
    <App
      offersAmount={OFFERS_AMOUNT}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
