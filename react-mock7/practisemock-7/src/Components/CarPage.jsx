import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export function CarPage() {
  const [data, setData] = useState
  ([]); 
  const [title,settitle]=useState("")
  const [brand, setbrand] =useState("");
  const [sort, setsort] =useState("");

  const [order, setorder] = useState("asc");

  function getdata() {
    axios
      .get(`https://json-deploy-fr7l.onrender.com/cars?${title}=${brand}&_sort=${sort}&_order=${order}`)
      .then((res) => setData(res.data));
  }
  function handlePostWish(obj) {
    axios
      .post("https://json-deploy-fr7l.onrender.com/wishlist", obj)
      .then((res) => alert("added to wish list"));
  }
  console.log(data);
  function handleDelete(id) {
    axios
      .delete(`https://json-deploy-fr7l.onrender.com/cars/${id}`)
      .then((res) => {
        alert("deleted");
        getdata();
      });
  }


  function filterBybrands(e){
    if(e.target.value){

      settitle("brand")
    }else{
      settitle("")
    }
    setbrand(e.target.value)

  }

 


  function sortBy(e){
    const {name,value}=e.target
    setsort(name)
    setorder(value)

  }
  useEffect(() => {
    getdata();
  }, [order, brand]);

  return (
    <div>

      <h1>cars page</h1>

      <div>
        <select name="kms"  onChange={(e)=> sortBy(e)}>
          <option value="">Filter by KMS</option>
          <option value="asc">Asc by kms</option>
          <option value="desc">DEsc by kms</option>
        </select>

        <select onChange={(e)=> filterBybrands(e)}>
          <option value=""> Filter by Brands</option>
          <option value="bmw">BMW</option>
          <option value="tata">tata</option>
          <option value="maruti">maruti</option>
        </select>

        <select name="price"  onChange={(e)=> sortBy(e)}>
          <option value="">Sort by price</option>
          <option value="asc">asc by price</option>
          <option value="desc">desc by price</option>
        </select>
      </div>
      <div id="container" >
        {data?.map((e) => (
          <div key={e.id} style={{ border: "1px solid red" }}>
            <h3>brand :{e.brand}</h3>
            <h3>type :{e.type}</h3>
            <h3>kms :{e.kms}</h3>
            <h3>year :{e.year}</h3>
            <h3>description :{e.desc}</h3>
            <h3>price :{e.price}</h3>
            <div>
              <button
                onClick={() => {
                  handlePostWish(e);
                }}
              >
                ⭐
              </button>
              <button onClick={() => handleDelete(e.id)}>✂</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
