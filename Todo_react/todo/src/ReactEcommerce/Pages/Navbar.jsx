import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function ProductsNavbar() {
    return (
        <Flex justify={"space-around"} bg={"orange"} h={"50px"}>
          <Text> Logo </Text>
          <Link to="/products"><Text>Products</Text></Link>
        </Flex>
    )
}

export default ProductsNavbar
