import React from 'react';
import Column from '../Column';

const Body = props => {
  return (
    <div className="content_body">
      <Column label="QUEUE" cards={props.cards}/>
      <Column label="PROGRESS" cards={props.cards}/>
      <Column label="DONE" cards={props.cards}/>
    </div>
  )
}

export default Body;