import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const LINKS1 = [
    { title: "cult.fit for business", link: "/" },
    { title: "cult.fit franchise", link: "/" },
    { title: "corporate partnerships", link: "/" },
    { title: "cult pass network", link: "/" },
    { title: "t&c for business", link: "/" },
  ];

  const SOCIAL = [
    {
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/insta-page.svg",
    },
    {
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/twitter-page.svg",
    },
    {
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/fb-page.svg",
    },
    {
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/youtube.svg",
    },
  ];
  return (
    <Box bg="black" w="100%">
      <Grid
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(3,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(5,1fr)",
        }}
        color={"gray"}
        gap="25px"
        p="20px"
      >
        <GridItem colSpan={2}>
          <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_100,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png" />
          <Text>
            At cult.fit, we make group workouts fun, daily food healthy & tasty,
            mental fitness easy with yoga & meditation, and medical & lifestyle
            care hassle-free. #BeBetterEveryDay
          </Text>
        </GridItem>
        <VStack alignItems="left">
          {LINKS1.map((el) => (
            <NavLink to={el.link} key={el.title}>
              {el.title}
            </NavLink>
          ))}
        </VStack>
        <VStack alignItems="left">
          {LINKS1.map((el) => (
            <NavLink to={el.link+1} key={el.title}>
              {el.title}
            </NavLink>
          ))}
        </VStack>
        <VStack alignItems="left">
          <Image
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png"
            w="50%"
          />
          <Image
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png"
            w="50%"
          />
          <HStack>
            {SOCIAL.map((el) => (
              <Image key={el.img} src={el.img} w="15%" />
            ))}
          </HStack>
        </VStack>
      </Grid>
    </Box>
  );
}
