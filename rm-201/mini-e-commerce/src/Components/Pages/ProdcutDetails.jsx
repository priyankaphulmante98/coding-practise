
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Image, Button } from '@chakra-ui/react'
import { addToCart } from "../Redux/Cart/action";

function ProdcutDetails() {
  const [data, setData] = useState({})
  const products = useSelector((state) => state.reducer.products)
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(products)
  let single = products.data.find((e) => {
    return e.id == id
  })
  useEffect(() => {
    setData(single)
  }, [id])
  console.log(id)

  const handleCart = () => {
    // console.log('add')
    let payload = {
      ...data,
    }
    dispatch(addToCart(payload))
    navigate(`/cart`)
  }
  return (
    <div>
      <div><h1>Single Data</h1></div>
      <div>
        {
          <Box
            key={data.id}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src={data.image} alt={data.id} />
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {data.title}
            </Box>

            <Box>
              Brand: {data.brand}
            </Box>
            <Box as="span" color="gray.600" fontSize="sm">
              Price: {data.price}
            </Box>
            <Box>
              <Button m={4} p={2}
                onClick={handleCart}
              >
                Add To Cart
              </Button>

            </Box>

          </Box>
        }
      </div>
    </div>
  )

}

export default ProdcutDetails