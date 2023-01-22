import React from "react";
import { useState } from "react";
import axios from "axios";

const init = {
  brand: "",
  type: "",
  year: "",
  kms: "",
  desc: "",
  price: "",
};
function Adpage() {
  const [data, setData] = useState(init);

  function handleChange(e) {
    const { value, name } = e.target;

    setData({ ...data, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    Postdata(data)
  }
  console.log(data)

  function Postdata(data) {
    axios
      .post(`https://json-deploy-fr7l.onrender.com/cars`, data)
      .then((res) => alert("jhal"));
  }
  return (
    <div>
      <h1>add page</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <select onChange={(e) => handleChange(e)} name="brand" id="brand">
          <option value="">Brand</option>
          <option value="tata">tata</option>
          <option value="maruti">maruti</option>
          <option value="bmw">BMW</option>
        </select>

        <select onChange={(e) => handleChange(e)} name="type" id="type">
          <option value="">Type</option>
          <option value="manual">Manual</option>
          <option value="automated">Automated</option>
        </select>

        <select onChange={(e) => handleChange(e)} name="year" id="year">
          <option value="">Year</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>

        <input
          type="number"
          name="kms"
          onChange={(e) => handleChange(e)}
          placeholder="Km driven"
          id="kms"
        />

        <input
          type="text"
          name="desc"
          onChange={(e) => handleChange(e)}
          placeholder="Description"
          id="desc"
        />

        <input
          type="number"
          name="price"
          onChange={(e) => handleChange(e)}
          placeholder="Price"
          id="price"
        />

        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Adpage;
