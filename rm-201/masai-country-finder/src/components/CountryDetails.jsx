import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Box,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'

function CountryDetails({id,el}) {
    // console.log(el)
    let {name:{nativeName}}=el
    console.log(nativeName)
    
    const handleDetails=(id,el)=>{
        console.log(id,el)
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
  return (
    <>
    <Button mt={4} onClick={()=>{
        onOpen()
        handleDetails(id,el)
    } }  >
     More Details
    </Button>
    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <div className='grid-containers' key={el.i}>
            {/* console.log(el.name.nativeName.ara.common) */}
                    <div className='content-text'>
                    <p><span>Native name:</span>{el.name.common}</p>
                     <p><span>Subregion: </span>{el.subregion}</p>
                    {/* <p><span>Currency Name: </span>{el.currencies}</p> */}
                    <p><span>Capital: </span>{el.capital}</p> 
                </div>
                </div>
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

export default CountryDetails