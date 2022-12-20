import { Box, Button, Heading, Image, Stack, VStack } from "@chakra-ui/react";
import React from "react";

export default function LandingVideo() {
  const SIZE = { base: "xs", sm: "sm", md: "md", lg: "lg" };
  return (
    <Box>
      <VStack position={"relative"} justify={"center"}>
        <video
          src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1278,ar_1.77,q_auto:eco,dpr_1.0700000524520874,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
          autoPlay
          loop
          muted
          style={{ objectFit: "cover" }}
          width="100%"
        />
        <Stack
          position={"absolute"}
          gap="10px"
          textAlign={"center"}
          justify="center"
          w="100%"
          h="100%"
          bgImage={"gradiant.png"}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Stack gap="10px" align={"center"}>
            <Image
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png"
              w={"30%"}
            />
            <Heading size={SIZE} color={"white"} w={"45%"}>
              A fitness movement that is worth reaking a sweat for
            </Heading>
            <Button size={SIZE} color={"red"} _hover={{ color: "black" }}>
              EXPLORE CULTPASS
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Box>
  );
}
