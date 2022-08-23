import { Component, useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.components';
import './App.css';
// import userEvent from '@testing-library/user-event';

const App = () =>{
  const [searchField, setSearchField] = useState("")
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((users)=> setMonsters(users)) 
  },[])

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
     })
     setFilteredMonsters(newFilteredMonsters)
  },[monsters,searchField])

  const onSearchChange = (e) =>{
    const searchFieldStr = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldStr)
  }

  return(
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
      className="search-box" 
      onChangeHandler={onSearchChange}
      placeholder = "Search Monsters"
      />
      <CardList monsters ={filteredMonsters}/>
    </div>
  )
}


// <CardList monsters ={filteredMonsters}/>
/* class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField : ""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((users)=> this.setState(() => {
      return {monsters: users}
    }
    ))

  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase()
    this.setState(()=>{
      return {searchField}
    })
    }
  
  render(){

    const {monsters, searchField} = this.state
    const {onSearchChange} = this
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
     })
    return (
      <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
      className="search-box"
      onChangeHandler={onSearchChange}
      placeholder = "Search Monsters"
      />
      <CardList monsters ={filteredMonsters}/>
      </div>
    );
  }
} */

export default App;
