import React from 'react'

function TodoItem(props) {
    console.log(props,"dfdsafsa")
    const {title,status,_id,UpdateTodo,handleDelete}=props;
  return (
    <div style={{display:"flex",gap:"2rem"}}>
    <h3>{title}</h3>
    <h3>{status?"Done":"Not done"}</h3>
    <button onClick={()=>UpdateTodo(_id,!status)}   >toggle</button>
    <button onClick={()=>handleDelete(_id)} >delete</button>

    </div>
  )
}

export default TodoItem