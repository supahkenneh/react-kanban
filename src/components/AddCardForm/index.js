import React, { Component } from 'react';
import NewCardButton from './addbutton';

import { connect } from 'react-redux';
import { addCard } from '../../actions';
// import { getUsers } from '../../actions';

class NewCardForm extends Component {
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
    this.addCard = this.addCard.bind(this);
  }

  //records data from input fields
  handleInputChange(event) {
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

  //actually adds the card into system
  addCard(e) {
    const data = {};
    data.title = this.state.titleInput;
    data.body = this.state.bodyInput;
    data.created_by = this.state.createInput;
    data.assigned_to = this.state.assignedInput;
    data.status_id = 1
    switch (this.state.priorityInput) {
      case 'Med':
        data.priority_id = 2
        break;
      case 'Low':
        data.priority_id = 1
        break;
      default:
        data.priority_id = 3
        break;
    }

    this.props.addCard(data)
    this.setState({
      titleInput: '',
      bodyInput: '',
      priorityInput: 'High',
      createInput: '',
      assignedInput: ''
    })
  }

  render() {
    return (
      <div className="form-container">
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
        <select
          name="assign"
          id="assign"
          value={this.state.assignedInput}
          onChange={this.handleInputChange}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <NewCardButton label="Add Card" clickHandler={this.addCard} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCard: card => {
      dispatch(addCard(card));
    },
    // getUsers: user => {
    //   dispatch(getUsers(user));
    // }
  }
}

export default connect(null, mapDispatchToProps)(NewCardForm);