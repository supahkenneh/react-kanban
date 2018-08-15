import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/index';

class App extends Component {
  constructor(props) {
    super(props)
    //cards here
    this.state = {
      greeting: 'hi'
    }
  }

  componentDidMount() {
    axios.get('/api/cards')
    .then(cards => {
      this.setState({ cards: cards.data})
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
        <h4>{this.state.greeting}</h4>
        </p>
      </div>
    );
  }
}

export default App;
