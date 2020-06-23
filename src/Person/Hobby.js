import React from 'react';

// This is a dynamic component with props
// props: parameter for methods in react
// These props are from where Hobby is called
const Hobby = (props) => {
  return (
    <div>
      <p>Hi, my name is {props.name} and my hobby is {props.hobby}</p>
      <p>{props.children}</p>
    </div>
    
  );
};

export default Hobby;