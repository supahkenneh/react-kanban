import React, { Component } from 'react';
import NewCardButton from './addbutton';

class newCardForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      titleInput: '',
      bodyInput: '',
      priorityInput: 'High',
      createInput: '',
      assignedInput: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log('event ', event.target);
    switch (event.target.id) {
      case 'title':
        this.setState({ titleInput: event.target.value })
        break;
      case 'body':
        this.setState({ bodyInput: event.target.value })
        break;
      case 'priority':
        this.setState({ priorityInput: event.target.value })
        break;
      case 'created':
        this.setState({ createInput: event.target.value })
        break;
      case 'assign': 
        this.setState({ assignedInput: event.target.value })
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="newCard-container">
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={this.state.titleInput}
          onChange={this.handleInputChange}
        />
        <label htmlFor="body">Body: </label>
        <input
          type="text"
          name="body"
          id="body"
          value={this.state.bodyInput}
          onChange={this.handleInputChange}
        />
        <label htmlFor="priority">Priority: </label>
        <select name="priority" id="priority" 
          value={this.state.priorityInput}
          onChange={this.handleInputChange}
          >
          <option> High </option>
          <option> Med </option>
          <option> Low </option>
        </select>
        <label htmlFor="created">Created By: </label>
        <input
          type="text"
          name="created"
          id="created"
          value={this.createInput}
          onChange={this.handleInputChange}
        />
        <label htmlFor="assign">Assign To: </label>
        <input
          type="text"
          name="assign"
          id="assign"
          value={this.assignedInput}
          onChange={this.handleInputChange}
        />
        <NewCardButton />
      </div>
    )
  }
}

export default newCardForm;