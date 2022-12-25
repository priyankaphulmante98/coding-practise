import React from 'react'
import { Box, Stack, Text, Heading, Button, Divider, Select } from '@chakra-ui/react'
import { BsFillBookmarkCheckFill } from "react-icons/bs"
import { AiTwotoneDelete } from "react-icons/ai"
function ProductList({ product, handleDelete ,handleBookmark}) {
    const { createdAt } = product
    let x = createdAt.split('T')


    return (
        <Box height={'auto'} boxShadow='2xl' p='4' rounded='md' bg='white'>

            <Stack direction={['row', 'column']} spacing='15px' textAlign={'start'}>
                <Box p='6'>
                    <Box alignItems='baseline'>
                        <Heading
                            as='h4' fontSize='12px'
                            color='black'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            lineHeight={2}
                        >
                            <span style={{ textTransform: 'uppercase' }}>Title: </span> {product.title}
                        </Heading>
                    </Box>
                    <Box
                        color='black.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        lineHeight={2}
                    >
                        <span style={{ textTransform: 'uppercase' }}>Priority: </span> {product.priority}
                    </Box>
                    <Box alignItems='baseline'>
                        <Text
                            color='black.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xs'
                            lineHeight={2}
                        >
                            <span style={{ textTransform: 'uppercase' }}>Quantity: </span>{product.quantity}
                        </Text>
                    </Box>
                    <Box
                        mt='1'
                        fontWeight='semibold'
                        fontSize={12}
                        lineHeight='tight'
                    >
                        <span style={{ textTransform: 'uppercase' }}>Discription: </span>  {product.description}
                    </Box>

                    <Box
                        mt='1'
                        fontWeight='semibold'
                        fontSize={12}
                        lineHeight='tight'
                    >
                        <span style={{ textTransform: 'uppercase' }}>Date: </span>  {x[0]}
                    </Box>

                    <Box
                        mt='1'
                        fontWeight='semibold'
                        fontSize={12}
                        lineHeight='tight'
                    >
                        <span style={{ textTransform: 'uppercase' }}>Time: </span>  {x[1]}
                    </Box>

                </Box>
                <Box>
                    <Box
                        display={'flex'}
                        justifyContent={'space-around'}
                        m={'auto'}
                        gap={2}
                    >
                        <Button
                            w={180}
                            colorScheme='purple'
                            variant='solid'
                            fontWeight={'bold'}
                            onClick={()=>handleBookmark(product._id)}
                        >
                            <BsFillBookmarkCheckFill size={25} color='white' /></Button>
                        <Divider orientation='vertical' />


                        <Button
                            w={180}
                            colorScheme='purple'
                            variant='solid'
                            fontWeight={'bold'}
                            onClick={() => handleDelete(product._id)}
                        >
                            <AiTwotoneDelete size={25} color='white' /></Button>
                    </Box>
                </Box>

            </Stack>

        </Box>
    )
}

export default ProductList