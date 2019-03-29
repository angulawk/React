import React from "react";
import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnClass = "";
  const assignedClasses = [];

  if(props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if(props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  if(props.showPersons) {
    btnClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I am a React App</h1>
      <p className={assignedClasses.join( " " )}>Click toggle button to see results</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  )
}

export default cockpit;
