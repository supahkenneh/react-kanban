import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/index';
import QueueCards from '../QueueCards';

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
        <div className="main_body">
        {/* 3 columns here */}
        <QueueCards greeting={this.state.greeting}/>
        
        </div>
      </div>
    );
  }
}

export default App;
