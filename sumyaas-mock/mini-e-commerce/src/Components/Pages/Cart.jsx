import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Box, Image,Button } from '@chakra-ui/react'
import { Link } from "react-router-dom";


function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cart)
  const loading = useSelector((state) => state.reducer.loading)
  const error = useSelector((state) => state.reducer.error)
  console.log(products , 'data')
  useEffect(() => {

  }, [])


  
  return (
    <div>
      <h1>Cart Page</h1>
      <div>
        {
          loading ? <h1>Loading.....</h1> : error ? <h2>Someting went wrong</h2> :
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {products?.map((e) => (
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
                  <Box as="span" color="gray.600" fontSize="sm">
                    Price: {e.price}
                  </Box>
                  <Box> 
                  </Box>
                </Box>
              ))}
            </div>
        }
      </div>
    </div>
  )
}

export default Cart