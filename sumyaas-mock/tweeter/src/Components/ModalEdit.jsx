import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    FormLabel,
    Box
  } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUser } from '../Redux/AuthReducer/action'

function ModalEdit({id}) {

    const dispatch = useDispatch()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [edituser,setEditUser] = useState({
      fullname:"",
      email:"",
      password:""
    })

    const handleSubmit = (e) =>{
      e.preventDefault()
      // axios.patch(`https://mock-api-oc4h.onrender.com/user/${id}`,edituser)
      // .then((res)=>console.log(res))
      dispatch(updateUser(edituser,id))

    }
    const handleInputChange = (e) =>{
      const {name,value} = e.target
      setEditUser({
        ...edituser,
        [name]:value,
      })
    }
   
    return (
      <>
        <Button w={180} onClick={onOpen} bg={'green'} color={'white'} fontWeight={'bold'}> Edit Profile</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Box width={'auto'} m={'auto'}>
            <form onSubmit={handleSubmit}>
            <FormLabel>Username</FormLabel>
                <Input
                    name="fullname"
                    type='text'
                    isInvalid
                    errorBorderColor='crimson'
                    placeholder='Enter Full Name'
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <FormLabel>Email</FormLabel>
                <Input
                    name="email"
                    type='email'
                    isInvalid
                    errorBorderColor='crimson'
                    placeholder='Enter Email'
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <FormLabel>Password</FormLabel>
                <Input
                    name='password'
                    type='password'
                    isInvalid
                    errorBorderColor='crimson'
                    placeholder='Enter Password'
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <Input
                    type='submit'
                    value='Submit'
                    bg={'gery.500'}
                    color={'black'}
                />

            </form>
        </Box>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default ModalEdit;