import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function CultFamily() {
  return (
    <Flex
      direction={{ base: "column", sm: "column", md: "row" }}
      justify="space-around"
      p="20px"
      gap={"20px"}
    >
      <Image
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png"
        h="100%"
      />
      <Text
        fontSize={"22px"}
        color={"gray"}
        w={{ base: "80%", sm: "80%", md: "50%" }}
      >
        At cult.fit, we make group workouts fun, daily food healthy & tasty,
        mental fitness easy with yoga & meditation, and medical & lifestyle care
        hassle-free. #BeBetterEveryDay
      </Text>
    </Flex>
  );
}
