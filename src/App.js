// import { Component } from 'react';
import { useState, useEffect } from 'react'; //hook
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {

  const [searchField, setSearchField] = useState(''); // [value, setvalue]
  const [starwars, setStarwars] = useState([]); // init value
  const [filteredStarwar, setFilteredStarwars] = useState([starwars]) // use sw from previous line

  // console.log('render');

  useEffect(() => {
    // console.log('useEffect');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setStarwars(users));
  }, []); // [] on mount  

  useEffect(() => {
    const newFilteredNames = starwars.filter((character) => {
      return character.name.toLowerCase().includes(searchField);
    });
    setFilteredStarwars(newFilteredNames);
    // console.log('effect set filtered starwars')

  }, [starwars, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);

    // this.setState(() => {
    //   return { searchField }; // shorthand for searchfield:searchField
    // });
  }

  const filteredNames = starwars.filter((character) => {
    return character.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="App" >
      <h1 className="search-title ">STAR WARS CHARACTERS</h1>

      <SearchBox onChangeHandler={onSearchChange} placeholder={'search Starwars'} className='starwars-search-box' />

      <CardList characters={filteredNames} />
    </div>
  )
}

// class App extends Component {

//   constructor() {`
//     super();

//     this.state = {
//       starwars: [],
//       searchField: '',
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState(() => {
//         return { starwars: users }
//       },
//         () => {
//           // console.log(this.state);
//         }
//       ))
//   }

//   // function called on search field change
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField }; // shorthand for searchfield:searchField
//     })
//   }


//   render() {
//     const { starwars, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredNames = starwars.filter((character) => {
//       return character.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App" >
//         <h1 className="search-title ">STAR WARS CHARACTERS</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder={'search Starwars'} className='starwars-search-box' />
//         <CardList characters={filteredNames} />
//       </div>
//     );
//   }
// }

export default App;
