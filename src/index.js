import React from 'react'
import ReactDom from 'react-dom'
// CSS
import './index.css'
import {books} from './books'
import {Book} from './Book'
const names = ['john', 'peter', 'susan'];
const newNames = names.map((name)=>{
  return<h1>{name}</h1>
})
console.log(newNames)
function BookList(){
  
  return(<>
    <section className='booklist'>      
     {books.map((book,index)=>{
      return <Book key={index} {...book}/>

     })}
      </section>
      
    </>);
}


ReactDom.render(<BookList/> ,document.getElementById('root'))
//ReactDom.render(<Greet/> ,document.getElementById('root'))