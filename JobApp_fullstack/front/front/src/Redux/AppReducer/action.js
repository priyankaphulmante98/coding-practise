import * as types from "./actionTypes";
import axios from "axios";

const postJob = (payload) => (dispatch) => {
  dispatch({ type: types.POST_JOB_REQUEST });
  return axios.post(`https://aqueous-wave-63010.herokuapp.com/admin`,payload)
    .then((res) => {
      dispatch({ type: types.POST_JOB_SUCCESS });
    })
    .catch((res) => {
      dispatch({ type: types.POST_JOB_FAILURE });
    });
};

const getJobs=(filterBy=null)=>(dispatch)=>{
  dispatch({type:types.GET_JOB_REQUEST})
  return axios.post(`https://aqueous-wave-63010.herokuapp.com/jobs`,{position:filterBy})
  .then(res=>{
    console.log(res.data)
    dispatch({type:types.GET_JOB_SUCCESS,payload:res.data.data})
  })
  .catch(err=>{
    dispatch({type:types.GET_JOB_FAILURE})
  })
}

export { postJob,getJobs };
