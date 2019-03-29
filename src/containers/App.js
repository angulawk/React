import React, { Component } from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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

  nameChangedHandler = (event, id) => {
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
    this.setState({
      showPersons: !isPersonVisible
    })
  }

  render() {
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePerson}
          changed={this.nameChangedHandler}
        />
    }

    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          clicked={this.togglePersonsVisibility}
          showPersons={this.state.showPersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
