import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function PrivateRoute({ children }) {
	const { authState } = useContext(AppContext)
	return(
	<>
		{
			authState.isAuth ? children : <Navigate to="/login" />
		}
	</>
	)

}

export default PrivateRoute;
