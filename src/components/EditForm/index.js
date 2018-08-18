import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCard } from '../../actions';

class EditCardForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      statusInput: '',
      createdInput: '',
      assignedInput: '',
      statusInput: this.props.status_id
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.editSelectedCard = this.editSelectedCard.bind(this);
  }

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
        this.setState({ createdInput: event.target.value })
        break;
      case 'assign':
        this.setState({ assignedInput: event.target.value })
        break;
      default:
        break;
    }
  }

  editSelectedCard(event) {
    const data = {}
    data.title = this.state.titleInput;
    data.body = this.state.bodyInput;
    data.priority_id = this.state.createdInput;
    data.created_by = this.state.createdInput;
    data.assigned_to = this.state.assignedInput;
    data.status_id = this.state.statusInput;

    this.props.editSelectedCard(data)

    this.setState({
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      createdInput: '',
      assignedInput: ''
    })
  }

  render() {
    return (
      <div>
        <div className="EditCardForm_container">
          <label htmlFor="title">Title:</label>
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
            <option value="0">--Priority--</option>
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
            <option value="0">--Assign task to user--</option>
            {/* {this.props.users.map(card => {
              return (
                <option key={card.id} value={card.id}>{`${card.first_name} ${card.last_name}`}</option>
              )
            })} */}
          </select>
          <button id="edit_form_button" onClick={this.editSelectedCard}>Submit</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cardsList,
    users: state.usersList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editCard: card => {
      dispatch(editCard(card))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCardForm);