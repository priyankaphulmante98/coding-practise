import { Link } from "react-router-dom";

export default function RestaurantCard({id,name,rating,type,price_starts_from}) {
  let obj={"fine_dining":"Fine Dining","ethnic":"Ethnic","cafe":"Cafe","fast_food":"Fast Food","casual_dining":"Casual Dining"}
  return (
    <tr data-testid="item">
      <td>
        <Link to={`/restaurants/${id}`} data-testid="name">{name}</Link>
      </td>
      <td data-testid="rating">{rating}</td>
      <td data-testid="type">{obj[type]}</td>
      <td data-testid="price">{price_starts_from}</td>
    </tr>
  );
}
