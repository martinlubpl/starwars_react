import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      starwars: [
        {
          name: 'Luke Skywalker',
          id: '1',
        },
        {
          name: 'Obi-Wan Kenobi',
          id: '2',
        },
        {
          name: 'Han Solo',
          id: '3',
        },
        {
          name: 'Martin Majewski',
          id: '4',
        }
      ]

    }
  }

  render() {
    return (
      <div className="App" >
        {
          this.state.starwars.map((character) => {
            return (
              <div>
                <h1 key={character.id}>{character.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
