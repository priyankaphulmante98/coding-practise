import { get } from "fetch-mock";
import { useEffect } from "react";
import { useContext } from "react";
import Loader from "../Components/Loader";
import { AppContext } from "../Context/AppContext";
import RestaurantTable from "../Components/RestaurantTable";
import Pagination from "../Components/Pagination";

const getData = ({ filterBy, page, limit }) => {
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=${limit}&filter=${filterBy}`)
}


function Dashboard() {
  const { authState,state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: "FETCH_REQUEST" })
    getData(state).then(res => res.json())
      .then(res => {
        console.log(res)
        dispatch({ type: "FETCH_SUCCESS", payload: res })
      })
  }, [state.filterBy,state.page])

  const handlePageChange=(i)=>{
    dispatch({type:"PAGE_CHANGE",payload:i})
  }
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={() => { dispatch({ type: "LOGOUT_SUCCESS" }) }}
          data-testid="logout-btn"
        >
          Logout
        </button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />
      <div>
        <select
          onChange={(e) => { dispatch({ type: "CHANGE_TYPE", payload: e.target.value }) }}
          data-testid="filter-box">
          <option value="">All</option>
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
          <option value="fine_dining">Fine Dining</option>
          <option value="ethnic">Ethnic</option>
          <option value="fast_food">Fast Food</option>
          <option value="cafe">Cafe</option>
          <option value="casual_dining">Casual Dining</option>
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {state.isLoading ? <Loader /> : <RestaurantTable data={state.data} />}
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
      </div>
      <br />
      <div data-testid="pagination-container">{
        <Pagination
        totalPages={state.totalPages}
        currentPage={state.page}
        handlePageChange={handlePageChange}
        />}</div>
    </div>
  );
}

export default Dashboard;
