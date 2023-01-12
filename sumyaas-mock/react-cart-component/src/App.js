import { useState } from "react";
import "./App.css";
import data from "./db.json";
import Product from "./components/Product"


function App() {
  const [item ,setItem]=useState(data)


  const handleQty = (payload,id) =>{

    if(payload=="INCREMENT"){
      let add =item.map((el)=>{
        return  el.id===id?{...el,quantity:el.quantity+1} : el
        })
        setItem([...add]) 
        // console.log(add)
    }else if(payload=="DECREMENT"){
      let reduce =item.map((el)=>{
      return el.id===id?{...el,quantity:el.quantity-1} : el
      })
      setItem([...reduce])
    }
    // switch(payload){
    //   case "INCREMENT":
    //     let add =item.map((el)=>{
    //     return  el.id===id?{...el,quantity:el.quantity+1} : el
    //     })
    //     console.log(add) 
    //   case "DECREMENT":
    //   let reduce =item.map((el)=>{
    //   return el.id===id?{...el,quantity:el.quantity-1} : el
    //   })
    //   console.log(reduce)
    //   default:
    //   
    // }
    
  }
// console.log(item)
const totals= item.reduce((acc,el)=>acc + el.price* el.quantity,0)
  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {/*  map through the  data and pass props to the Product component */}
        {
          item?.map((el)=>{
            return(
              <Product id={el.id} name={el.name} price={el.price} quantity={el.quantity} handleQty={handleQty}/>
            )
          })
        }
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
        Total:{totals}
      </h1>
    </div>
  );
}

export default App;
