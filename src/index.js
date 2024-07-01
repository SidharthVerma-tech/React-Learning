import React from 'react'
import ReactDom from 'react-dom'
// CSS
import './index.css'

const firstBook = {
  author :'Julia Burchell',
  title :'Lower Secondary English Students Book: Stage 9',
  img : 'https://m.media-amazon.com/images/I/41YLzV-E3yL._SY445_SX342_.jpg',
}
const secondBook = {
  title : 'More Days at the Morisaki Bookshop:',
  author : 'Satoshi Yagisawa',
  img : 'https://m.media-amazon.com/images/I/51ptSTNYEeL._SY445_SX342_.jpg',
}
function BookList(){
  return (
    <section className='booklist'>      
     <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}/>
     <Book title={secondBook.title} author={secondBook.author} img={secondBook.img}/>
    </section>
    
  );
}
const Book = (props) => {
    const {img, author, title} = props
  return<article className='book'>
    <img src={props.img}/>
      <h1>{props.title}</h1>
      <h4>{props.author.toUpperCase()}</h4>
  </article>
}
ReactDom.render(<BookList/> ,document.getElementById('root'))
//ReactDom.render(<Greet/> ,document.getElementById('root'))