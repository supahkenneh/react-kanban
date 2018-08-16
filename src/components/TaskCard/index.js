import React from 'react';

const TaskCard = ({ title, body, priority, created, assigned }) => {
  // console.log('taskCard ', props)
  return (
    <div className="card">
      <div>{title}</div>
      <div>{body}</div>
      <div>Priority: {priority}</div>
      <div>Created by: {created}</div>
      <div>Assigned to: {assigned}</div>
    </div>
  )
}

export default TaskCard;