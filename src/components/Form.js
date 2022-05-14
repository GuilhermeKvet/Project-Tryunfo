import React from 'react';
import PropTypes from 'prop-types';

function Form({
  cardName,
  cardImage,
  cardDescription,
  cardAttr1,
  cardAttr2,
  cardAttr3,
  cardRare,
  cardTrunfo,
  hasTrunfo,
  isSaveButtonDisabled,
  onInputChange,
  onSaveButtonClick,
}) {
  return (
    <form className="forms">
      <label htmlFor="name">
        Nome
        <input
          data-testid="name-input"
          name="name"
          value={ cardName }
          onChange={ onInputChange }
          id="name"
          type="text"
        />
      </label>
      <br />
      <label htmlFor="textArea">
        Descrição
        <textarea
          data-testid="description-input"
          name="description"
          value={ cardDescription }
          onChange={ onInputChange }
          id="textArea"
          cols="30"
          rows="10"
        />
      </label>
      <br />
      <label htmlFor="atrib1">
        Atribuição 1
        <input
          data-testid="attr1-input"
          name="attr1"
          placeholder="max 90"
          max="90"
          value={ cardAttr1 }
          onChange={ onInputChange }
          type="number"
          id="atrib1"
        />
      </label>
      <br />
      <label htmlFor="atrib2">
        Atribuição 2
        <input
          data-testid="attr2-input"
          name="attr2"
          placeholder="max 90"
          max="90"
          value={ cardAttr2 }
          onChange={ onInputChange }
          type="number"
          id="atrib2"
        />
      </label>
      <br />
      <label htmlFor="atrib3">
        Atribuição 3
        <input
          data-testid="attr3-input"
          name="attr3"
          placeholder="max 90"
          max="90"
          value={ cardAttr3 }
          onChange={ onInputChange }
          type="number"
          id="atrib3"
        />
      </label>
      <br />
      <label htmlFor="imageURL">
        URL
        <input
          data-testid="image-input"
          name="url"
          value={ cardImage }
          onChange={ onInputChange }
          type="text"
          id="imageURL"
        />
      </label>
      <br />
      <label htmlFor="select">
        Raridade
        <select
          data-testid="rare-input"
          name="rare"
          value={ cardRare }
          onChange={ onInputChange }
          id="select"
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </label>
      <br />
      {hasTrunfo ? (
        'Você já tem um Super Trunfo em seu baralho'
      ) : (
        <label htmlFor="checkbox">
          <input
            data-testid="trunfo-input"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            type="checkbox"
            id="checkbox"
          />
          Super Trybe Trunfo
        </label>
      )}
      <br />
      <button
        data-testid="save-button"
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
        type="button"
      >
        Salvar
      </button>
    </form>
  );
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
