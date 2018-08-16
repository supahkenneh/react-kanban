import React from 'react';
import TaskCard from '../TaskCard';

const Column = props => {
  return (
    <div id="progress_container">
      <ul>
        {
          props.cards.map((card, idx) => {
            if (card.status === 'progress') {
              return <TaskCard key={idx} title={card.title} body={card.body} />
            }
          })
        }
      </ul>
    </div>
  );
};

export default Column;