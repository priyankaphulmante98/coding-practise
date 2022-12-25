import {Input} from "@chakra-ui/react"
import {useDispatch, useSelector} from "react-redux"
import { getLoan, getRate, getTenure } from "../Redux/emi.action";
function EMI() {
  const {loan,rate,tenure} = useSelector((state)=>state)
  const dispatch = useDispatch()
    let r =  rate/(12*100)
    let emi = loan *r * ( 1 +r )**tenure / ( ( 1 +r )**tenure- 1 ) 
    let totalamount = (emi * tenure);
    let interest = (totalamount - loan); 
  return (
    <div>
      <h1> EMI CALCULATOR </h1>
      <div style={{textAlign:'center' ,width:"30%",margin:'auto'}}>
        <label>Emi: </label><br/>
        <Input
          onChange={(e)=>dispatch(getLoan(e.target.value))}
          type="number"
          placeholder="Enter Number"
        />
        <br />
        <br />
        <label>Interest Payable: </label><br/>
        <Input
          onChange={(e)=>dispatch(getRate(e.target.value))}
          type="number"
          placeholder="Enter Number"
        />
        <br />
        <br />
        <label>Total Payment: </label><br/>
        <Input
          onChange={(e)=>dispatch(getTenure(e.target.value))}
          type="number"
          placeholder="Enter Number"
        />
        <br />
        <br />
      </div>

      <div>
        <h1>EMI : {(emi).toFixed(2)} </h1>
        <h1>INTEREST: {(interest).toFixed(2)}</h1>
        <h1>TOTAL_AMOUNT: {(totalamount).toFixed(2)}</h1>
      </div>
    </div>
  );
}
export default EMI;
