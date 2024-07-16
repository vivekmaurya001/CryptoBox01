import React, { useState } from "react";
import { useGetNewsQuery } from "../../CryptoApi/NewsApi";
import { useGetCryptoQuery } from "../../CryptoApi/Api";
import moment from "moment/moment";
import { Avatar, Card } from "antd";
import { Spinner, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Select } from "antd";

const { Meta } = Card;

const News = ({ simplified }) => {
  const count = simplified ? 6 : 20;
  const isLoading = false;
  // const { data, isLoading } = useGetNewsQuery();
  // const { data: Cryptos } = useGetCryptoQuery();
  const [coinList, setCoinlist] = useState([]);

  const [newsList, setNewsList] = useState([]);

  const demoImage =
    "https://www.coindesk.com/resizer/imTy0PluHIRM3UJ_4VNz9l1LcBQ=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/UVYUDK327FAGPMDAHO6FQFZCUM.jpg";

  return (
    <Stack>
      {!simplified && (
        <Select
          showSearch
          style={{
            width: 400,
            height: 150,
            alignSelf: "center",
            marginTop: "1rem",
          }}
          placeholder="Search to Coin"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={coinList?.map((coin, i) => ({
            value: `${i}`,
            label: coin.name,
          }))}
        />
      )}
      <Wrap
        spacing={4}
        align={"center"}
        overflow={simplified ? "none" : "scroll"}
        p={"2rem"}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          newsList?.slice(0, count).map((news, i) => (
            <Link to="/News">
              <WrapItem key={i}>
                <Card
                  style={{ width: 250 }}
                  cover={
                    <img alt="example" src={news?.thumbnail || demoImage} />
                  }
                >
                  <Meta
                    title={news.title}
                    description={`${news.description.substring(0, 50)} .....`}
                  />
                  <Text mt="7px">
                    {moment(news.createdAt).startOf("ss").fromNow()}
                  </Text>
                </Card>
              </WrapItem>
            </Link>
          ))
        )}
      </Wrap>
    </Stack>
  );
};

export default News;
