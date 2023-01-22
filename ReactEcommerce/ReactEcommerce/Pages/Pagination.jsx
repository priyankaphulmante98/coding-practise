import { Button } from '@chakra-ui/react'
import React from 'react'

function Pagination({totalpages, page, setPage}) {
 console.log(totalpages);
  const pages = Array(totalpages).fill(0).map((e, i ) => <Button  disabled={page==i+1} onClick={() =>  setPage(i+1)} key={i}>{i+1}</Button>)

  
  return pages

}


export default Pagination
