import {
  Box,
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

export default function Home() {
  return (
    <Box bg={"gray.900"} overflowX="hidden" id="body">
      <LandingVideo />
      <VStack gap={"100px"} id="main1">
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
