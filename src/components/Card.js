import React from 'react';
import PropTypes from 'prop-types';

function Card({
  cardName,
  cardImage,
  cardDescription,
  cardAttr1,
  cardAttr2,
  cardAttr3,
  cardRare,
  cardTrunfo,
}) {
  return (
    <div>
      <h1 data-testid="name-card">{ cardName }</h1>
      <img data-testid="image-card" src={ cardImage } alt={ cardName } />
      <p data-testid="description-card">{ cardDescription }</p>
      <h4 data-testid="attr1-card">{ cardAttr1 }</h4>
      <h4 data-testid="attr2-card">{ cardAttr2 }</h4>
      <h4 data-testid="attr3-card">{ cardAttr3 }</h4>
      <p data-testid="rare-card">{ cardRare }</p>
      { cardTrunfo && <h3 data-testid="trunfo-card">Super Trunfo</h3> }
    </div>
  );
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
