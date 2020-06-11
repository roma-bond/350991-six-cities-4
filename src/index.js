import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const OFFERS_AMOUNT = 312;

ReactDOM.render(
    <App offersAmount={OFFERS_AMOUNT}/>,
    document.querySelector(`#root`)
);
