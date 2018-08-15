import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Header from '../Header/index';
import Queue from '../Queue';

class App extends Component {
  constructor(props) {
    super(props)
    //cards here
    this.state = {
      cards: [
        { title: 'vacuum', body: 'the rug' },
        { title: 'eat', body: 'dinner' },
        { title: 'return', body: 'underwear' }
      ]
    }
  }

  // componentDidMount() {
  //   axios.get('/api/cards')
  //   .then(cards => {
  //     this.setState({ cards: cards.data})
  //   })
  //   .catch(err => console.log(err));
  // };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main_body">
          <Queue cards={this.state.cards} />
        </div>
      </div>
    );
  }
}

export default App;
