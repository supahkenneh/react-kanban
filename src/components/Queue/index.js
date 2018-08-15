import React from 'react';
import QueueCard from '../QueueCard';

const Queue = props => {
  return (
    <div id="queue_container">
      <ul>
        {
          props.cards.map((card, idx) => {
            if (card.status === 'queue') {
              return <QueueCard key={idx} title={card.title} body={card.body} />
            }
          })
        }
      </ul>
    </div>
  );
};

export default Queue;