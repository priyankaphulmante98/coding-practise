import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function OrderPage() {
const [orders,setorders]=useState([])
    useEffect(()=>{
   let orderdata =JSON.parse(localStorage.getItem('order')) ||[]
   setorders(orderdata)
    },[])
  return (
    <div>
        <div>Orders</div>
        {
            orders.map((obj)=>{
                return(
                    <div>
                        <h3>{obj.title}</h3>
                        <h3>{obj.brand}</h3>
                        <h3>{obj.price}</h3>
                        <h3>{obj.quantity}</h3>
                        </div>
                )
            })
        }
      
    </div>
  )
}

export default OrderPage
