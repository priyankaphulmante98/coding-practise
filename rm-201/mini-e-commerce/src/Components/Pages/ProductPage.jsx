import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Box, Image, Select } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { getData } from '../Redux/Product/action';
import { useState } from 'react';
import Pagination from './Pagination';
function ProductPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.reducer.products)
  const loading = useSelector((state) => state.reducer.loading)
  const error = useSelector((state) => state.reducer.error)
  const [filterdata, setfilter] = useState(products.data)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(10)
  // console.log(products)

  
  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getData())
    }
  }, [dispatch, products.length])

  useEffect(()=>{
    setfilter(products.data)
  },[ products.length])

  const handleChangeCategory = (e) => {
    let val = e.target.value
    let x = products.data.filter((el) => {
      return el.category === val
    })
    setfilter(x)
  }
  const handleChangePrice=(e)=>{
    let val =(e.target.value)
     let sortedData = []
     if(val =='asc'){
         sortedData = products.data?.sort((a,b)=>a.price-b.price)
     }
     else {
         sortedData = products.data?.sort((a,b)=>b.price-a.price)
     }
     setfilter([...sortedData]);
 }
//  useEffect(() => {
//   getData({page}).then((res) => {
//     dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: res.data });
//     setTotal(res.data.totalPages);
//   });
// }, [page]);

  return (
    <div>
      <h1>ProductPage</h1>
      <div>
        <Select placeholder='Select By Category' onChange={handleChangeCategory}
        >
          <option value='kids'>Kids</option>
          <option value='women'>Women</option>
          <option value='homedecor'>Home Decoration</option>
        </Select>
      </div>

      <div>
        {/* Sorting */}
        <Select
          placeholder="Sort By Price"
          onChange={handleChangePrice}
        >
          <option value="asc">Low To High</option>
          <option value="dsc">High To Low</option>
        </Select>
      </div>
      <div>
        {
          loading ? <h1>Loading.....</h1> : error ? <h2>Someting went wrong</h2> :
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {filterdata?.map((e) => (
                <Link to={`/${e.id}`}>
                  <Box
                    key={e.id}
                    maxW="sm"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                  >
                    <Image src={e.image} alt={e.id} />
                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                    >
                      {e.title}
                    </Box>

                    <Box>
                      Brand: {e.brand}
                    </Box>
                    <Box>
                      Category: {e.category}
                    </Box>
                    <Box as="span" color="gray.600" fontSize="sm">
                      Price: {e.price}
                    </Box>
                  </Box>
                </Link>
              ))}
            </div>
        }
        <Box>
        <Pagination total={total} current={page} onChange={setPage} />
        </Box>
      </div>
    </div>
  )
}

export default ProductPage