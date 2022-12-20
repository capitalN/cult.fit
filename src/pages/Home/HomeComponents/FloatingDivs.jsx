import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function FloatingDivs() {
  const SIZE = { base: "lg", sm: "xl", md: "2xl", lg: "4xl" };

  return (
    <VStack
      textAlign={"center"}
      position={"relative"}
      justify="center"
      gap="20px"
    >
      <Flex justify={"center"} gap={"40px"} flexWrap={"wrap"} p="30px">
        <Image
          data-aos="fade-up"
          data-aos-delay="300"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_1.png"
          width={"400px"}
        />
        <Image
          data-aos="fade-up"
          data-aos-delay="500"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_2.png"
          width={"400px"}
        />
      </Flex>
      <Heading
        size={SIZE}
        color={"white"}
        w={"70%"}
        position="absolute"
        zIndex={"10"}
      >
        One membership for all your fitness needs
      </Heading>
      <Flex justify={"center"} gap={"40px"} flexWrap={"wrap"} p="30px">
        <Image
          data-aos="fade-up"
          data-aos-delay="300"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_3.png"
          width={"300px"}
        />
        <Image
          data-aos="fade-up"
          data-aos-delay="600"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_4.png"
          width={"350px"}
        />
        <Image
          data-aos="fade-up"
          data-aos-delay="400"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_5.png"
          width={"300px"}
        />
      </Flex>
    </VStack>
  );
}
