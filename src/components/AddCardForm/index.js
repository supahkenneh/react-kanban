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
    data.assigned_to = this.state.assignedInput;
    data.status_id = 1

    this.props.addCard(data)
    this.setState({
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      createInput: '',
      assignedInput: ''
    })
    document.getElementById('priority').selectedIndex = 0;
    document.getElementById('assign').selectedIndex = 0;
    document.getElementById('simple_modal').className = 'none';
  }

  closeModal() {
    document.getElementById('simple_modal').className = 'none';
  }

  render() {
    return (
      <div className="modal" id="simple_modal">
        <div className="modal_content">
          <div className="close" onClick={this.closeModal}>x</div>
          <div className="form-container">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              id="title"
              value={this.state.titleInput}
              onChange={this.handleInputChange}
            />
            <br/>
            <label htmlFor="body">Body: </label>
            <input
              type="text"
              name="body"
              id="body"
              value={this.state.bodyInput}
              onChange={this.handleInputChange}
            />
            <br/>
            <label htmlFor="priority">Priority: </label>
            <select name="priority" id="priority"
              onChange={this.handleInputChange}
            >
              <option value="0">--Priority--</option>
              <option value="3"> High </option>
              <option value="2"> Med </option>
              <option value="1"> Low </option>
            </select>
            <br/>
            <label htmlFor="created">Created By: </label>
            {/* <input
              type="text"
              name="created"
              id="created"
              value={this.createInput}
              onChange={this.handleInputChange}
            /> */}
            <select 
              name="created" 
              id="created"
              value={this.state.createInput}
              onChange={this.handleInputChange}
              >
              <option value="0">--Task created by--</option>
              {this.props.users.map(user => {
                return (
                  <option key={user.id} value={user.id}>{`${user.first_name} ${user.last_name}`}</option>
                )
              })}
              </select>
            <br/>
            <label htmlFor="assign">Assign To: </label>
            <select
              name="assign"
              id="assign"
              value={this.state.assignedInput}
              onChange={this.handleInputChange}
            >
              <option value="0">--Assign task to user--</option>
              {this.props.users.map(user => {
                return (
                  <option key={user.id} value={user.id}>{`${user.first_name} ${user.last_name}`}</option>
                )
              })}
            </select>
            <br/>
            <NewCardButton label="Add Card" clickHandler={this.addCard} />
            <button id="cancel_button" onClick={this.closeModal} >Cancel</button>
          </div>
        </div>
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