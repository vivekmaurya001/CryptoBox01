import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
  Textarea,
  Wrap,
  WrapItem,
  useMediaQuery,
} from "@chakra-ui/react";
import { Card } from "antd";
import React from "react";

const Pay = ({}) => {
  return (
    <Box w={"90%"} m={"12vh auto"}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        // flexDirection={isLargerThan600 ? "row" : "column"}
        gap={"1rem"}
      >
        <Heading as={"h1"} size="3xl" noOfLines={2} color={"white"}>
          Send Crypto to any address
        </Heading>
        <FormControl
          isRequired
          w="40%"
          gap={"1rem"}
          display={"flex"}
          flexDirection={"column"}
          color={"white"}
          bg={"#201e32"}
          p={"1rem"}
          borderRadius={"10px"}
        >
          <Input placeholder="Address 0x..." bg={"black"} border={"none"} />
          <NumberInput max={50} min={10} bg={"black"} borderRadius={"10px"}>
            <NumberInputField placeholder="Amount (ETH)" border={"none"} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Input placeholder="Title" bg={"black"} border={"none"} />
          <Textarea placeholder="Message" bg={"black"} border={"none"} />
          <Button>Send Now</Button>
        </FormControl>
      </Flex>
      <Box>
        <Heading color={"white"}>Your All Time Transactions</Heading>
        <Wrap spacing={2} align={"center"} p={"2rem"} w={"100%"}>
          <WrapItem>
            <Card
              style={{
                width: 250,
                backgroundColor: "#181818",
                color: "white",
                border: "none",
              }}
            >
              <Text>
                <b>From:</b> 0xsy...972
              </Text>
              <Text>
                {" "}
                <b>To:</b> 0xs...972
              </Text>
              <Text>
                {" "}
                <b>Amount:</b> 0.004ETH
              </Text>
              <Text>
                {" "}
                <b>Title:</b> Remaining Payment
              </Text>
              <Text>
                {" "}
                <b>Message:</b> From tim doe!!!
              </Text>
            </Card>
          </WrapItem>
        </Wrap>
      </Box>
    </Box>
  );
};

export default Pay;
