const handleLoading = () =>({
    type:"IS_LOADING"
})
const handleError = () =>({
    type:"IS_ERROR"
})
const storeData = (payload) =>({
    type:"STORE_DATA",
    payload
})

const getData=(payload) => (dispatch)=>{
    dispatch(handleLoading())
    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products")
    .then((res)=> res.json())
    .then((res)=>dispatch(storeData(res)))
    .catch(()=>dispatch(handleError()))
}



export {handleLoading,handleError,storeData,getData}


