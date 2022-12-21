import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

export default function Loading() {
  return (
    <Flex justify="center" align="center" h="100vh">
      <Box
        w="100px"
        h="100px"
        bgImage="loading.gif"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        Loading...
      </Box>
    </Flex>
  );
}
