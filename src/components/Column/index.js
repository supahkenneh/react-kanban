import React from 'react';
import CardList from '../CardList';

const Column = props => {
  console.log(props);
  return (
    <div className="column">
      <div className="column_header">
        {props.label}
      </div>
      <div className="column_body">
        <CardList cards={filterShit(props)} />
      </div>
    </div>
  );
};

function filterShit(props) {
  switch (props.label) {
    case 'In Queue':
      return props.cards.filter(card => card.status === 'queue')
    case 'In Progress':
      return props.cards.filter(card => card.status === 'progress')
    case 'Done':
      return props.cards.filter(card => card.status === 'done') 
    default:
      return props.cards;   
  }
}


export default Column;