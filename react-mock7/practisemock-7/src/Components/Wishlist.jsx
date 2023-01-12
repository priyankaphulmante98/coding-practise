import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Wishlist() {
    const [data, setData] = useState([]);

  function getdata() {
    axios
      .get("https://json-deploy-fr7l.onrender.com/wishlist")
      .then((res) => setData(res.data));
  }
  
  function handleDelete(id) {
    axios
      .delete(`https://json-deploy-fr7l.onrender.com/wishlist/${id}`)
      .then((res) => {
        alert("deleted");
        getdata();
      });
  }

  useEffect(() => {
    getdata();
  }, []);
    return (
        <div>
      <h1>wishlist page</h1>
      <div className="container">
        {data?.map((e) => (
          <div className="div"
          style={{ border: "1px solid red" }}>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSVHua7Xu26HqZeCBRonZaHvjCQ6IMWstoA&usqp=CAU" alt="img" /> */}
            <h3>brand :{e.brand}</h3>
            <h3>type :{e.type}</h3>
            <h3>kms :{e.kms}</h3>
            <h3>year :{e.year}</h3>
            <h3>description :{e.desc}</h3>
            <h3>price :{e.price}</h3>
            <div>
              
              <button onClick={() => handleDelete(e.id)}>✂</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}

export default Wishlist
