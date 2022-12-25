import React from 'react'
import {
    Box,
    Image,
    SimpleGrid,
    Stack,
    Stat,
    StatLabel,
    StatNumber,
    Input

} from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'
let token = JSON.parse(localStorage.getItem("user_token")) || ""
const initState = {
    loan: 0,
    rate: 0,
    tenure: 0
}
const postData=(obj)=>{
    fetch("http://localhost:8080/user/emi",{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{"Content-Type":"application/json","Authorization":`Bearer ${token}`}
    })
}

function Calculator() {
    const [data, setData] = useState(initState);
    const [res, setRes] = useState({ emi: 0, totalamount: 0, interest: 0 })
    const handleChange = (e) => {
        const { value, name } = e.target
        setData({
            ...data,
            [name]: value
        })
    }


    useEffect(() => {
        let r=data.rate/(12*100)
        let emi=data.loan *r * ( 1 +r )**data.tenure / ( ( 1 +r )**data.tenure- 1 ) 
        let totalamount = +(emi * data.tenure);
        let interest = +(totalamount - data.loan);
        let newObj = { emi, totalamount, interest };
        setRes(newObj)

    }, [data])

    return (
        <Box w='100%' p={4} color='black' display={'flex'} justifyContent={'space-around'} mt={10}>
            <Box textAlign={'start'} border={'1px solid'} p={10} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
                <label style={{ fontWeight: 'bold' }}>Loan Amount</label>
                <Input type='number' name='loan' onChange={handleChange} />
                <br />
                <label style={{ fontWeight: 'bold' }}>Annual Interest Rate (%)</label>
                <Input type='number' name='rate' onChange={handleChange} />
                <br />
                <label style={{ fontWeight: 'bold' }}>Tenure (in Months)</label>
                <Input type='number' name='tenure' onChange={handleChange} />
            </Box>


            <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>

                <Stack direction={['row', 'column']} spacing='24px' p={'1rem'} textAlign={'start'}>
                    <Box mt={5}>
                        <Stat>
                            <StatLabel>EMI</StatLabel>
                            <StatNumber>₹: {(res.emi).toFixed(2)}</StatNumber>
                        </Stat>
                    </Box>
                    <Box mt={5}>

                        <Stat>
                            <StatLabel>Intrest Paypal</StatLabel>
                            <StatNumber>₹: {(res.interest).toFixed(2)}</StatNumber>
                        </Stat>
                    </Box>
                    <Box mt={5}>
                        <Stat>
                            <StatLabel>Total Payment</StatLabel>
                            <StatNumber>₹: {(res.totalamount).toFixed(2)}</StatNumber>
                        </Stat>
                    </Box>

                </Stack>
                <Box>
                    <Image w={'100%'} h={'100%'} src="https://chartio.com/assets/3ad3d8/tutorials/charts/pie-charts/8f2915ab9024902155c5d27d430831be813de071853c69d778102722a4d0efbf/pie-chart-example-1.png" alt="chart"
                    />
                </Box>
            </SimpleGrid>
        </Box>


    )
}

export default Calculator