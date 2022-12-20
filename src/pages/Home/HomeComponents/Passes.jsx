import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function Passes() {
  const DATA = [
    {
      bgi: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png",
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png",
      details:
        "Unlimited access to group classes, all gyms and at-home workouts",
    },
    {
      bgi: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png",
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png",
      details: "Unlimited access to all PRO gyms and at-home workouts",
    },
    {
      bgi: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cl.png",
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_112,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-home-partial-1.svg",
      details: "Unlimited access to at-home workouts with calorie tracking",
    },
  ];

  return (
    <Container maxW={"6xl"}>
      <Flex
        flexWrap={"wrap"}
        gap="30px"
        align="center"
        justify="center"
        textAlign={"center"}
        p="20px"
      >
        {DATA.map((el) => (
          <Stack>
            <VStack
              key={el.image}
              w={"320px"}
              h="200px"
              p="20px"
              justify="space-around"
              bgImage={el.bgi}
              bgSize="cover"
              _hover={{ transform: "scale(1.05)" }}
              borderRadius="20px"
              color={"gray.200"}
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
            <HStack justify={"space-between"} p="10px">
              <Button
                bgColor={"gray.700"}
                color="white"
                _hover={{ color: "gray.700", bg: "white" }}
              >
                TRY FOR FREE
              </Button>
              <Button color={"red"}>LEARN MORE</Button>
            </HStack>
          </Stack>
        ))}
      </Flex>
    </Container>
  );
}
