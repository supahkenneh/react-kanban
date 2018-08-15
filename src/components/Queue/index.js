import React from 'react';
import QueueCard from './QueueCards';

const Queue = props => {
  return (
    <ul>
      {
        props.cards.map((card, idx) => {
          return <QueueCard key={idx} title={card.title} body={card.body}/>
        })
      }
    </ul>
  );
};

export default Queue;