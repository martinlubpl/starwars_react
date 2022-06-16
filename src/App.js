import { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      starwars: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return { starwars: users }
      },
        () => {
          // console.log(this.state);
        }
      ))
  }

  // function called on search field change
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField }; // shorthand for searchfield:searchField
    })
  }


  render() {
    const { starwars, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredNames = starwars.filter((character) => {
      return character.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App" >
        <input className='search-box'
          type='search'
          placeholder='search'
          onChange={onSearchChange} />
        {
          filteredNames.map((character) => {
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
