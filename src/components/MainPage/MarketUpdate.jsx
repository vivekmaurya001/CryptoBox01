import { Box, Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import { useGetCryptoQuery } from "../../CryptoApi/Api";
import { Avatar, Pagination } from "antd";
import millify from "millify";
import { Sparklines, SparklinesLine } from "react-sparklines";

const MarketUpdate = ({ simplified }) => {
  // let count = simplified ? 10 : 100;
  const [count, setcount] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);

  const { data, isLoading } = useGetCryptoQuery();
  const [coinList, setCoinlist] = useState(data?.data?.coins);
  const [isLargerThan930] = useMediaQuery("(min-width: 930px)");

  const handlePageChange = (page, pageSize) => {
    if (page > currentPage) {
      setcount(count + 10);
    } else {
      setcount(count - 10);
    }
    setcurrentPage(page);
  };
  return (
    <Stack
      mt={simplified ? "1rem" : "10vh"}
      p={"2rem"}
      color={"white"}
      w={isLargerThan930 ? "100%" : "930px"}
      bgColor={"#1c1c1c"}
      borderRadius={"1rem"}
    >
      <Flex
        justifyContent={"space-between"}
        w="100%"
        h={"60px"}
        fontSize={"25px"}
        borderBottom={"3px solid grey"}
      >
        <Box w={"25%"}># Name</Box>
        <Box w={"15%"}>Last Price</Box>
        <Box w={"10%"}>Change</Box>
        <Box w={"20%"}>Market Cap</Box>
        <Box>Last 20 Days</Box>
      </Flex>
      {coinList?.slice(count - 10, count).map((coin, i) => (
        <Flex
          justifyContent={"space-between"}
          w="100%"
          fontSize={"20px"}
          borderBottom={"1px solid grey"}
          key={i}
          _hover={{ cursor: "pointer", bg: "#1f2129" }}
        >
          <Flex gap={"10px"} fontWeight={600} w={"30%"}>
            {coin.rank}
            <Avatar size={40} src={coin.iconUrl} />
            {coin.name}
            <Text color={"grey"}>{coin.symbol}</Text>
          </Flex>
          <Box w={"15%"} fontWeight={700}>
            ${Math.round(coin.price * 100) / 100}
          </Box>
          <Box w={"10%"} color={coin.change.charAt(0) === "-" ? "red" : "blue"}>
            {coin.change}
          </Box>
          <Box w={"10%"} fontWeight={700}>
            ${millify(coin.marketCap)}
          </Box>
          <Box w={"15%"} h={"100%"}>
            <Sparklines
              data={coin.sparkline.slice(0, 20)}
              svgWidth={150}
              limit={20}
              svgHeight={50}
            >
              <SparklinesLine
                color={coin.change.charAt(0) === "-" ? "red" : "blue"}
              />
            </Sparklines>
          </Box>
        </Flex>
      ))}
      <Flex
        justifyContent={"center"}
        // bg={"#74b885"}
        bgGradient="linear(to-r, #8456af, #37cdbb)"
        p={"10px"}
        borderRadius={"9px"}
        minW={"24%"}
        alignSelf={"center"}
      >
        <Pagination
          style={{
            fontSize: "23px",
            fontWeight: "600",
          }}
          defaultCurrent={1} // Initial page number
          total={50} // Total number of items
          onChange={handlePageChange} // Callback when page changes
        />
      </Flex>
    </Stack>
  );
};

export default MarketUpdate;
