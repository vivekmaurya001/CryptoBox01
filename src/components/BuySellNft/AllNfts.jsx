import { SettingOutlined } from "@ant-design/icons";
import { Box, Button, Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

const AllNfts = () => {
  return (
    <Box mt={"2rem"} p={"2rem"}>
      <Heading>All NFT's</Heading>
      <Flex>
        <Card
          style={{
            width: 300,
            overflow: "hidden",
            cursor: "pointer",
          }}
          cover={
            <img
              style={{
                width: "100%",
                transition: "transform 0.3s",
                // Add a smooth transition effect
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.1)"; // Zoom out by 10% on hover
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)"; // Reset the scale on mouse out
              }}
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Meta title="Card title" description="This is the description" />
          <Button w={"100%"} mt={"1rem"}>
            Buy Now
          </Button>
        </Card>
      </Flex>
    </Box>
  );
};

export default AllNfts;
