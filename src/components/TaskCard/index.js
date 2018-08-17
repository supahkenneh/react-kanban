import React from 'react';
import DeleteCardButton from './deletebutton';
import EditCardButton from './editbutton';

const TaskCard = (props) => {
  // console.log('props', props);
  const { 
    title, 
    body, 
    priority, 
    createdBy, 
    assigned, 
    status 
  } = props;

  return (
    <div className="card" style={colorfy(status)}>
      <div>{title}</div>
      <div>{body}</div>
      <div>Priority: {priority}</div>
      <div>Created by: {createdBy}</div>
      <div>Assigned to: {assigned}</div>
      <EditCardButton />
      <DeleteCardButton />
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
        borderColor: '#708E8C'
      }
    case 2:
      return {
        backgroundColor: '#8EDCE6',
        borderRadius: 2,
        borderColor: '#5B8C93'
      }
    case 3:
      return {
        backgroundColor: '#91A8A4',
        borderRadius: 2,
        borderColor: '#5D6B69'
      }
    default:
      return { backgroundColor: '#F7F7F7' }
  }
}