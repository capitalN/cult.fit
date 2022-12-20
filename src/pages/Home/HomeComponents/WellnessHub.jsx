import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function WellnessHub() {
  return (
    <Container maxW={"5xl"}>
      <Flex
        flexDirection={{ base: "column", sm: "column", md: "row" }}
        gap="20px"
        p="40px"
        bg={"blue.100"}
      >
        <Stack w={{ base: "100%", sm: "100%", md: "30%" }}>
          <Stack>
            <Heading>Wellness Hub</Heading>
            <Text fontWeight={"bold"}>
              One place for all your well-being needs
            </Text>
          </Stack>
          <Flex
            flexDirection={{ base: "row", sm: "row", md: "column" }}
            border="1px solid red"
            textAlign={"left"}
          >
            <Button justifyContent="left">WORKOUT GEAR</Button>
            <Button justifyContent="left">LABS</Button>
            <Button justifyContent="left">THERAPY</Button>
          </Flex>
        </Stack>
        {/*https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy1.png*/}
        <Box w={{ base: "100%", sm: "100%", md: "70%" }} border="1px solid red">
          <Grid gridTemplateColumns={"repeat(2,1fr)"} gap="20px">
            <Image
              src={`https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy2.png`}
            />
          </Grid>
        </Box>
      </Flex>
    </Container>
  );
}

export function Grid1() {
  return <></>;
}
