import React, { Component } from 'react';
import Styles from '../Home/Home.css';
import AuthContext from '../../context/authContext';

class Home extends Component {

  render(){
        return(
            <div className={Styles}>
              <h1> Hi, I'm React App</h1>
               <p>This is reallly working</p>
               <button
               className="btn1"
               onClick={this.props.toggle}> Toggle Name </button>
               <AuthContext.Consumer>
                {(context)=> <button className="btn2" onClick={context.login}> Sign in</button>}  
               </AuthContext.Consumer>
             </div>
            );
    } 
}

export default Home;