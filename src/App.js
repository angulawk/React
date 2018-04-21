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
      }
    ]
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

  render() {
    return (
      <div className="App">
        <button onClick={() => this.switchNameHandler("Bobo")}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Coco")}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Kico")}>Hobby: reading books</Person>
      </div>
    );
  }
}

export default App;
