import React from 'react';
import TaskCard from './TaskCard';

const CardList = props => {
  // console.log('cardlist ', props);
  return (
    <div className="card_column">
      {props.cards.map((card, idx) => {
        const priorityName = card && card.priority ? card.priority.name : null;
        const createdBy = card && card.createdBy ? card.createdBy.first_name : null;
        const assignedTo = card && card.assignedTo ? card.assignedTo.first_name : null;
        // console.log('map', test);
        return (
          <TaskCard
            key={idx}
            title={card.title}
            body={card.body}
            status={card.status_id}
            priority={priorityName}
            createdBy={createdBy}
            assigned={assignedTo}
          />
        )
      })}
    </div>
  )
}

export default CardList;