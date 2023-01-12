import { Box, Heading, Text, Image, Stack, SimpleGrid, Container, Input, Button, Flex, Card } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import React from 'react'
import "../CSS/about.css"
import logo1 from "../assest/logo1.jpeg"
import logo4 from "../assest/logo4.jpeg"
import logo2 from "../assest/logo2.jpeg"
import logo3 from "../assest/logo3.jpeg"
import star from "../assest/star.jpeg"
import heart from "../assest/heart.jpeg"
import box from "../assest/box.jpeg"
import deal from "../assest/deal.svg"
import Footer from './Footer'
function About() {
  const divbox = [
    {
      id: 1,
      title: "50+",
      topic: "Lorem ipsum dolor sit amet ",
    },
    {
      id: 2,
      title: "73%",
      topic: "Lorem ipsum dolor sit amet ",
    },
    {
      id: 3,
      title: "0.03",
      topic: "Lorem ipsum dolor sit amet ",
    },
    {
      id: 4,
      title: "$9",
      topic: "Lorem ipsum dolor sit amet ",
    },
  ];

  return (

    <Box className='about-container'>
      <Box className='about-heading'>
        <Heading>About</Heading>
        <Text>Vivendo offendit persecuti</Text>
      </Box>
      <Box className='grid-container'>
        <Box className='' h='auto' >
          <Box className='about-content'>
            <Text>HOMERO</Text>
            <Heading mt={5}>Debet molestiae constituto</Heading>
            <Text mt={5}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsa iure tempore, fugit fuga eos dicta sunt recusandae dolorum, sint nobis, esse ex possimus illum numquam. Error voluptas saepe earum.
            </Text>
          </Box>
          <Box className='about-number'>
            <Box>
              <Heading>295+</Heading>
              <Text>Partem vocent</Text>
              <Text color={'#94959f'}>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Text>
            </Box>
            <Box>
              <Heading>1500+</Heading>
              <Text>Partem vocent</Text>
              <Text color={'#94959f'} >Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Text>
            </Box>

          </Box>

        </Box>

        <Box h='auto' margin={'auto'}>
          <Image src={logo1} w={600} h={400} />
        </Box>

      </Box>
      <hr style={{ marginTop: '20px' }} />
      <Stack spacing={4} mt={15} borderTop={"1px solid #F7F7F7"}>
        <Heading as='h4' size='lg' mt={15} >
          In love with React & Next
        </Heading>
        <Text fontSize='xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vero vel. <br />Voluptatum dicta quaerat ex tempora consequuntur!
        </Text>
      </Stack>

      <SimpleGrid columns={[1, 2, 3]} gap={5} width={'70%'} margin={'auto'} mt={10}>
        <Box bg={'white'}>
          <Image src={logo4} width={'50%'} m={'auto'} mt={10} />
          <Text as='h5' isTruncated fontWeight='bold' fontSize='large' mt={5}>
            Lorem ipsum dolor sit.
          </Text>
          <Text mt={5}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatum quos sint veritatis at nemo corrupti cum consequatur </Text>
          <hr style={{ marginTop: '20px' }} />
          <Text mt={2} color={'#000'} fontWeight={'bold'} p={'1rem'} >Learn more <ChevronRightIcon /></Text>
        </Box>
        <Box bg={'white'}>
          <Image src={logo2} width={'50%'} m={'auto'} mt={10} />
          <Text as='h5' isTruncated fontWeight='bold' fontSize='large'>
            Lorem ipsum dolor sit.
          </Text>
          <Text mt={10}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatum quos sint veritatis at nemo corrupti cum consequatur </Text>
          <hr style={{ marginTop: '20px' }} />
          <Text mt={2} color={'#000'} fontWeight={'bold'} p={'1rem'} >Learn more <ChevronRightIcon /></Text>
        </Box>

        <Box bg={'white'}>
          <Image src={logo3} width={'50%'} m={'auto'} mt={10} />
          <Text as='h5' isTruncated fontWeight='bold' fontSize='large' mt={10}>
            Lorem ipsum dolor sit.
          </Text>
          <Text mt={10}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatum quos sint veritatis at nemo corrupti cum consequatur </Text>
          <hr style={{ marginTop: '20px' }} />
          <Text mt={2} p={'1rem'} color={'#000'} fontWeight={'bold'}>Learn more <ChevronRightIcon /></Text>
        </Box>

      </SimpleGrid>
      <hr style={{ marginTop: '20px' }} />



      {/* INCIDERINT */}

      <Container as={Stack} maxW={'100%'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={15} w={'auto'} m={'auto'}>
          <Stack width={'auto'} color='black'>
            <Box >
              <Image src={deal} />
            </Box>
          </Stack>
          <Stack width={'auto'} margin={'auto'} maxW={'100%'}>
            <Box>
              <Text>
                INCIDERINT
              </Text>
              <Heading>Lorem deterruisset</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat corrupti debitis architecto!
              </Text>
              <Box mt={5} >
                <SimpleGrid columns={{ base: 1, sm: 1, md: 1 }} spacing={15} w={'auto'} m={'auto'} >
                  <Box display={'flex'} gap={10}>
                    <Image src={star} w={50} h={50} />
                    <Text>Mandamus exptenda has ex</Text>
                  </Box>
                  <Box display={'flex'} gap={10}>
                    <Image src={heart} w={50} h={50} />
                    <Text>Mandamus exptenda has ex</Text>
                  </Box>
                  <Box display={'flex'} gap={10}>
                    <Image src={box} w={50} h={50} />
                    <Text>Mandamus exptenda has ex</Text>
                  </Box>
                </SimpleGrid>
              </Box>
              <Box>
                <Flex gap={5} direction={{ base: 'column', md: 'row' }} justifyContent={'center'} mt={5}>
                  <Button p={'0rem 4rem'} bg={"#434CCC"} color={"white"}>Explore</Button>
                  <Button p={'0rem 4rem'} bg={"#ffff"} color={"#434CCC"}>Explore</Button>
                </Flex>
              </Box>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* Simlique */}
      <Box h={"auto"} bg={"#434CCC"} padding={'3rem 0rem'}>
        <Heading mt={10} color={"white"}>Similique sea</Heading>
        <Heading mt={10} color={"white"} fontSize={"1x1"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi
          dolorum ratione cum, est libero quisquam minima beatae ipsam minus.
        </Heading>
        <Flex mt={10} style={{ gap: "30px" }} justifyContent="center" gap={5} direction={{ base: 'column', md: 'row' }}>
          {divbox.map((el) => (
            <Card padding={'1rem 1rem'} >
              <Stack mt='12' spacing='3'>
                <Heading color={"white"}>{el.title}</Heading>
                <Text color={"white"}>
                  {el.topic}
                </Text>
              </Stack>
            </Card>
          ))}
        </Flex>
      </Box>


      {/* MEA MODUS VOLUMUS */}
      <Container as={Stack} maxW={'100%'} py={10} bg={'#FFDD78'} mt={20} p={'5rem 0rem'}>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={15} w={'80%'} m={'auto'}>
          <Stack width={'auto'} color='black'>
            <Text fontSize={20}>Summaiya</Text>
            <Heading>Lorem ipsum onsectetur adipisicing. </Heading>
          </Stack>
          <Stack width={'auto'} margin={'auto'}    >
            <Flex gap={5} direction={{ base: 'column', md: 'row' }}>
              <Input placeholder='Enter Something' size='md' bg={''} p={'0rem 4rem'} />
              <Button p={'0rem 4rem'} bg={'#434CCC'} color='#ffff'>Subscribe</Button>
            </Flex>
          </Stack>

        </SimpleGrid>

      </Container>



      {/* FOOTER COMPONENT */}
      <Footer />
    </Box>

  )
}

export default About
