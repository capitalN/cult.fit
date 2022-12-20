import { Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function Cultpass() {
  const DATA = [
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png",
      details:
        "Unlimited access to group classes, all gyms and at-home workouts",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png",
      details: "Unlimited access to all PRO gyms and at-home workouts",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_112,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-home-partial-1.svg",
      details: "Unlimited access to at-home workouts with calorie tracking",
    },
  ];

  return (
    <Container maxW={"6xl"} border="1px solid">
      <Flex
        flexWrap={"wrap"}
        gap="20px"
        align={"center"}
        justify="center"
        textAlign={"center"}
        p="10px"
      >
        {DATA.map((el) => (
          <VStack
            key={el.image}
            bg="gray.800"
            color={"gray.300"}
            w={"320px"}
            p="20px"
            borderRadius={"20px"}
            border="1px solid gray"
          >
            <Image
              w={"83px"}
              src={
                "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
              }
            />
            <Image src={el.image} w="86px" />
            <Text>{el.details}</Text>
          </VStack>
        ))}
      </Flex>
    </Container>
  );
}
