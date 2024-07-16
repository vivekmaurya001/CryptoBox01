import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
} from "@chakra-ui/react";
import { Form, Input, InputNumber, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import AllNfts from "./AllNfts";
import CreatedNft from "./CreatedNft";
import BoughtNft from "./BoughtNft";

const SellNft = () => {
  const [value, setValue] = useState("");
  const onChange = (value) => {
    console.log("changed", value);
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <Box mt={"12vh"} w={"100%"} p={"2rem"} color={"white"}>
      <Heading>Create NFT</Heading>
      <Stack w={"60%"} m={"1rem auto"}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Name" height={"120px"} />
          <FormLabel>Description</FormLabel>
          <TextArea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Controlled autosize"
            style={{ height: "100px" }}
            autoSize={{
              minRows: 3,
              maxRows: 5,
            }}
          />
          <FormLabel>Amount</FormLabel>
          <NumberInput max={50} min={10} bg="white">
            <NumberInputField placeholder="Enter a number" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Form style={{ width: "20%", color: "white" }}>
          <FormLabel>Upload Nft</FormLabel>
          <Form.Item
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action="/upload.do" listType="picture-card">
              <button
                style={{
                  border: 0,
                  height: "100%",
                  width: "100%",
                  color: "white",
                }}
                type="button"
              >
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </button>
            </Upload>
          </Form.Item>
        </Form>
        <Button bgColor={"#3f37c9"} color={"white"}>
          SUBMIT
        </Button>
      </Stack>
      <AllNfts />
      <CreatedNft />
      <BoughtNft />
    </Box>
  );
};

export default SellNft;
