import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useEffect } from 'react'
import {useState} from 'react'
import { Image, Grid, GridItem } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'


function Products() {

    
  const [data, setData] = useState([])

  async function GetProducts(){
    let res =await axios(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
    // console.log(res.data.data)
    setData(res.data.data)

  }
  console.log(data);

  useEffect(() => {
 GetProducts()
  }, [])

  return (
<Grid templateColumns='repeat(4, 1fr)' gap={6} >
    {
        data.map((e) => {
           return <Link to={`/products/${e.id}`}><GridItem key={e.id} w='fit-content' h='auto' bg='teal' mt={"15px"} p={"5px"}  >
        
           <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ26rfNhE--gxp-ei7ARPgiaraxYaJ37OY4ePapA-5wmeHijdSNEDUq6JLfFQWIj0VkZpA&usqp=CAU"}/>
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
