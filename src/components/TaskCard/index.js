import React from 'react';

import { connect } from 'react-redux';
import { deleteCard } from '../../actions';
import EditCardForm from '../EditForm';

class TaskCard extends React.Component {
  constructor() {
    super()

    this.state = {
      editing: false,
    }
  }

  toggleEditing(e) {
    this.setState({
      editing: !this.state.editing
    });
  }

  render() {
    // console.log('props', this.props);
    const {
      id,
      title,
      body,
      priority,
      createdBy,
      assigned,
      status,
      deleteCard
    } = this.props;

    return (
      <div className="card" style={colorfy(status, priority)} id='card_id'>
        <div id="card_title">{title}</div>
        <div id="card_body">{body}</div>
        <div className="card_desc">Priority:
          <span style={prioritize(priority)}> {priority}</span>
        </div>
        <div className="card_desc">Created by: {createdBy}</div>
        <div className="card_desc">Assigned to: {assigned}</div>

        <button
          id="delete_button"
          onClick={() => { deleteCard(id) }}
        >Del</button>
        <button
          id="edit_button"
          onClick={this.toggleEditing.bind(this)}
        >Edit</button>
        {this.state.editing && <EditCardForm id={id} />}
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cardsList,
    users: state.usersList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCard: card => {
      dispatch(deleteCard(card));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCard);

function colorfy(status) {
  switch (status) {
    case 1:
      return { borderLeft: '#0E7DB5 6px solid' }
    case 2:
      return { borderLeft: '#F07527 6px solid' }
    case 3:
      return { borderLeft: '#2F9168 6px solid', color: '#5A6166' }
    default:
      break;
  }
}

function prioritize(priority) {
  switch (priority) {
    case 'high':
      return {
        color: '#FF9F1C',
        fontSize: '16px',
      }
    case 'med':
      return {
        color: '#1A6DB2',
        fontSize: '16px'
      }
    case 'low':
      return {
        color: '#3AB795',
        fontSize: '16px'
      }
  }
}