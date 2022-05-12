import React from 'react';

class Card extends React.Component {
  superTrunfo = () => {
    const { cardTrunfo } = this.props;
    let trunfo = '';
    if (cardTrunfo === true) trunfo = 'Super Trunfo';
  }
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo
    } = this.props;
    return (
      <div>
        <h1 data-testid="name-card">{cardName}</h1>
        <img data-testid="image-card" src={cardImage} alt={cardName} />
        <p data-testid="description-card">{cardDescription}</p>
        <h4 data-testid="attr1-card">{cardAttr1}</h4>
        <h4 data-testid="attr2-card">{cardAttr2}</h4>
        <h4 data-testid="attr3-card">{cardAttr3}</h4>
        <p data-testid="rare-card">{cardRare}</p>
        {
          cardTrunfo ? <h3 data-testid="trunfo-card">Super Trunfo</h3> : ''
        }
      </div>
    );
  }
}

export default Card;
