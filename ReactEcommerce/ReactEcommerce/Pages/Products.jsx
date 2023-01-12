import React from 'react'
import axios from "axios"
import { useEffect } from 'react';
import {
  Select,
  HStack,
  Image,
  Text,
  Box,
  Grid,
  GridItem,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from './Pagination';

function Products() {
  const [data, setData] = useState({});
  const [filterBy, setFilterBy] = useState("");
  const [sortBy, setSortBy] = useState("price");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [order, setOrder] = useState("asc");
  const [totalpages, setTotalPages] =useState(data.totalPages|| 4)


  // const [ cart, setCart] = useState([])
  async function GetProducts({ limit, filterBy, sortBy, order, page }) {
    // https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&filter=women&sort=price&order=desc
    let res = await axios.get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=${limit}&filter=${filterBy}&sort=${sortBy}&order=${order}&page=${page}`
    );
    // console.log(res);
    // setTotalPages(res.data.totalpages)
    
    setData(res.data);
  }
  console.log(data);

  useEffect(() => {
    GetProducts({ limit, filterBy, sortBy, order, page });
  }, [limit, filterBy, sortBy, order, page]);


  
  return (
    <Box as='center'>
      <Box m={"2rem 0"}>
        <HStack spacing={3}>
          <Select variant="outline" placeholder="filterBy" onChange={(e) => setFilterBy(e.target.value)}>
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="homedecor">homedecor</option>
          </Select>
        
          <Select variant="flushed" placeholder="orderOfSort" onChange={(e) => setOrder(e.target.value)}>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
          </Select>
          <Select variant="unstyled" placeholder="limit" onChange={(e) => setLimit(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </Select>

          
        </HStack>
        <Box>
        <Pagination totalpages={totalpages} page={page} setPage={setPage} />


        </Box>
      </Box>


      <SimpleGrid columns={{lg:4, md:2, sm:1, base:1}}  justifyContent={"Center"} alignItems={"center"} gap={6}>
        {data.data?.map((e) => {
          return (
            <Link to={`/products/${e.id}`} key={e.id}>
              <GridItem w="auto" h="auto"  bg="blue.500" p={"1rem"}>
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQky5UaV7F6jH4n4SS8CGN7xD53f1SW_5Tvxg&usqp=CAU"
                  }
                />
                <Text>{e.title}</Text>
                <Text>{e.price}</Text>
                <Text>{e.category}</Text>
                <Text>{e.brand}</Text>
              </GridItem>
            </Link>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default Products
