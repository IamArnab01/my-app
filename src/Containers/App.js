import React, { Component } from "react";
import Styles from "./App.css";
// import PropTypes from 'prop-types';
import Persons from "../Components/Persons/Persons";
import Home from "../Components/Home/Home";
import withClass from "../withClass.js";
import AuthContext from "../context/authContext";

class App extends Component {
  state = {
    person: [
      { id: "asdf", name: "Arnab", age: 20 },
      { id: "ghjk", name: "Piklu", age: 20 },
      { id: "zxcvb", name: "Virat", age: 28 },
    ],
    otherstate: "some other value",
    showPerson: false,
    authenticated: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { name: "Arnab", age: 20 },
        { name: newName, age: 20 }, // changing the state as entred by user
        { name: "Virat", age: 28 },
      ],
    });
  };

  nameChangeHandler = (e, id) => {
    const personIndex = this.state.person.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.person[personIndex],
    };

    person.name = e.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({ person: persons });
  };

  deletePersonHandler = (personIndex) => {
    const person = [...this.state.person];
    person.splice(personIndex, 1);
    this.setState({ person: person });
  };

  togglePersonHandler = () => {
    const doShow = this.state.showPerson; // storing the state value
    this.setState({ showPerson: !doShow }); // changing the value
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    let person = null;

    if (this.state.showPerson) {
      person = (
        <div>
          <Persons
            person={this.state.person}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <AuthContext.Provider
        value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler,
        }}
      >
        <div className="App">
          <Home
            showPerson={this.state.showPerson}
            person={this.state.person}
            toggle={this.togglePersonHandler}
            login={this.loginHandler}
          />
          {person}
        </div>
      </AuthContext.Provider>
    );
  }
}

export default withClass(App, Styles);
