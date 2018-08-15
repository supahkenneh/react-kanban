import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header';
import SecondaryHeader from '../SecondaryHeader'
import Queue from '../Queue';
import Progress from '../Progress';
import Done from '../Done';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [
        { title: 'vacuum', body: 'the rug' },
        { title: 'eat', body: 'dinner' },
        { title: 'return', body: 'underwear' }
      ]
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
        <div className="main_header_container">
          <Header />
        </div>
        <div className="secondary_header_container">
          <SecondaryHeader />
        </div>
        <div className="main_body">
          <Queue cards={this.state.cards} />
          <Progress cards={this.state.cards} />
          <Done cards={this.state.cards} />
        </div>
      </div>
    );
  }
}

export default App;
