import React from 'react';

const NewCardButton = props => {
  return (
    <button id="add_button" onClick={props.clickHandler}>Add Task</button>
  )
}

export default NewCardButton;