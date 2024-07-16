import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  CategoryScale,
  LineElement,
  Tooltip,
} from "chart.js";
import { Box } from "@chakra-ui/react";
ChartJS.register(
  LinearScale,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip
);

const { Title } = Typography;

const CoinHistory = ({ coinHistory, currentPrice, coinName, coinColor }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  function timestampToDate(timestamp) {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      timestampToDate(coinHistory?.data?.history[i].timestamp)
    );
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: coinColor,
        borderColor: coinColor,
      },
    ],
  };
  console.log(coinTimestamp);
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    plugins: {
      tooltip: {
        enabled: true, // Ensure tooltips are enabled
      },
    },
    showTooltips: true,
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],
  };

  return (
    <Box p={"2rem"}>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </Box>
  );
};

export default CoinHistory;
