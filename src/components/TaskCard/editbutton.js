import React from 'react';

const EditCardButton = props => {
  return (
    <button id="edit_button" onClick={props.clickHandler}>Edit</button>
  )
}

export default EditCardButton;