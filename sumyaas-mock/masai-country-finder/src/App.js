import { useEffect, useState } from "react";
import "./App.css";
import Country from "./components/Country";
import axios from "axios";
import {
  Box,
  Select,
} from '@chakra-ui/react'
// import Todo from "./components/Todo";

function getData() {
  let url = `https://restcountries.com/v3.1/all`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
}

function App() {
  let [data, setData] = useState([]);
  const [sortByPopulation, setSortByPopulation] = useState("");

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  // Sorting
  const handleChange=(e)=>{
    setSortByPopulation(e.target.value)
     console.log(sortByPopulation)
     let sortedData = []
     if(sortByPopulation =='desc'){
         sortedData = data.sort((a,b)=>a.population-b.population)
     }
     else {
         sortedData = data.sort((a,b)=>b.population-a.population)
     }
     setData(sortedData);
 }

//  Filter 
const handleChangeRegion=(e)=>{
  axios.get(`https://restcountries.com/v3.1/region/${e.target.value}`).then((res)=>{
    setData(res.data)
})

}

  return (
    <div className="App">
      <div style={{display:"flex"}}>
        <Box>
          {/* Sorting */}
          <Select
            placeholder="Sort By Population"
            value={sortByPopulation}
            onChange={handleChange}
          >
            <option value="asc">Low To High</option>
            <option value="dsc">High To Low</option>
          </Select>
          </Box>
          <Box>
          {/* Filtering */}
          <Select
            placeholder="Filter By Region"

            onChange={handleChangeRegion}
          >
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
          </Select>
          </Box>
      </div>
      <Country data={data} />
    
    </div>
  );
}

export default App;
