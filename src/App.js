import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

class App extends Component {
  state={
    monsters:[],
    searchField :''
  };

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({monsters : users}))
  }
  render() {
    const {monsters , searchField}=this.state;
    const filteredMonsters= monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
      <h1>Monsters Box</h1>
      < SearchBox  
      placeholder='Search monsters'
      handleChange={e => this.setState({searchField:e.target.value})}
      />
      < CardList monsters={filteredMonsters }/>
      </div>
    );
  }
}

export default App;
 