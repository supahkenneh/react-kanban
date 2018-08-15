import React from 'react';

const QueueCard = (props) => {
  console.log('queueCard: ', props);
  return (
    <li>
      <div className="task_card">
        <p id="task_title">{props.title}</p>
        <p id="task_body">{props.body}</p>
        <p id="task_giver">{props.created_by}</p>
        <p id="priority">{props.priority}</p>
        <p id="tasked_to">{props.assigned_to}</p>
      </div>
    </li>
  )
}

export default QueueCard;