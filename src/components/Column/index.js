import React from 'react';
import CardList from '../CardList';

const Column = props => {
  return (
    <div className="column">
      <div className="column_header">
        {props.label}
      </div>
      <div className="column_body">
        <CardList cards={filterCards(props)} />
      </div>
    </div>
  );
};

function filterCards(props) {
  switch (props.label) {
    case 'In Queue':
      return props.cards.filter(card => card.status_id === 1)
    case 'In Progress':
      return props.cards.filter(card => card.status_id === 2)
    case 'Done':
      return props.cards.filter(card => card.status_id === 3)
    default:
      return props.cards;
  }
};

export default Column;