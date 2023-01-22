import { createContext, useReducer } from "react";

export const AppContext = createContext()
const initState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    token: null,
    data: [],
    page: 1,
    limit: 10,
    totalPages: null,
    singleData :{}
}
const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case "LOGIN_SUCCESS":
            return { ...state, isAuth: true, token: payload }
        case "LOGOUT_SUCCESS":
            return { ...state, isAuth: false, token: null }
        case "FETCH_REQUEST":
            return { ...state, isLoading: false, isError: false }
        case "FETCH_SUCCESS":
            return { ...state, isLoading: true, data: payload.data, totalPages:payload.totalPages }
        case "FETCH_FAILURE":
            return { isError: true, data: [] }
        case "CHANGE_PAGE" :
            return {...state, page:payload}
        case "SINGLE_DATA" :
            return {...state, singleData:payload}
        default:
            return state
    }
}
function AuthContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState)
    const authState = { isAuth: state.isAuth, token: state.token }
    return (<AppContext.Provider value={{ authState , state, dispatch }}>
        {children}
    </AppContext.Provider>)
}

export default AuthContextProvider;
