import React, { Component } from "react";
import withClass from "../../../withClass.js";
import PropTypes from "prop-types";
import Styles from "../Person/Person.css";
import AuthContext from "../../../context/authContext";
// import Persons from '../Persons.js';

class Person extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    console.log(this.context.authenticated);
  }

  render() {
    return (
      <div>
        {this.context.authenticated ? (
          <p>Authenticated </p>
        ) : (
          <p> Please login</p>
        )}
        <div className="Person">
          <p onClick={this.props.click}>
            I'm {this.props.name} and I'm {this.props.age} years old
          </p>
          <p>{this.props.chldren} </p>

          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
            className="Input"
          />
        </div>
      </div>
    );
  }
}

Person.propType = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};

export default withClass(Person, Styles);
