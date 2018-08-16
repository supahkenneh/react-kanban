import React from 'react';
import CardList from '../CardList';

const Column = props => {
  console.log('column ', props)
  return (
    <div className="column">
      <div className="column_header">
        {props.label}
      </div>
      <div className="column_body">
        <CardList cards={props.cards}/>
      </div>
    </div>
  );
};

export default Column;