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
      posting: false,
    }
  }

  componentDidMount() {
    this.props.loadCards();
    this.props.getUsers();
  };

  togglePosting(e) {
    this.setState({
      posting: !this.state.posting
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body cards={this.props.cards} />
        <button id="home_add_button" onClick={this.togglePosting.bind(this)}>+ New Task</button>
        { this.state.posting && <NewCardForm users={this.props.users} toggle={this.togglePosting}/>}
      </div>
    );
  }
};

const mapStateToProps = state => {
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