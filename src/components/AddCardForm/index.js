import React from 'react';

const newCardForm = props => {
  const {
    titleInput,
    bodyInput,
    priorityInput,
    createInput,
    assignedInput
  } = props;

  return (
    <div className="newCard-container">
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        name="title"
        id="title"
        value={titleInput}
      />
      <label htmlFor="body">Body: </label>
      <input
        type="text"
        name="body"
        id="body"
        value={bodyInput}
      />
      <label htmlFor="priority">Priority: </label>
      <input
        type="text"
        name="priority"
        id="priority"
        value={priorityInput}
      />
      <label htmlFor="created">Created By: </label>
      <input
        type="text"
        name="created"
        id="created"
        value={createInput}
      />
      <label htmlFor="assign">Assign To: </label>
      <input
        type="text"
        name="assign"
        id="assign"
        value={assignedInput}
      />

    </div>
  )
}

export default newCardForm;