import React from 'react';
import NewCardButton from '../AddCardForm/addbutton';

const Header = props => {
  return (
    <header className="App-header">
      <h1 className="App-title">Kanban</h1>
      <NewCardButton label="Add Card" clickHandler={this.addCard} />
    </header>
  )
}

export default Header;