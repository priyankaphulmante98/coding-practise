import { Box, Hide, HStack, Show, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoFilterSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

function EPage() {
  return (
    <>
      <HStack
        justifyContent={"space-between"}
        bg="white"
        color="grey"
        p="1rem"
        w={"100%"}
      >
        <HStack gap={"0.3rem"}>
          <BsFillCheckCircleFill as="span" />

          <Hide below="sm">Select</Hide>
        </HStack>
        {/* filter and sorting */}
        <HStack gap='-1'>
          <HStack
            gap={"0.3rem"}
            border="1px solid lightgrey"
            p="0.2rem 0.7rem"
            borderRadius="5px"
          >
         
              <IoFilterSharp />
           
            <Show above="sm">Filter</Show>
          </HStack>
          {/* search */}
          <HStack
            gap={"0.3rem"}
            border="1px solid lightgrey"
            p="0.2rem 0.7rem"
            borderRadius="5px"
          >
            <FaSearch />
            <Show above="sm">Search</Show>
          </HStack>
          {/* edit */}
          <HStack
            gap={"0.3rem"}
            border="1px solid lightgrey"
            p="0.2rem 0.7rem"
            borderRadius="5px"
          >
      
              <MdEdit />
       
            <Show above="sm">Edit</Show>
          </HStack>
          {/* delete */}
          <HStack
            gap={"0.3rem"}
            border="1px solid lightgrey"
            p="0.2rem 0.7rem"
            borderRadius="5px"
          >
          
              <RiDeleteBin6Line />
     
            <Show above="sm">Delete</Show>
          </HStack>
        </HStack>
        {/* menubars */}
        <HStack>
          <Text border="1px solid lightgrey" p="0.2rem" borderRadius="5px">
            <IoMdMenu fontSize="1.2rem" />
          </Text>
          <Text border="1px solid lightgrey" p="0.2rem" borderRadius="5px">
            <CgMenuGridR  fontSize="1.2rem" />
          </Text>
        </HStack>
      </HStack>
    </>
  );
}

export default EPage;
