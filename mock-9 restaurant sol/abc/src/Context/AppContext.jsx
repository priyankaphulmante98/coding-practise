import { useReducer } from "react";
import { createContext } from "react";
export const AppContext = createContext()

const initState = {
	isLoading: false,
	isAuth: false,
	token: null,
	data: [],
	page: 1,
	limit: 10,
	totalPages: null,
	filterBy: ""

}
const reducer = (state, action) => {
	const { type, payload } = action
	switch (type) {
		case "LOGIN_SUCCESS":
			return { ...state, isAuth: true, token: payload }

		case "FETCH_REQUEST":
			return { ...state, isLoading: true }

		case "FETCH_SUCCESS":
			return { ...state, isLoading: false, data: payload.data, totalPages: payload.totalPages }

		case "PAGE_CHANGE":
			return { ...state, page: payload }

		case "CHANGE_TYPE":
			return { ...state, filterBy: payload }

		case "LOGOUT_SUCCESS":
			return { ...state, token: null, isAuth: false }

		default:
			return state
	}
}

function AppContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initState)
	const authState={isAuth:state.isAuth,token:state.token}
	return (
		<AppContext.Provider value={{authState, state, dispatch }}>
			{children}
		</AppContext.Provider>
	)
}

export default AppContextProvider;
