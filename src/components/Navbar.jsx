import { Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartDrower from "../pages/shop/CartDrower";

export default function Navbar() {
  return (
    <HStack
      position={"sticky"}
      top="0"
      bg={"white"}
      as={"navbar"}
      gap={"50px"}
      justify="center"
      zIndex={"1001"}
      fontWeight="bold"
      boxShadow={"lg"}
    >
      <NavLink to={"/"}>HOME</NavLink>
      <NavLink to={"/store/products/Tshirts"}>T-SHIRTS</NavLink>
      <NavLink to={"/store/products/Cycles"}>CYCLES</NavLink>
      <Link>
        <CartDrower title="CART" />
      </Link>
    </HStack>
  );
}
