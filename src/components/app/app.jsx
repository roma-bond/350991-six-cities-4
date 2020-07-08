import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.titleClickHandler = this.titleClickHandler.bind(this);

    this.state = {
      displayOffer: {
        premium: false,
        price: 0,
        name: ``,
        type: ``,
        rating: 0,
        photoSrc: []
      }
    };
  }

  titleClickHandler(offer) {
    this.setState({displayOffer: offer});
  }

  _renderScreen() {
    const {offersAmount, offers} = this.props;

    if (this.state.displayOffer.name.length > 0) {
      return (
        <Offer
          offer={this.state.displayOffer}
        />
      );
    } else {
      return (
        <Main
          offersAmount={offersAmount}
          offers={offers}
          onTitleClick={this.titleClickHandler}
        />
      );
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderScreen()}
          </Route>
          <Route exact path="/offer">
            <Offer
              offer={this.state.displayOffer}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offersAmount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired
};

export default App;
