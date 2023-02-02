// import { Component } from 'react';
import { useEffect, useState, ChangeEvent } from "react";
import CardList from "./components/card-listComponent/card-list.component";
import SearchCard from './components/searchComponent/search-card.component';
import { getData } from "./utility/data.utils";
import './App.css';

// Migrating to typeScript

export type Monster = {
  id: string;
  name: string;
  email: string;
};


const App = () => {

  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters)

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((response) => response.json())
    // .then((users) => setMonsters(users));

    const fetchUsers = async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");
      setMonsters(users)
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters)
  }, [monsters, searchField]);


  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="title">Monster World</h1>
      <SearchCard
        className="monster-search-box"
        InputType="Search"
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
}


// using class component

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monster: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monster: users };
//         })
//       );
//   }

//   filterMonsers = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {

//     const { monster, searchField } = this.state;
//     const { filterMonsers } = this;
//     const filteredMonstersName = monster.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="title">Monster World</h1>
//         <SearchCard 
//           className="monster-search-box" 
//           SearchInput="Search" 
//           onChangeHandler={filterMonsers} 
//           placeholder="Search Monsters"/>
//         <CardList monsters={filteredMonstersName} />
//       </div>
//     );
//   }
// }

export default App;
