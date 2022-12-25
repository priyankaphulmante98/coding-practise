import React from 'react'
import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    Heading,
    useColorModeValue,
    Image,
    Flex
} from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <Heading  fontSize='2em'>LOGO</Heading>
                        <Text textAlign={'start'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae ut blanditiis voluptatem debitis, officia !</Text>
                        <Stack direction={'row'} spacing={6}>
                            <FaTwitter />
                            <FaFacebook />
                            <FaInstagram />
                        </Stack>

                    </Stack>

                    <Stack align={'flex-start'}>
                        <Heading  fontSize='2em'>Causae</Heading>
                        <Link href={'#'}>Doming</Link>
                        <Link href={'#'}>Dicunt</Link>
                        <Link href={'#'}>Audire</Link>
                        <Link href={'#'}>Quaestio</Link>

                    </Stack>

                    <Stack align={'flex-start'}>
                        <Heading  fontSize='2em'>Aperiri</Heading>
                        <Link href={'#'}>Postulant</Link>
                        <Link href={'#'}>Affert</Link>
                        <Link href={'#'}>Audire</Link>
                        <Link href={'#'}>Quaestio</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <Flex gap={10} mt={10} textAlign={'start'}>
                            <Box>
                                <Image w={150} h={20} src="https://cdn.pixabay.com/photo/2018/02/24/20/40/fashion-3179178_1280.jpg"/>
                            </Box>
                            <Box>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                </Text>
                                <Text fontSize='12px'><b>July 10, 2019</b></Text>

                            </Box>
                        </Flex>
                        
                        <Flex  gap={10} textAlign={'start'}>
                            <Box>
                            <Image w={150} h={20} src="https://cdn.pixabay.com/photo/2018/02/24/20/40/fashion-3179178_1280.jpg"/>
                            </Box>
                            <Box>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Text>
                                <Text fontSize='12px'><b>July 10, 2019</b></Text>

                            </Box>
                        </Flex>
                    </Stack>
                </SimpleGrid>
            </Container>
            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ md: 'space-between' }}
                    align={{ md: 'center' }}>
                    <Text>Created by Summaiya</Text>
                    <Text>© 2022 Summaiya CEO. All rights reserved</Text>
                </Container>
            </Box>
        </Box>
    )
}

export default Footer
