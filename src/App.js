import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      text: 'TEST2'
    }
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            asdf {this.state.text}
          </p>
          <button onClick={() => {
            this.setState({ text: 'HELLO!' })
          }} >change text</button>
        </header>
      </div>
    );
  }
}

export default App;
