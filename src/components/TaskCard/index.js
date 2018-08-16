import React from 'react';

const TaskCard = ({ title, body, priority, createdBy, assignedTo, status }) => {
  function colorfy(prop) {
    switch (prop) {
      case 'queue':
        return {backgroundColor: '#AFDEDC'}
      case 'progress':
        return {backgroundColor: '#8EDCE6'}
      case 'done':
        return {backgroundColor: '#91A8A4'}
      default:
        return {backgroundColor: '#F7F7F7'}
    }
  }
  
  return (
    <div className="card" style={colorfy(status)}>
      <div>{title}</div>
      <div>{body}</div>
      <div>Priority: {priority}</div>
      <div>Created by: {createdBy}</div>
      <div>Assigned to: {assignedTo}</div>
    </div>
  )
}

export default TaskCard;