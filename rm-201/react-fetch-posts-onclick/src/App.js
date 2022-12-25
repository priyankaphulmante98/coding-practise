import "./App.css";
import {useState} from "react"

import Post from "./Components/Post";
import axios from "axios";

// async function getData(){
//   // return axios.get(`https://jsonplaceholder.typicode.com/posts`)
//   //   .then((res)=>res.data)

//   let res =  await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   let data = await res.json()
//   return data

// }


function App() {
  const [post,setPost] = useState([]);

const handleGet = () =>{

     axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res)=>setPost(res.data))
    .catch((err)=>console.log(err))
  // getData().then((data)=>{
    
  // })
}
// console.log(post)

  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn"
       onClick={handleGet} 
       style={{backgroundColor:"teal", padding:"2rem 4rem 2rem 4rem", fontSize:"18px", borderRadius:"5px", border:"none",marginTop:"10px"}}
      >
        GET POSTS
      </button>
      <div style={{ marginTop:"50px"}} id="post-container">
        {/*  map through the posts data and pass props to the Posts component */}
        {
          post?.map((item)=>{
            // console.log(item)
            return(
              <Post key={item.id} title={item.title} body={item.body}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
