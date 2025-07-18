import React, { useState } from 'react'

function Card({name}) {

  let [color, setcolor] = useState('black')
  let [msg, setmsg] = useState('')
  let [font, setfont] = useState('100px')

  const changecolor = () => {

    setcolor('blue')
    setmsg('blue')
    setfont('50px')

  }

  return (
    <div >

      <footer>
        <h1 style={{ color: color, fontSize: font }} >{name}</h1>
        <p>I am 21 years old </p>
        <button onClick={changecolor}>Click me </button>
        {msg}
      </footer>

    </div>
  )
}

export default Card
