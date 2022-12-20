import React from 'react'
import { useState } from 'react'

function AddTodo({handleAdd}) {

    const [text,setText]=useState("")
  return (
    <div>
        <input placeholder='add todo' onChange={(e)=>setText(e.target.value)}  />
        <button onClick={()=>handleAdd(text)}>submit</button>
        <p>{text}</p>
    </div>
  )
}

export default AddTodo