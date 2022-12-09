import React, { useEffect } from "react";
import { useState } from "react";






export function getTodos(){
    return fetch(`http://localhost:3004/Todos`).then(res=>res.json())
   
}
export function PostData(data){
    fetch(`http://localhost:3004/Todos`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(res=>{console.log(res)
  })
}

export function DeleteTodo(id){
    fetch(`http://localhost:3004/Todos/${id}`,{
        method:"DELETE"
    })
}
export function ToggleTodo(id,data){
    fetch(`http://localhost:3004/Todos/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
}



function Todo() {
  const [todo, setTodo] = useState([]); //array storage)
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value)
    setInput(e.target.value);
  };

  const handleClick = () => {
    let obj = {
      title: input,
      status: false,
    };
    handlePost(obj)

    
  };
 
//  crud operation

function handleGet(){
    getTodos().then(res=>setTodo(res))

}
function handlePost(data){
    PostData(data)
    handleGet()

}

function handleDelete(id){
    DeleteTodo(id)
    handleGet()

}

function handleToggle(id,obj){
    let newobj={
        ...obj,
        status:!obj.status
    }
    ToggleTodo(id,newobj)
    handleGet()

}

useEffect(() => {
    handleGet()   

}, [])
  
  return (
    <div>
      {/* add todo */}
      <div>
        <input onChange={handleChange} type="text" placeholder="addtodo" />
        <button onClick={() => handleClick()}>Addtodo</button>
      </div>

      <div>
        {todo?.map((e) => (
          <div key={e.id}>
            <h3>{e.title}</h3>
            <h3>{e.status?"DOne":"notdone"}</h3>
            <button onClick={()=>handleToggle(e.id,e)}>Toggle</button>
            <button onClick={()=>handleDelete(e.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
