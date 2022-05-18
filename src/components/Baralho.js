import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function Baralho({ cards, renderButtonDel, isDeleteButton, cardTrunfo }) {
  return (
    <div>
      {cardTrunfo ? (
        <Card
          key={ cardTrunfo.name }
          cardName={ cardTrunfo.name }
          cardImage={ cardTrunfo.url }
          cardDescription={ cardTrunfo.description }
          cardAttr1={ cardTrunfo.attr1 }
          cardAttr2={ cardTrunfo.attr2 }
          cardAttr3={ cardTrunfo.attr3 }
          cardRare={ cardTrunfo.rare }
          cardTrunfo={ cardTrunfo.checkboxTrunfo }
          renderButtonDel={ renderButtonDel }
          isDeleteButton={ isDeleteButton }
        />
      ) : (
        cards.map((card) => (
          <div key={ card.name }>
            <Card
              cardName={ card.name }
              cardImage={ card.url }
              cardDescription={ card.description }
              cardAttr1={ card.attr1 }
              cardAttr2={ card.attr2 }
              cardAttr3={ card.attr3 }
              cardRare={ card.rare }
              cardTrunfo={ card.checkboxTrunfo }
              renderButtonDel={ renderButtonDel }
              isDeleteButton={ isDeleteButton }
            />
          </div>
        ))
      )}
    </div>
  );
}

Baralho.propTypes = {
  cards: PropTypes.objectOf({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.number.isRequired,
    cardAttr2: PropTypes.number.isRequired,
    cardAttr3: PropTypes.number.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  }).isRequired,
  renderButtonDel: PropTypes.bool.isRequired,
  isDeleteButton: PropTypes.func.isRequired,
  cardTrunfo: PropTypes.objectOf({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.number.isRequired,
    cardAttr2: PropTypes.number.isRequired,
    cardAttr3: PropTypes.number.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Baralho;
