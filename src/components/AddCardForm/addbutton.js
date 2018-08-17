import React from 'react';

const NewCardButton = props => {
  return (
    <button id="add_button" onClick={props.clickHandler}>+ New Task</button>
  )
}

export default NewCardButton;