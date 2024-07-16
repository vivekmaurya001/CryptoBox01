import {
  Flex,
  Spinner,
  Stack,
  Text,
  Button,
  Wrap,
  WrapItem,
  useMediaQuery,
} from "@chakra-ui/react";
import { useGetCryptoQuery } from "../../CryptoApi/Api";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { Avatar, Card, FloatButton, Input, Tag, Tooltip } from "antd";
const { Search } = Input;
import { Link } from "react-router-dom";
import { AudioOutlined } from "@ant-design/icons";
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isLoading } = useGetCryptoQuery();
  const [coinList, setCoinlist] = useState(data?.data?.coins);
  const onSearch = (value, _e, info) => {
    const filteredData = data?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setCoinlist(filteredData);
  };
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  return (
    <Stack w={"100%"}>
      {!simplified && (
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          style={{ width: "350px", alignSelf: "center", marginTop: "12vh" }}
          suffix={suffix}
          onSearch={onSearch}
        />
      )}
      <Wrap
        spacing={2}
        align={"center"}
        overflow={simplified ? "none" : "scroll"}
        p={"2rem"}
        w={"100%"}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          coinList?.slice(0, count).map((coin, i) => (
            <Link to={`/crypto/${coin.uuid}`}>
              <WrapItem key={i}>
                <Card
                  style={{
                    width: isLargerThan600 ? 250 : 330,
                  }}
                  hoverable
                >
                  <Flex gap={"1rem"} alignItems={"center"}>
                    <Avatar src={coin.iconUrl} />
                    <Text fontWeight={700}>
                      {coin.name}{" "}
                      <span style={{ color: "grey", fontWeight: "500" }}>
                        {coin.symbol}/USD
                      </span>
                    </Text>
                  </Flex>
                  <Text fontSize={"20px"} fontWeight={500}>
                    <p>{millify(coin.price)} USD</p>
                  </Text>
                  <Flex justifyContent={"space-between"} fontSize={"16px"}>
                    <p>Market Cap: ${millify(coin.marketCap)}</p>
                    <Tooltip
                      title={coin.change.charAt(0) === "-" ? "loss" : "profit"}
                      color={
                        coin.change.charAt(0) === "-" ? "#f33b1a" : "#2dcb74"
                      }
                    >
                      <Button
                        bgColor={
                          coin.change.charAt(0) === "-" ? "#f33b1a" : "#2dcb74"
                        }
                        color={"white"}
                      >
                        {millify(coin.change)}%
                      </Button>
                    </Tooltip>
                  </Flex>
                </Card>
              </WrapItem>
            </Link>
          ))
        )}
      </Wrap>
    </Stack>
  );
};

export default CryptoCurrencies;
