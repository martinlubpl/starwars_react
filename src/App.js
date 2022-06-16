import { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      starwars: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return { starwars: users }
      },
        () => {
          console.log(this.state);
        }
      ))
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
