import { useContext } from "react";
import { AppContext } from "../Context/AuthContext";
import { useEffect } from "react";
import RestaurantTable from "../Components/RestaurantTable";
import Pagination from "../Components/Pagination";

const fetchData = ({ page, limit }) => {
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=${limit}`)

}
function Dashboard() {
  const { authState , state, dispatch } = useContext(AppContext);
  // console.log(state)
  useEffect(() => {
    dispatch({ type: "FETCH_REQUEST" })
    fetchData(state)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data)
        dispatch({ type: "FETCH_SUCCESS", payload: res })
      })
      .catch((err) => {
        console.log(err)
        dispatch({ type: "FETCH_FAILURE" })
      })
  }, [state.page])

  // console.log(authState .token)
  const handlePageChange = (i) => {
    dispatch({ type: "CHANGE_PAGE", payload: i })
  }
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={() => dispatch({ type: 'LOGOUT_SUCCESS' })}>Logout</button>
        <p>
          Token: 
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        {
           <RestaurantTable data={state.data} />
        }
      </div>
      <div data-testid="pagination-container">
        <Pagination totalPages={state.totalPages} handlePageChange={handlePageChange} currentPage={state.page} />
      </div>
    </div>
  );
}

export default Dashboard;
