import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);

    this.state = {
      activeOffer: {}
    };
  }

  clickHandler() {
    this.props.onTitleClick(this.state.activeOffer);
  }

  render() {
    const {offers, classPrefix} = this.props;

    return (
      offers.map((offer, index) => (
        <OfferCard
          classPrefix={classPrefix}
          offer={offer}
          key={`${index}-${offer.name}`}
          onOfferCardHover={() => {
            this.setState({
              activeOffer: offer
            });
          }}
          onTitleClick={this.clickHandler}
        />
      ))
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  classPrefix: PropTypes.string.isRequired
};

export default OffersList;
