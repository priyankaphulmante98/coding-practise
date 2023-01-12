import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductList from '../Components/ProductList'
import { Box, SimpleGrid, Text, Select } from '@chakra-ui/react'

// https://shoppinglist-api.onrender.com/product
function Product() {

    const [data, setData] = useState([])
    const getData = () => {
        axios.get(`https://shoppinglist-api.onrender.com/product`)
            // .then(res=>console.log(res.data.product))
            .then((res) => setData(res.data.product))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        getData()
    }, [])
    // console.log(data)


    // DELETE
    function handleDelete(id) {
        axios.delete(`https://shoppinglist-api.onrender.com/product/delete/${id}`).then(res => getData())

    }
    // BOOKMARK
    const handleBookmark = (id) => {
        axios.post(`https://shoppinglist-api.onrender.com/bookmark/create/${id}`)
    }

    const handleChangeSort = (e) => {
        const value = e.target.value

        if (value === 'asc') {
            axios.get(`https://shoppinglist-api.onrender.com/product?q=asc}`)
                .then((res) => getData())
        }
        if (value == 'desc') {
            axios.get(`https://shoppinglist-api.onrender.com/product?q=desc}`)
                .then((res) => getData())
        }

    }



    return (
        <Box>
            <Box>
                <Text>Product Page</Text>
            </Box>
            <Box>
                <Select onChange={handleChangeSort} placeholder='Select By Recent Time'>
                    <option value='asc'>Ascending </option>
                    <option value='desc'>Descending</option>
                </Select>
            </Box>
            <Box>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing='20px' p={'2rem'}>
                    {data?.map((el, i) => {
                        // console.log(el)
                        return <ProductList key={el._id} product={el} handleDelete={handleDelete} handleBookmark={handleBookmark} />
                    })
                    }
                </SimpleGrid>

            </Box>

        </Box>
    )
}

export default Product
{/* <ProductList/> */ }