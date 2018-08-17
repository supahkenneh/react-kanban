import React, { Component } from 'react';
import NewCardButton from './addbutton';

import { connect } from 'react-redux';
import { addCard } from '../../actions';

class NewCardForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      createInput: '',
      assignedInput: '',
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
    data.priority_id = this.state.priorityInput;
    data.created_by = this.state.createInput;
    data.assigned_to = Number(this.state.assignedInput);
    data.status_id = 1

    this.props.addCard(data)
    this.setState({
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      createInput: '',
      assignedInput: ''
    })
  }

  render() {
    /////////
    console.log(this.props.users);
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
          onChange={this.handleInputChange}
        >
          <option>--Priority--</option>
          <option value="3"> High </option>
          <option value="2"> Med </option>
          <option value="1"> Low </option>
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
          <option>--Assign task to user--</option>
          {this.props.users.map(card => {
            return (
              <option key={card.id} value={card.id}>{`${card.first_name} ${card.last_name}`}</option>
            )
          })}
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
    }
  }
}

export default connect(null, mapDispatchToProps)(NewCardForm);