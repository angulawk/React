import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person.js"

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Aga", age: 24 },
      { id: "2", name: "Alice", age: 25 },
    ],
    showPersons: false    
  }

  deletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  handleChangeName = (event, id) => {
    const personIndex = this.state.persons.findIndex((singlePerson) => {
      return singlePerson.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  togglePersonsVisibility = () => {
    const isPersonVisible = this.state.showPersons;
    this.setState({showPersons: !isPersonVisible})
  }

  render() {
    const switchName = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid black",
      padding: "8px"
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person name={person.name} age={person.age} click={() => this.deletePerson(index)} key={person.id} onChange={(event) => this.handleChangeName(event, person.id)}/>
        })}
      </div>
    )}
  
    return (
      <div className="App">
        <button 
          style={switchName}
          onClick={this.togglePersonsVisibility}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
