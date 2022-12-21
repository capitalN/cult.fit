import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import CartDrower from "../pages/shop/CartDrower";

export default function Navbar({
  bgc = "linear-gradient(0deg, rgba(23,25,35,0) 5%, rgba(0,0,0,0.8) 100%)",
  position = "fixed",
}) {
  const params = useParams();
  console.log(params);

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
    >
      <NavLink to={"/"}>
        <Image
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_100,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
          alt="LOGO"
        />
      </NavLink>
      <HStack>
        <NavLink to={"/store/products/Tshirts"}>T-SHIRTS</NavLink>
        <NavLink to={"/store/products/Cycles"}>CYCLES</NavLink>
      </HStack>
      <Link>
        <CartDrower title="CART" />
      </Link>
    </HStack>
  );
}
