import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    url: '',
    attr1: '',
    attr2: '',
    attr3: '',
    rare: '',
    checkboxTrunfo: false,
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      name,
      description,
      url,
      attr1,
      attr2,
      attr3,
      rare,
      checkboxTrunfo,
    } = this.state;

    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ url }
          cardRare={ rare }
          cardTrunfo={ checkboxTrunfo }
          hasTrunfo={ false }
          isSaveButtonDisabled={ false }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ () => { } }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ url }
          cardRare={ rare }
          cardTrunfo={ checkboxTrunfo }
        />
      </>
    );
  }
}

export default App;
