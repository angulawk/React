import React, { Component } from 'react';
import classes from './App.css';
import Person from "./Person/Person.js"
import ErrorBoundry from "./ErrorBoundary/ErrorBoundary.js"

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
    this.setState({
      showPersons: !isPersonVisible
    })
  }

  render() {
    let persons = null;
    let btnClass = "";

    if(this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return (
            <ErrorBoundry key={person.id}>
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePerson(index)}
                onChange={event => this.handleChangeName(event, person.id)}
              />
            </ErrorBoundry>
          )
        })}
      </div>)

      btnClass = classes.Red
    }

    return (
      <div className={classes.App}>
        <button
          className={btnClass}
          onClick={this.togglePersonsVisibility}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
