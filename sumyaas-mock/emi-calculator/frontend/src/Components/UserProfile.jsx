import React from 'react'
import { Box, Heading, Text, } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'


function UserProfile() {
let token = JSON.parse(localStorage.getItem("user_token")) || []
const [userData,setUserData]  = useState({})
// console.log(token)
useEffect(()=>{
    fetch("http://localhost:8080/profile",{
        method:"POST",
        headers:{"Authorization":`Bearer ${token}`}
    })
    .then(res=>res.json())
    .then(res=>{
        setUserData(res.data)
    })
})
console.log(userData)

    return (
        <Box maxW='sm' borderWidth='3px' borderRadius='lg' overflow='hidden' m={'auto'} mt={10}>
            <Box p='6'>
                <Box alignItems='baseline'>
                <Text
                        fontWeight='semibold'
                        letterSpacing='wide'
                        textTransform='uppercase'
                        lineHeight={2}
                        ml='2'
                    >
                        Name
                    </Text>
                </Box>
                <Box alignItems='baseline'>
                    <Text
                        fontWeight='semibold'
                        letterSpacing='wide'
                        textTransform='uppercase'
                        lineHeight={2}
                        ml='2'
                    >
                        Name
                    </Text>
                </Box>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    <Text
                        fontWeight='semibold'
                        letterSpacing='wide'
                        textTransform='uppercase'
                        lineHeight={2}
                        ml='2'
                    >
                     Logged In Time
                    </Text>
                   
                </Box>
            </Box>
        </Box>
    )
}

export default UserProfile