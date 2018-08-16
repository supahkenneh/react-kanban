import React from 'react';

const TaskCard = (props) => {
  console.log('taskCard ', props)
  return (
    <li>
      <div>{props.title}</div>
      <div>{props.body}</div>
    </li>
  )
}

export default TaskCard;