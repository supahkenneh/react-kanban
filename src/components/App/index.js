import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { loadCards } from '../../actions';

import Header from '../Header';
import Body from '../Body';
import NewCardForm from '../AddCardForm';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    this.props.loadCards();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Body cards={this.props.cards} />
        <NewCardForm />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    cards: state.cardsList
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadCards: cards => {
      dispatch(loadCards(cards));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

//column dynamic?
//POST
//drop down for assign
//button for changing statuses