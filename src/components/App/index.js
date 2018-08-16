import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

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
        <div className="main_header_container">
          <Header />
        </div>
        <div className="secondary_header_container">
          <SecondaryHeader />
        </div>
        <div className="main_body">
          <Column cards={this.state.cards} />
        </div>
      </div>
    );
  }
}

export default App;
