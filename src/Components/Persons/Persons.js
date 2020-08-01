import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Person from './Person/Person.js';

class Persons extends Component{

render(){
    return(
            this.props.person.map((person,index)=>{
            return <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.props.changed(event,person.id)}
            />
        })
    );
}
}

Persons.propType ={
    clicked: PropTypes.func,
    changed: PropTypes.func
}

export default Persons;