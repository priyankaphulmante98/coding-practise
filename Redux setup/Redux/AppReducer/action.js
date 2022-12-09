import * as types from "./actionTypes";
import axios from "axios";

const uploadQuestion = (payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_QUESTION_REQUEST });
  return axios({
    method: "POST",
    url: "/admin",
    baseURL: "http://localhost:8080",
    data: payload,
  })
    .then((res) => {
      dispatch({ type: types.UPDATE_QUESTION_SUCCESS });
    })
    .catch((res) => {
      dispatch({ type: types.UPDATE_QUESTION_FAILURE });
    });
};

const getQuestions=(query=null)=>(dispatch)=>{
  dispatch({type:types.GET_QUESTION_REQUEST})
  return axios.post(`http://localhost:8080/quiz`,query)
  .then(res=>{
    dispatch({type:types.GET_QUESTION_SUCCESS,payload:res.data})
  })
  .catch(err=>{
    dispatch({type:types.GET_QUESTION_FAILURE})
  })
}

export { uploadQuestion,getQuestions };
