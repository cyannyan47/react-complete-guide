import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'
import Job from './Person/Job.js'
import Hobby from './Person/Hobby.js'

class App extends Component {
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

        <Person />
        <Job />
        <Job />
        <Job />
        <Hobby name = "Minh" hobby = "Gaming"/>
      </div>
    );
    //Create an element to render in App
    //React.createElement(element, configuration of element, what's inside of element)
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
