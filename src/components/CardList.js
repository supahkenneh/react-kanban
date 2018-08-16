import React from 'react';
import TaskCard from './TaskCard';

const CardList = props => {
  return (
    <div>
      {props.cards.map((card, idx) => {
        return (
          <TaskCard
            key={idx}
            title={card.title}
            priority={card.priority}
            createdBy={card.created_by}
            assignedTo={card.assigned_to}
          />
        )
      })}
    </div>
  )
}

export default CardList;