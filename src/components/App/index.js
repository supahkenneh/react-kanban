import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { loadCards, getUsers } from '../../actions';

import Header from '../Header';
import Body from '../Body';
import NewCardForm from '../AddCardForm';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
    }
  }

  componentDidMount() {
    this.props.loadCards();
    this.props.getUsers();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Body cards={this.props.cards} />
        <NewCardForm users={this.props.users} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  // console.log('state', state);
  return {
    cards: state.cardsList,
    users: state.usersList,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadCards: () => {
      dispatch(loadCards());
    },
    getUsers: () => {
      dispatch(getUsers());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

//column dynamic?
//drop down for assign
//render createdby and assign to without refreshing page
//button for changing statuses and edit/delete