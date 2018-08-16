import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {connect} from 'react-redux';
import {loadCards} from '../../actions';

import Header from '../Header';
import SecondaryHeader from '../SecondaryHeader'
import Column from '../Column';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    // console.log('mount');
    axios.get('/api')
      .then(cards => {
        console.log('mount', cards.data);
        this.setState({ cards: cards.data })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SecondaryHeader />
        <div className="main_body">
          <Column cards={this.state.cards} />
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log('state ', state);
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
