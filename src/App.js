import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'
import Job from './Person/Job.js'
import Hobby from './Person/Hobby.js'

class App extends Component {
  // state is a reserved word
  // a special parameter in Components
  // from extends Component
  state = {
    persons: [
      {name: 'Matt', hobby: 'Racing'},
      {name: 'Vi', hobby: 'Albion'}
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked!');
  }

  render() {
    return (
      // Only return 1 component
      // Have to nested multiple components in one if want to return a lot of components
      // This is JSX, not HTML
      // You can do this, or use a bunch of React.createElement
      // Like the ones below


      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h1>Another heading</h1>
        <p>This is really working</p>
        {/* this.switchNameHandler() doesn't work*/}
        {/* https://stackoverflow.com/questions/48259077/calling-a-javascript-function-in-jsx-why-does-calling-a-function-without-the */}
        <button onClick = {this.switchNameHandler}>Switch Name</button>
        <Person />
        <Job />
        <Job />
        <Hobby name = "Minh" hobby = "Gaming"/>
        <Hobby name = "Tester" hobby = "testing">This is a children inside Hobby!!</Hobby>
        <Hobby name ={this.state.persons[0].name} hobby ={this.state.persons[0].hobby} />
      </div>
    );
    //Create an element to render in App
    //React.createElement(element, configuration of element, what's inside of element)
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
