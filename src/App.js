import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: { firstName: 'Marcin', lastName: 'MAjewski' },
      text2: 'Text2'
    }
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name.firstName} {this.state.name.lastName} and the 2nd text: {this.state.text2}
          </p>
          <button onClick={() => {
            this.setState({ name: { firstName: 'mmm', lastName: 'sss' } })
          }} >change text</button>
        </header>
      </div>
    );
  }
}

export default App;
