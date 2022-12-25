import React from 'react'
import { Select, Input, Textarea, Stack } from '@chakra-ui/react'
function CreateTicket() {
  return (
    <>
      <Select placeholder='Select option'>
        <option value='option1'>Option 1</option>
      </Select>
      <Stack spacing={3}>
        <Input variant='filled' placeholder='Filled' />
      </Stack>
      <Textarea placeholder='Here is a sample placeholder' />
    </>
  )
}

export default CreateTicket
