import React from 'react';

const TaskCard = ({ title, body, priority, createdBy, assignedTo }) => {
  return (
    <div className="card">
      <div>{title}</div>
      <div>{body}</div>
      <div>Priority: {priority}</div>
      <div>Created by: {createdBy}</div>
      <div>Assigned to: {assignedTo}</div>
    </div>
  )
}

export default TaskCard;