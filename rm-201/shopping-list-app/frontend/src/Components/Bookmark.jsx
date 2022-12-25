import React, { useEffect } from 'react'
import { Box, SimpleGrid, Text, Select } from '@chakra-ui/react'

import axios from 'axios'
import BookmarList from './BookmarList'
import { useState } from 'react'

function Bookmark() {
const [data,setData] = useState([])
useEffect(()=>{
axios.get(`https://shoppinglist-api.onrender.com/bookmark`)
// .then((res)=>console.log(res.data.bookmarkData))
.then((res)=>setData(res.data.bookmarkData))
.catch((err)=>console.log(err))
},[])

  return (
    <Box>
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing='20px' p={'2rem'}>
        {data?.map((el, i) => {
            // console.log(el)
            return <BookmarList key={el._id} product={el}/>
        })
        }
    </SimpleGrid>

</Box>
  )
}

export default Bookmark