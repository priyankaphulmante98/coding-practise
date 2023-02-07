import { Checkbox, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./card.css";

function Card() {
  const [data, setData] = useState([]);
  async function getData() {
    let res = await fetch(`https://fakestoreapi.com/products`);
    let data = await res.json();
    // console.log(data)
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <SimpleGrid
      columns={{ lg: 4, md: 3, sm: 2, base: 1 }}
      gap="1rem"
      width="80%"
      m="auto"
      mt={"2rem"}
    >
      {data.map((e) => {
        return (
          <VStack
            pos="relative"
            className="card"
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            alignItems="center"
            justifyItems={"center"}
            p="1rem"
            color="black"
          >
            <Checkbox
              pos="absolute"
              top="5%"
              left="5%"
              defaultChecked
              size="lg"
              colorScheme="red"
            ></Checkbox>
            <Image src={e.image} alt="df" w="120px" h="150px" m="auto" />

            <Text color="black">{e.title.slice(0, 5)}</Text>
            <Text>{e.price}</Text>
          </VStack>
        );
      })}
    </SimpleGrid>
  );
}

export default Card;
