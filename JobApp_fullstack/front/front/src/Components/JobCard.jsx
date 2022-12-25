import { Box, Flex, Image, VStack, Heading, Text, Button } from '@chakra-ui/react'
import React from 'react'

const JobCard = ({company,position,contract}) => {
	return (
		<Flex justifyContent="space-evenly" alignItems="center" border="1px green solid">
			<Image
				borderRadius='full'
				boxSize='150px'
				src='https://bit.ly/dan-abramov'
				alt='Dan Abramov'
			/>
			<VStack>
				<Heading as='h6' size='xs'>
					{company}
				</Heading>
				<Heading as='h4' size='md'>
					{position}
				</Heading>
				<Text >{contract}</Text>

			</VStack>
			<Flex>
				<Button colorScheme='teal' variant='solid'>
					Button
				</Button>
			</Flex>

		</Flex>
	)
}

export default JobCard