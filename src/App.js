import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Baralho from './components/Baralho';

function App() {
  const form = {
    name: '',
    url: '',
    description: '',
    attr1: 0,
    attr2: 0,
    attr3: 0,
    rare: 'normal',
    checkboxTrunfo: false,
    checkBoxFilter: false,
    hasTrunfo: false,
    buttonRemove: true,
    filter: '',
  };

  const [cardsContainer, setCardsContainer] = useState([]);
  const [userForm, setUserForm] = useState(form);
  const [savedButton, setSavedButton] = useState(true);

  const resetField = () => {
    setCardsContainer([...cardsContainer, userForm]);
    setUserForm({
      name: '',
      url: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      rare: 'normal',
      checkboxTrunfo: false,
      checkBoxFilter: false,
      hasTrunfo: true,
      buttonRemove: true,
      filter: '',
    });
  };

  const filterTrunfoCard = () => {
    const cardTrunfo = cardsContainer.find((card) => {
      if (card.checkboxTrunfo) return card;
      return false;
    });
    return cardTrunfo;
  };

  const filterCards = () => {
    const filter = cardsContainer.filter((cardFilter) => {
      if (cardFilter.name.includes(userForm.filter)) return cardFilter;
      if (cardFilter.rare === userForm.filter) return cardFilter;
      return false;
    });
    return filter;
  };

  const isDeleteButton = (event) => {
    const newData = cardsContainer.filter((card) => (
      card.name !== event.target.name));
    setCardsContainer(newData);
  };

  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  useEffect(() => {
    const ninety = 90;
    const sumMax = 210;
    const { name, description, url, rare, attr1, attr2, attr3 } = userForm;
    if (userForm.hasTrunfo === true) {
      setUserForm((prevState) => (
        { ...prevState, hasTrunfo: false }
      ));
    }
    if (name === '' || description === '' || url === '' || rare === '') {
      setSavedButton(true);
    } else if (attr1 > ninety || attr2 > ninety || attr3 > ninety) {
      setSavedButton(true);
    } else if (attr1 < 0 || attr2 < 0 || attr3 < 0) {
      setSavedButton(true);
    } else if (Number(attr1) + Number(attr2) + Number(attr3) > sumMax) {
      setSavedButton(true);
    } else {
      setSavedButton(false);
    }
  }, [userForm]);

  useEffect(() => {
    localStorage.setItem('card', JSON.stringify(cardsContainer));
    cardsContainer.map((card) => {
      if (card.checkboxTrunfo === false) {
        setUserForm((prevState) => (
          { ...prevState, hasTrunfo: true }
        ));
      }
      return setUserForm;
    });
  }, [cardsContainer]);

  return (
    <div>
      <div>
        <h1>Tryunfo</h1>
      </div>
      <Form
        cardName={ userForm.name }
        cardImage={ userForm.url }
        cardDescription={ userForm.description }
        cardAttr1={ userForm.attr1 }
        cardAttr2={ userForm.attr2 }
        cardAttr3={ userForm.attr3 }
        cardRare={ userForm.rare }
        cardTrunfo={ userForm.checkboxTrunfo }
        hasTrunfo={ userForm.hasTrunfo }
        onInputChange={ handleChange }
        isSaveButtonDisabled={ savedButton }
        onSaveButtonClick={ resetField }
      />
      <Card
        cardName={ userForm.name }
        cardImage={ userForm.url }
        cardDescription={ userForm.description }
        cardAttr1={ userForm.attr1 }
        cardAttr2={ userForm.attr2 }
        cardAttr3={ userForm.attr3 }
        cardRare={ userForm.rare }
        cardTrunfo={ userForm.checkboxTrunfo }
      />
      <label htmlFor="inputFilter">
        Nome
        <input
          type="text"
          data-testid="name-filter"
          id="inputFilter"
          value={ userForm.filter }
          name="filter"
          onChange={ handleChange }
          disabled={ userForm.checkBoxFilter }
        />
      </label>
      <br />
      <label htmlFor="selectFilter">
        Raridade
        <select
          id="selectFilter"
          data-testid="rare-filter"
          value={ userForm.filter }
          name="filter"
          onChange={ handleChange }
          disabled={ userForm.checkBoxFilter }
        >
          <option value="">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>
      <br />
      <label htmlFor="trunfoFilter">
        <input
          data-testid="trunfo-filter"
          name="checkBoxFilter"
          checked={ userForm.checkBoxFilter }
          onChange={ handleChange }
          type="checkbox"
          id="trunfoFilter"
        />
        Super Trunfo
      </label>
      { userForm.checkBoxFilter ? (
        <Baralho
          cards={ [] }
          cardTrunfo={ filterTrunfoCard() }
          isDeleteButton={ isDeleteButton }
          renderButtonDel={ userForm.buttonRemove }
        />
      ) : (
        <Baralho
          cards={ filterCards() }
          isDeleteButton={ isDeleteButton }
          renderButtonDel={ userForm.buttonRemove }
        />
      )}
    </div>
  );
}

export default App;
