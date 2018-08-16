import React from 'react';

const ProgressCard = (props) => {
  return (
    <li>
      <div>{props.title}</div>
      <div>{props.body}</div>
    </li>
  )
}

export default ProgressCard;