import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, ButtonGroup, Heading, Image, Spacer, Text, } from '@chakra-ui/react'
import ModalEdit from './ModalEdit'

function UserProfile() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer)
  // console.log(user)


  const hanldeDelete = () => {

  }
  return (
    <Box maxW='sm' borderWidth='3px' borderRadius='lg' overflow='hidden' m={'auto'} mt={10}>
      <Box>
        <Image m={"auto"} borderRadius={'50%'} src={user.image} alt={user.name} />
      </Box>

      <Box p='6'>
        <Box alignItems='baseline'>
          <Heading
            as='h2' size='xl'
            color='black'
            fontWeight='semibold'
            letterSpacing='wide'
            textTransform='uppercase'
            lineHeight={2}
            ml='2'
          >
            {user.username}
          </Heading>
        </Box>
        <Box alignItems='baseline'>
          <Text
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            lineHeight={2}
            ml='2'
          >
            {user.fullname}
          </Text>
        </Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {user.email}
        </Box>

      </Box>
      <Box>
        <ButtonGroup display={'flex'} justifyContent={'space-around'} m={'auto'} p={5}>
          <Button w={180} bg={'#CDD2FC'}> {user.followers} Followers</Button>
          <Button w={180} bg={'#CDD2FC'}>{user.following} Following </Button>
        </ButtonGroup>
        <Spacer />

        <ButtonGroup display={'flex'} justifyContent={'space-around'} m={'auto'} p={5}>
          {/* <Button onClick={onOpen} bg={'green'} color={'white'} fontWeight={'bold'}> Edit Profile</Button> */}
          <ModalEdit id={user.id} />

          <Button w={180} bg={'red'} color={'white'} fontWeight={'bold'} onClick={hanldeDelete}>Delete Account </Button>
        </ButtonGroup>
      </Box>



    </Box>
  )
}

export default UserProfile