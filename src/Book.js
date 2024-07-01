import React from 'react'

export const Book = (props) => {
  // attribute , eventHandler
  const {img, author, title} = props
  const clickHandler = () => {
    alert('Hello World')
  }
  return(
  <article onMouseOver={()=>console.log(title)} className='book'>
    <img src={img}/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>Click Me</button>
  </article>
  )
  
  
}
