import React from 'react';

const QueueCard = props => {
  <li>
    <div>{props.title}</div>
    <div>{props.body}</div>
    <div>{props.created_by}</div>
    <div>{props.priority_id}</div>
    <div>edit/delete</div>
    <div>{props.assigned_to}</div>
  </li>
};

export default QueueCard;