import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Offer from "../offer-card/offer-card.jsx";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: undefined
    };
  }

  render() {
    const {offers, onTitleClick} = this.props;

    return (
      offers.map((offer, index) => (
        <Offer
          offer={offer}
          key={`${index}-${offer.name}`}
          onTitleClick={onTitleClick}
          onOfferCardHover={() => {
            this.setState({
              activeOffer: offer
            });
          }}
        />
      ))
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default OffersList;
