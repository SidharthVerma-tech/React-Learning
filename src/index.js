import React from 'react'
import ReactDom from 'react-dom'
// stateless functional component
// always return JSX

// const Greet = () => <h1>'Hello!'</h1>;
// const Greeting = () => {
//   return React.createElement('h1', {}, 'Hellow world')
// }
//JSX RULES
// return single element
// React Nested Components
function Greeting(){
  return (
    <>
    <div>
      <Message/>
      <Person/>
      <ul>
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
      </ul>
    </div>
    <div></div>
    </>
    
  );
}
const Person = () => {
  return (
    <h1>Sidharth Verma</h1>
  )
}
const Message = () => <h1>Hello  world</h1>
ReactDom.render(<Greeting/> ,document.getElementById('root'))
//ReactDom.render(<Greet/> ,document.getElementById('root'))