import React from 'react'
import  axios  from 'axios';
import { useParams } from 'react-router-dom';
import {useState, useEffect } from 'react';
import {Box, Text, Image} from "@chakra-ui/react"



function SingleProduct() {
  

const params =useParams()
const [data, setData] = useState({})


// let nobj={
//   name:'priya',
//   email:'priya@masai.com'
// }
// console.log()

 async function HandleGetData(){
  const {product_id} = params

  let res = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${product_id}`)
  // console.log(res.data.data,"spec data")
  setData(res.data.data)
  
 }
 console.log(data)

 useEffect((e) => {
  HandleGetData()
 },[])

  return (
    <Box>
       
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQky5UaV7F6jH4n4SS8CGN7xD53f1SW_5Tvxg&usqp=CAU"/>
        <Text>{data.title}</Text>
        <Text>{data.brand}</Text>
        <Text>{data.price}</Text>
        <Text>{data.category}</Text>

     
     
      
        
   
    </Box>
  )
}

export default SingleProduct
