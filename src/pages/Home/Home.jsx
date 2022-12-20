import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  LinkOverlay,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import CultFamily from "./HomeComponents/CultFamily";
import Cultpass from "./HomeComponents/Cultpass";
import FitnessDivs from "./HomeComponents/FitnessDivs";
import FloatingDivs from "./HomeComponents/FloatingDivs";
import FloatingGrids from "./HomeComponents/FloatingGrids";
import LandingVideo from "./HomeComponents/LandingVideo";
import Passes from "./HomeComponents/Passes";
import WellnessHub from "./HomeComponents/WellnessHub";

export default function Home() {
  return (
    <Box bg={"gray.900"} overflowX="hidden">
      <LandingVideo />
      <VStack gap={"100px"}>
        <Cultpass />
        <FloatingDivs />
        <FloatingGrids />
        <Passes />
        <FitnessDivs />
        <CultFamily />
      </VStack>
    </Box>
  );
}
