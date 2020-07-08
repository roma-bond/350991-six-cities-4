import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card";

const offer = {
  premium: true,
  price: 120,
  name: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  rating: 4,
  photoSrc: [`img/apartment-01.jpg`]
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Offer card component`, () => {
  it(`Should offer title be pressed`, () => {
    const onTitleClick = jest.fn();
    const onOfferCardHover = jest.fn();

    const card = shallow(
        <OfferCard
          offer={offer}
          onTitleClick={onTitleClick}
          onOfferCardHover={onOfferCardHover}
        />
    );

    const titles = card.find(`.place-card__name`);

    titles.forEach((title) => {
      title.props().onClick();
    });

    expect(onTitleClick.mock.calls.length).toBe(1);
  });

  it(`Offer data is passed to click handler`, () => {
    const onTitleClick = jest.fn((...args) => [...args]);
    const onOfferCardHover = jest.fn();

    const card = shallow(
        <OfferCard
          offer={offer}
          onTitleClick={onTitleClick}
          onOfferCardHover={onOfferCardHover}
        />
    );

    const cardTitleElement = card.find(`.place-card__name`);
    cardTitleElement.simulate(`click`, offer);
    expect(onTitleClick.mock.calls[0][0]).toMatchObject(offer);
  });

  it(`Offer data is passed to hover handler`, () => {
    const onTitleClick = jest.fn();
    const onOfferCardHover = jest.fn((...args) => [...args]);

    const card = shallow(
        <OfferCard
          offer={offer}
          onTitleClick={onTitleClick}
          onOfferCardHover={onOfferCardHover}
        />
    );

    const cardElement = card.find(`.place-card`);
    cardElement.simulate(`mouseover`, offer);
    expect(onOfferCardHover.mock.calls[0][0]).toMatchObject(offer);
  });
});
