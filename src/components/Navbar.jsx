import {
  Box,
  Button,
  HStack,
  Image,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import CartDrower from "../pages/shop/CartDrower";

export default function Navbar({
  bgc = "linear-gradient(0deg, rgba(23,25,35,0) 1%, rgba(0,0,0,0.8) 100%)",
  position = "fixed",
}) {
  return (
    <HStack
      position={position}
      top="0"
      w="100%"
      color={"white"}
      gap={"50px"}
      background={bgc}
      justify="space-between"
      zIndex={"1001"}
      fontWeight="bold"
      h="16"
      padding={"20px"}
    >
      <NavLink to={"/"}>
        <Image
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_100,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
          alt="LOGO"
          w="120px"
        />
      </NavLink>
      <Popover trigger="hover">
        <PopoverTrigger>
          <NavLink to={"/store"}>STORE</NavLink>
        </PopoverTrigger>
        <PopoverContent color="black" w={"120px"}>
          <PopoverArrow />
          <PopoverBody>
            <NavLink to={"/store/products/Tshirts"}>T-SHIRTS</NavLink>
            <br />
            <NavLink to={"/store/products/Cycles"}>CYCLES</NavLink>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Link w={"120px"} textAlign="right">
        <CartDrower title="CART" />
      </Link>
    </HStack>
  );
}
