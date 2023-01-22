import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AuthContext";

// async function fetchData(params) {
//   try{
//     let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${params.id}`)
//     let data =await res.json()
//     setData(data.data)
//   }catch(err){
//     console.log(err)
//   }
// }
function SingleRestaurantPage() {
  const {state , dispatch} = useContext(AppContext)
  const singleData = state.singleData
  const params = useParams()
  useEffect(() => {
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${params.id}`)
      .then(res => res.json())
      .then(res => {
        dispatch({type:"SINGLE_DATA", payload:res.data})
      })
      .catch((err)=>{
        console.log(err)
      })

  }, [])
  return (
    <div data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name">{singleData.name}</h3>
      </div>
      <div data-testid="restaurant-type">Type: {singleData.type}</div>
      <div data-testid="restaurant-rating">Rating: {singleData.rating}</div>
      <div data-testid="restaurant-votes">Votes: {singleData.number_of_votes}</div>
      <div data-testid="restaurant-price">Starting Price: {singleData.price_starts_from}</div>
      <div>
        <img data-testid="restaurant-image" width={"100px"} src={singleData.image} alt={singleData.name}/>
      </div>
    </div>
  );
}
export default SingleRestaurantPage;
