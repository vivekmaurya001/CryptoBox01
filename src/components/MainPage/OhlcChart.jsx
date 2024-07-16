import React from "react";
import Plot from "react-plotly.js";
import { useGetCryptoOhlcDataQuery } from "../../CryptoApi/Api";
import { Box, useMediaQuery } from "@chakra-ui/react";

const OHLCChart = ({ coinId }) => {
  // Sample data (replace with your actual data)
  const interval = "month";
  const { data: myOHLCData } = useGetCryptoOhlcDataQuery({
    coinId,
    interval,
  });

  //   console.log(myOHLCData);

  function timestampToDate(timestamp) {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  //   const myOHLCData = [
  //     {
  //       x: "2024-04-01",
  //       open: 60730.03577993918,
  //       high: 71820.17876543279,
  //       low: 56804.35677424948,
  //       close: 67553.07849441652,
  //     },
  //     {
  //       x: "2024-04-02",
  //       open: 67553.07849441652,
  //       high: 70234.56789012345,
  //       low: 62000.12345678901,
  //       close: 69000.987654321,
  //     },
  //     // Add more data points for other dates...
  //     {
  //       x: "2024-04-10",
  //       open: 69000.987654321,
  //       high: 71000.123456789,
  //       low: 66000.23456789012,
  //       close: 70000.345678901,
  //     },
  //     {
  //       x: "2024-04-01",
  //       open: 60730.03577993918,
  //       high: 71820.17876543279,
  //       low: 56804.35677424948,
  //       close: 67553.07849441652,
  //     },
  //     {
  //       x: "2024-04-02",
  //       open: 67553.07849441652,
  //       high: 70234.56789012345,
  //       low: 62000.12345678901,
  //       close: 69000.987654321,
  //     },
  //     // Add more data points for other dates...
  //     {
  //       x: "2024-04-10",
  //       open: 69000.987654321,
  //       high: 71000.123456789,
  //       low: 66000.23456789012,
  //       close: 70000.345678901,
  //     },
  //     // Add more OHLC data points as needed
  //   ];

  const xValues = myOHLCData?.data?.ohlc.map((dataPoint) =>
    timestampToDate(dataPoint.startingAt)
  );
  const openValues = myOHLCData?.data?.ohlc.map((dataPoint) => dataPoint.open);
  const highValues = myOHLCData?.data?.ohlc.map((dataPoint) => dataPoint.high);
  const lowValues = myOHLCData?.data?.ohlc.map((dataPoint) => dataPoint.low);
  const closeValues = myOHLCData?.data?.ohlc.map(
    (dataPoint) => dataPoint.close
  );

  const data = [
    {
      x: xValues,
      open: openValues,
      high: highValues,
      low: lowValues,
      close: closeValues,
      type: "candlestick",
      increasing: { line: { color: "green" } },
      decreasing: { line: { color: "red" } },
    },
  ];

  const layout = {
    title: "OHLC Chart",
    xaxis: {
      type: "category",
      title: "Date",
    },
    yaxis: {
      title: "Price",
    },
    width: 1000, // Set the desired width (in pixels)
    height: 420, //
  };

  return (
    <Box w={"100%"}>
      <Plot data={data} layout={layout} />
    </Box>
  );
};

export default OHLCChart;
