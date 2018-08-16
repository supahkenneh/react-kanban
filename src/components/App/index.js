import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { loadCards } from '../../actions';

import Header from '../Header';
import Body from '../Body';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    axios.get('/api')
      .then(cards => {
        this.props.loadCards(cards.data)
      })
      .catch(err => console.log(err));
  };

  // addNewCard(e) {
  //   axios.post('/api')
  // }


  render() {
    return (
      <div className="App">
        <Header />
        <Body cards={this.props.cards} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  // console.log('state ', state);
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
