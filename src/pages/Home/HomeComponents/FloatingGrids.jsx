import React from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";

export default function FloatingGrids() {
  const SIZE = { base: "lg", sm: "xl", md: "2xl", lg: "4xl" };

  const SET1 = [
    {
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-1.png",
    },
    {
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-2.png",
    },
    {
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-3.png",
    },
    {
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-4.png",
    },
  ];

  const SET2 = [
    {
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-5.png",
    },
    {
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-6.png",
    },
    {
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-7.png",
    },
    {
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_0.79,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-8.png",
    },
  ];

  console.log(SET1[0].img);
  return (
    <VStack
      align={"center"}
      textAlign={"center"}
      position={"relative"}
      justify="center"
    >
      <Grid
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
        justifyItems="center"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        {SET1.map((el) => (
          <Image
            key={el.img}
            src={el.img}
            alt="image"
            p={{ base: "5px", sm: "10px" }}
            data-aos="zoom-out-up"
          />
        ))}
        {SET2.map((el) => (
          <Image
            key={el.img}
            src={el.img}
            alt="image"
            p={{ base: "5px", sm: "10px" }}
            data-aos="zoom-out-up"
          />
        ))}
      </Grid>
      <Heading
        size={SIZE}
        color={"white"}
        w={"70%"}
        position="absolute"
        zIndex={"10"}
      >
        Fun, trainer led group classes
      </Heading>
    </VStack>
  );
}
