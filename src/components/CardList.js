import React from 'react';
import TaskCard from './TaskCard';

const CardList = props => {
  console.log('cardlist ', props);

  return (
    <div className="card_column">
      {props.cards.map((card, idx) => {
        return (
          <TaskCard
            key={idx}
            title={card.title}
            body={card.body}
            status={card.status}
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