import React from 'react';
import TaskCard from '../TaskCard';

const Column = props => {
  console.log('column ', props.cards)
  return (
    <div className="column_component">
      {
        props.cards.map((card, idx) => {
          console.log('map ', card.status, card);
          return <TaskCard
            key={idx}
            title={card.title}
            body={card.body}
            priority={card.priority}
            created={card.created_by}
            assigned={card.assigned_to}
          />
        })
      }
    </div>
  );
};

export default Column;