import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person.js"

class App extends Component {
  state = {
    persons: [
      {
        name: "Aga",
        age: 24
      },
      {
        name: "Michał",
        age: 25
      },
    ],
    showPersons: false    
  }

  switchNameHandler = (newName) => {
    this.setState({persons: [
      {
        name: newName,
        age: 24
      },
      {
        name: "Kiki",
        age: 25
      }
    ]});
  }

  handleChangeName = (event) => {
    this.setState({persons: [
      {
        name: "Aga",
        age: 24
      },
      {
        name: event.target.value,
        age: 25
      }
    ]});
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
  
    return (
      <div className="App">
        <button 
          style={switchName}
          onClick={this.togglePersonsVisibility}>
          Toggle Persons
        </button>
        { 
          this.state.showPersons ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                click={this.switchNameHandler.bind(this, "Coco")}/>
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, "Kico")}
                onChange={this.handleChangeName}>Hobby: reading books</Person>
            </div> : null
        }
      </div>
    );
  }
}

export default App;
