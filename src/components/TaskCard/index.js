import React from 'react';

import { connect } from 'react-redux';
import { deleteCard, editingCard ,editCard } from '../../actions';

class TaskCard extends React.Component {
  // constructor() {
  //   super()
  // }

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
      editing,
      editingCard,
      deleteCard
    } = this.props;

    return (
      <div className="card" style={colorfy(status)}>
        <div>{title}</div>
        <div>{body}</div>
        <div>Priority: {priority}</div>
        <div>Created by: {createdBy}</div>
        <div>Assigned to: {assigned}</div>

        <button
          id="edit_button"
          onClick={() => { editingCard(id) }}
        >Edit</button>

        <button
          id="delete_button"
          onClick={() => { deleteCard(id) }}
        >Del</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log('state', state);
  return {
    cards: state.cardsList,
    users: state.usersList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCard: card => {
      dispatch(deleteCard(card));
    },
    editingCard: card => {
      dispatch(editingCard(card));
    },
    // editCard: card => {
    //   dispatch(editCard(card));
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCard);

function colorfy(status) {
  switch (status) {
    case 1:
      return {
        backgroundColor: '#AFDEDC',
        borderRadius: 2,
        borderColor: '#708E8C'
      }
    case 2:
      return {
        backgroundColor: '#8EDCE6',
        borderRadius: 2,
        borderColor: '#5B8C93'
      }
    case 3:
      return {
        backgroundColor: '#91A8A4',
        borderRadius: 2,
        borderColor: '#5D6B69'
      }
    default:
      return { backgroundColor: '#F7F7F7' }
  }
}