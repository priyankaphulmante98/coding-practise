import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function RestaurantPage() {
  let obj = { "fine_dining": "Fine Dining", "ethnic": "Ethnic", "cafe": "Cafe", "fast_food": "Fast Food", "casual_dining": "Casual Dining" }
  const [data, setData] = useState({});
  const params = useParams();
  // console.log(params)

  useEffect(() => {
    setData({})
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${params.id}`)
      .then(res => res.json())
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })

  }, [])

  if (!data.id) {
    return <Loader />;
  }
  return (
    <div data-testid="restaurant-container">
      <img src={data.image} alt={data.name} data-testid="restaurant-image" width={"100%"} />
      <div>
        <h4 data-testid="restaurant-name">{data.name}</h4>
      </div>
      <div className="flex">
        <div>
          Type:
          <b data-testid="restaurant-type">{obj[data.type]}</b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating">{data.rating}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes">{data.number_of_votes}</b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price">{data.price_starts_from}</b>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default RestaurantPage;
