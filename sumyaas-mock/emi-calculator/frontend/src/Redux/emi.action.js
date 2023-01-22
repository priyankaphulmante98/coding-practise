import * as types from "../Redux/emi.actionType"


export const getLoan = (payload)=>{
    return{type:types.LOAN_UPDATE,payload}
}
export const getRate = (payload)=>{
    return{type:types.RATE_UPDATE,payload}
}
export const getTenure = (payload)=>{
    return{type:types.TENURE_UPDATE, payload}
}


// export const handleUpdateEmi=(payload)=>(dispatch)=>{
//     console.log(payload.loan)
    // let r =  rate/(12*100)
    // let emi = loan *r * ( 1 +r )**amount / ( ( 1 +r )**amount- 1 ) 
    // let totalamount = (emi * amount);
    // let interest = (totalamount - loan);    
// }








