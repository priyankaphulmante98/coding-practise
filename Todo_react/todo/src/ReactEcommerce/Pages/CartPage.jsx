import { Box, Button, Card, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";

function CartPage() {
  const [cartdata, setCartdata] = useState([]);
  const [sum, setsum] = useState(0);
  const [alert,setalert]=useState(false)

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartdata(cart);
  }, []);
  console.log(cartdata);

  useEffect(()=>{
    let total= cartdata.reduce((acc,obj)=>acc+ obj.price*obj.quantity,0)
    setsum(total)
  

  },[cartdata])
//   useEffect(()=>{)

//   },[alert])
  function increment(id) {
    let updateddata = cartdata.map((e) =>
      e.id === id ? { ...e, quantity: e.quantity + 1 } : e
    );
    setCartdata(updateddata);
    localStorage.setItem('cart',JSON.stringify(cartdata))
  }
  function decrement(id) {
    let updateddata = cartdata.map((e) =>
      e.id === id ? { ...e, quantity: e.quantity - 1 } : e
    );
    setCartdata(updateddata);
    localStorage.setItem('cart',JSON.stringify(cartdata))
  }

  function placeOrder(obj){
    let orders=JSON.parse(localStorage.getItem('order')) || []
    // method1
    orders.push(obj)
    localStorage.setItem('order',JSON.stringify(orders))

    let updatecart = cartdata.filter(e=>e.id!==obj.id)
    setCartdata(updatecart)


    // method2
    // localStorage.setItem('order',JSON.stringify([...orders,obj]))
   
  }

  return (
    <div>
      <Box>Total Price :{sum?sum+50:0} </Box>

      {cartdata.map((obj, i) => (
        <Box>
          <Image src="" />
          <Text>{obj.title}</Text>
          <Text>{obj.brand}</Text>
          <Text>{obj.category}</Text>
          <Text>{obj.price}</Text>
          <Box>
            <Button onClick={() => increment(obj.id)}>+</Button>
            <Button>{obj.quantity}</Button>
            <Button
              disabled={obj.quantity === 1}
              onClick={() => decrement(obj.id)}
            >
              -
            </Button>
          </Box>
          <Box>
            <Button onClick={()=>placeOrder(obj)}  >Place Order</Button>
          </Box>
        </Box>
      ))}
    </div>
  );
}

export default CartPage;
