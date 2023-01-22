import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AuthContext";

function PrivateRoute({children}) {
    const { authState  } = useContext(AppContext)
	// console.log(authState .isAuth)
	return(
	<>
		{
			authState .isAuth ? children : <Navigate to="/login" />
		}
	</>
	)
}

export default PrivateRoute;
