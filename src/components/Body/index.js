import React from 'react';
import Column from '../Column';

const Body = props => {
  return (
    <div className="content_body">
      <Column label="In Queue" cards={props.cards}/>
      <Column label="In Progress" cards={props.cards}/>
      <Column label="Done" cards={props.cards}/>
    </div>
  )
}

export default Body;