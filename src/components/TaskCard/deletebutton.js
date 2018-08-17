import React from 'react';

const DeleteCardButton = props => {
  return (
    <button id="delete_button" onClick={props.clickHandler}>Del</button>
  )
}

export default DeleteCardButton;