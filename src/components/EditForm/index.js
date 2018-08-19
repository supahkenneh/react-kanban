import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCard } from '../../actions';
import EditButton from './editbutton';

class EditCardForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      createdInput: '',
      assignedInput: '',
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
      case 'status':
        this.setState({ statusInput: event.target.value })
        break;
      default:
        break;
    }
  }

  editSelectedCard(event) {

    const data = {}
    data.id = this.props.id
    data.title = this.state.titleInput;
    data.body = this.state.bodyInput;
    data.priority_id = Number(this.state.createdInput);
    data.created_by = Number(this.state.createdInput);
    data.assigned_to = Number(this.state.assignedInput);
    data.status_id = Number(this.state.statusInput);

    this.props.editCard(data)

    this.setState({
      titleInput: '',
      bodyInput: '',
      priorityInput: '',
      createdInput: '',
      assignedInput: '',
    })
    document.getElementById('priority').selectedIndex = 0;
    document.getElementById('assign').selectedIndex = 0;

    const editForm = document.getElementsByClassName('EditCardForm_container')[0];
    editForm.className = 'none';
  }

  render() {
    return (
      <div>
        <div className="EditCardForm_container">
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
            <option value="0">--Priority--</option>
            <option value="3"> High </option>
            <option value="2"> Med </option>
            <option value="1"> Low </option>
          </select>
          <label htmlFor="status">Status: </label>
          <select name="status" id="status"
            onChange={this.handleInputChange}
          >
            <option value="0">--Status--</option>
            <option value="1">Queue</option>
            <option value="2">Progress</option>
            <option value="3">Done</option>
          </select>
          <label htmlFor="created">Created By: </label>
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
          <EditButton label="Edit Card" clickHandler={this.editSelectedCard} />
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