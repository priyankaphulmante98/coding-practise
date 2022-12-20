import React from 'react'
import axios from "axios"
import { useEffect } from 'react';
import { Image, Text, Box, Grid, GridItem} from '@chakra-ui/react';
import { useState } from 'react';
import {Link} from "react-router-dom"



function Products() {

    const [data, setData]  = useState([])

async function GetProducts(){
    let res = await axios.get (`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
    // console.log(res.data.data);
    setData(res.data.data)
}
console.log(data);

useEffect(() => {
GetProducts()
},[])

  return (
   
    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
  
  {
    data.map((e) =>  {
        return <Link to={`/products/${e.id}`}><GridItem key={e.id} w='100%' h='auto' bg='blue.500' p={"1rem"} >
            
            
       <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQky5UaV7F6jH4n4SS8CGN7xD53f1SW_5Tvxg&usqp=CAU"}/>
       <Text>{e.title}</Text>
       <Text>{e.price}</Text>
       <Text>{e.category}</Text>
       <Text>{e.brand}</Text>
      

        </GridItem>
        </Link>
    })
  }

</Grid>
  )
}

export default Products
