import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import { Col, Image, Row, Statistic } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { useGetCryptoQuery } from "../../CryptoApi/Api";
import CryptoCurrencies from "./CryptoCurrencies";
import { Link } from "react-router-dom";
import millify from "millify";
import News from "./News";
import { RightCircleOutlined } from "@ant-design/icons";
import MarketUpdate from "./MarketUpdate";
import GlobalStats from "./GlobalStats";
import PlotlyChart from "./PlotlyChart";

const HomePage = ({ account }) => {
  const { data, error, isLoading } = useGetCryptoQuery();
  const globalStats = data?.data?.stats;
  if (!data) return "Loading....";
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  return (
    <Box w="100%" p={"1rem"} mt={"10vh"} color={"white"}>
      <Flex justifyContent={"space-around"} h={"90vh"}>
        <Stack justifyContent={"center"} spacing={3}>
          <Heading as={"h1"} size="3xl" noOfLines={2} className="text-gradient">
            Buy And Sell NFT's In CryptoBox
          </Heading>
          <Text fontSize={"1.5rem"}>
            Coin CryptoBox is the easiest and fastest way to buy and sell nft's
          </Text>
          {account ? (
            <Box
              bgGradient="linear(to-r, blue.500, green.500)"
              p={"0.6rem"}
              borderRadius={"1rem"}
              fontSize={"20px"}
              gap={"0.7rem"}
              w={"180px"}
            >
              {account.slice(0, 10) + "..." + account.slice(38, 42)}
            </Box>
          ) : (
            <Box
              // bg={"#53ae94"}
              bgGradient="linear(to-r, blue.500, green.500)"
              p={"0.6rem"}
              transitionDuration={"1s"}
              _hover={{ bg: "blue.500", cursor: "pointer" }}
              type="primary"
              borderRadius={"1rem"}
              fontSize={"20px"}
              gap={"0.7rem"}
              display={"flex"}
              alignItems={"center"}
              w="200px"
            >
              <RightCircleOutlined />
              Connect Wallet
            </Box>
          )}
        </Stack>
        <Flex h={"100%"} display={isLargerThan600 ? "flex" : "none"}>
          <Image
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src="images/Hero.png"
          />
        </Flex>
      </Flex>
      <Heading color="white">Global Crypto Stats </Heading>
      <Flex
        mt={"2rem"}
        justifyContent={"space-around"}
        flexDirection={isLargerThan600 ? "row" : "column"}
        w={"100%"}
      >
        <Stack>
          <GlobalStats string={"marketCap"} />
          <Text fontSize={"20px"} color={"#02ad77"}>
            Global MarketCap contribution
          </Text>
        </Stack>
        <Stack>
          {/* <PlotlyChart /> */}
          <GlobalStats string={"24hVolume"} />
          <Text fontSize={"20px"} color={"#02ad77"}>
            24hr Volume Distribution
          </Text>
        </Stack>
      </Flex>

      <Flex
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <Heading>Top CryptoCurrencies in The World</Heading>
        <p style={{ fontSize: "1.5rem", color: "teal" }}>
          <Link to="/CryptoCurrencies">Show More</Link>
        </p>
      </Flex>
      <CryptoCurrencies simplified />
      <Flex
        w={"100%"}
        flexDirection={"column"}
        p={"1rem"}
        overflow={"auto"}
        overflowY="auto"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For Internet Explorer and Edge
        }}
      >
        <Heading>Real Time Market Update</Heading>
        <MarketUpdate simplified />
      </Flex>
      <Flex
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <Heading>Top Crypto News</Heading>
        <p style={{ fontSize: "1.5rem", color: "blue" }}>
          <Link to="/CryptoCurrencies">Show More</Link>
        </p>
      </Flex>
      <News simplified />
    </Box>
  );
};

export default HomePage;
