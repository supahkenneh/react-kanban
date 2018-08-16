import React from 'react';
import TaskCard from './TaskCard';

const CardList = props => {
  console.log('cards ', props);

  return (
    <div className="card_column">
      {props.cards.map((card, idx) => {
        return (
          <TaskCard
            key={idx}
            title={card.title}
            body={card.body}
            priority={card.priority}
            createdBy={card.created_by}
            assignedTo={card.assigned_to}
          />
        )
      })}
    </div>
  )
}

function filterCards(props) {
  console.log(props);
}

export default CardList;