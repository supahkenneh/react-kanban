import React from 'react';

const TaskCard = (props) => {
  console.log('props', props);
  const { 
    title, 
    body, 
    priority, 
    createdBy, 
    assignedTo, 
    status 
  } = props;

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

function colorfy(status) {
  switch (status) {
    case 1:
      return {
        backgroundColor: '#AFDEDC',
        borderRadius: 2,
        borderColor: '#90B6B5'
      }
    case 2:
      return {
        backgroundColor: '#8EDCE6',
        borderRadius: 2,
        borderColor: '#75B5BD'
      }
    case 3:
      return {
        backgroundColor: '#91A8A4',
        borderRadius: 2,
        borderColor: '#778A87'
      }
    default:
      return { backgroundColor: '#F7F7F7' }
  }
}