import React from 'react';

const QueueCard = (props) => {
  console.log(props);
  return (
    <li>
      <div>{props.title}</div>
      <div>{props.body}</div>
    </li>
  )
}

export default QueueCard;