import React from 'react';

const EditButton = props => {
  return (
    <button id="edit_submit_button" onClick={props.clickHandler}>Submit</button>
  )
}

export default EditButton;