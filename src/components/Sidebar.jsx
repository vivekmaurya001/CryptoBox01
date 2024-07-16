import {
  Avatar,
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useDisclosure,
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ethers } from "ethers";
import { HamburgerIcon } from "@chakra-ui/icons";

const Sidebar = ({ account, setAccount }) => {
  const [actAddress, setactAddress] = useState(0);
  const connectHandler = async () => {
    if (window.ethereum !== "undefined") {
      const account1 = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });

      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
      setactAddress(ethers.getAddress(account1[0]));
      setAccount(account1[0]);
    } else {
      alert("Please install metamask");
    }
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // const [isLargerThan976] = useMediaQuery("(min-width: 976px)");
  const isLargerThan976 = true;

  return (
    <Flex
      w="100vw"
      h={isLargerThan976 ? "10vh" : "7vh"}
      bg={"#131215"}
      color={"white"}
      position={"absolute"}
      zIndex={100}
      p={"1rem"}
      gap={"1rem"}
      justifyContent={"space-between"}
    >
      <Link to="/">
        <Flex gap={"1rem"} alignItems={"center"}>
          <Avatar size={"md"} src={"images/cryptocurrency.png"} />
          <Text
            fontWeight={"bold"}
            display={"flex"}
            fontSize={"30px"}
            color={"white"}
          >
            Crypto <Text color={"#53ae94"}>Box</Text>
          </Text>
        </Flex>
      </Link>
      {isLargerThan976 ? (
        <Flex gap={"10px"}>
          <Link to="/">
            <Box
              bg={"transparent"}
              p={"0.6rem"}
              _hover={{ bg: "#53ae94" }}
              type="primary"
              borderRadius={"5px"}
              fontSize={"20px"}
            >
              Home
            </Box>
          </Link>
          <Link to="/CryptoCurrencies">
            <Box
              bg={"transparent"}
              p={"0.6rem"}
              _hover={{ bg: "#53ae94" }}
              type="primary"
              borderRadius={"5px"}
              fontSize={"20px"}
            >
              CryptoCurrencies
            </Box>
          </Link>
          <Link to="/Exchanges">
            <Box
              bg={"transparent"}
              p={"0.6rem"}
              _hover={{ bg: "#53ae94" }}
              type="primary"
              borderRadius={"5px"}
              fontSize={"20px"}
            >
              Exchanges
            </Box>
          </Link>
          <Link to="/News">
            <Box
              bg={"transparent"}
              p={"0.6rem"}
              _hover={{ bg: "#53ae94" }}
              type="primary"
              borderRadius={"5px"}
              fontSize={"20px"}
            >
              News
            </Box>
          </Link>
          <Link to="/Sell">
            <Box
              bg={"transparent"}
              p={"0.6rem"}
              _hover={{ bg: "#53ae94" }}
              type="primary"
              borderRadius={"5px"}
              fontSize={"20px"}
            >
              Trade
            </Box>
          </Link>
          <Link to="/pay">
            <Box
              bg={"transparent"}
              p={"0.6rem"}
              _hover={{ bg: "#53ae94" }}
              type="primary"
              borderRadius={"5px"}
              fontSize={"20px"}
            >
              Pay
            </Box>
          </Link>
          {actAddress ? (
            <Button bgGradient="linear(to-r, #8456af, #37cdbb)">
              {actAddress.slice(0, 6) + "..." + actAddress.slice(38, 42)}
            </Button>
          ) : (
            <Box
              bg={"grey"}
              p={"0.6rem"}
              _hover={{ bg: "#53ae94" }}
              type="primary"
              borderRadius={"5px"}
              onClick={connectHandler}
              cursor={"pointer"}
            >
              Connect
            </Box>
          )}
        </Flex>
      ) : (
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          <HamburgerIcon />
        </Button>
      )}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Stack gap={"10px"}>
              <Link to="/">
                <Box
                  bg={"transparent"}
                  p={"0.6rem"}
                  _hover={{ bg: "#53ae94" }}
                  type="primary"
                  borderRadius={"5px"}
                  fontSize={"20px"}
                >
                  Home
                </Box>
              </Link>
              <Link to="/CryptoCurrencies">
                <Box
                  bg={"transparent"}
                  p={"0.6rem"}
                  _hover={{ bg: "#53ae94" }}
                  type="primary"
                  borderRadius={"5px"}
                  fontSize={"20px"}
                >
                  CryptoCurrencies
                </Box>
              </Link>
              <Link to="/Exchanges">
                <Box
                  bg={"transparent"}
                  p={"0.6rem"}
                  _hover={{ bg: "#53ae94" }}
                  type="primary"
                  borderRadius={"5px"}
                  fontSize={"20px"}
                >
                  Exchanges
                </Box>
              </Link>
              <Link to="/News">
                <Box
                  bg={"transparent"}
                  p={"0.6rem"}
                  _hover={{ bg: "#53ae94" }}
                  type="primary"
                  borderRadius={"5px"}
                  fontSize={"20px"}
                >
                  News
                </Box>
              </Link>
              <Link to="/Sell">
                <Box
                  bg={"transparent"}
                  p={"0.6rem"}
                  _hover={{ bg: "#53ae94" }}
                  type="primary"
                  borderRadius={"5px"}
                  fontSize={"20px"}
                >
                  Trade
                </Box>
              </Link>
              <Link to="/pay">
                <Box
                  bg={"transparent"}
                  p={"0.6rem"}
                  _hover={{ bg: "#53ae94" }}
                  type="primary"
                  borderRadius={"5px"}
                  fontSize={"20px"}
                >
                  Pay
                </Box>
              </Link>
              {actAddress ? (
                <Button bgGradient="linear(to-r, #8456af, #37cdbb)">
                  {actAddress.slice(0, 6) + "..." + actAddress.slice(38, 42)}
                </Button>
              ) : (
                <Box
                  bg={"grey"}
                  p={"0.6rem"}
                  _hover={{ bg: "#53ae94" }}
                  type="primary"
                  borderRadius={"5px"}
                  onClick={connectHandler}
                  cursor={"pointer"}
                >
                  Connect
                </Box>
              )}
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Sidebar;
