import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  CategoryScale,
  LineElement,
  Tooltip,
  ArcElement,
} from "chart.js";
import { useGetCryptoQuery } from "../../CryptoApi/Api";
import { Flex, useMediaQuery } from "@chakra-ui/react";

ChartJS.register(
  LinearScale,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip
);

const GlobalStats = ({ string }) => {
  const { data: List, isLoading } = useGetCryptoQuery();
  const [coinList, setCoinlist] = useState(List?.data?.coins);
  const labels = coinList.slice(0, 30).map((coin) => coin.name);
  const [isLargerThan549] = useMediaQuery("(min-width: 549px)");

  const marketCaps = coinList
    .slice(0, 30)
    .map((coin) => parseFloat(coin[string]));

  const data = {
    labels,
    datasets: [
      {
        data: marketCaps,
        backgroundColor: coinList.slice(0, 30).map((coin) => coin.color),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "50%",
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      tooltips: {
        callbacks: {
          label: (tooltipItem, data) => {
            const dataset = data.datasets[tooltipItem.datasetIndex];
            const total = dataset.data.reduce((acc, value) => acc + value, 0);
            const currentValue = dataset.data[tooltipItem.index];
            const percentage = ((currentValue / total) * 100).toFixed(2);
            return `${
              data.labels[tooltipItem.index]
            }: $${currentValue} (${percentage}%)`;
          },
        },
      },
    },
  };
  return (
    <Flex height={"40vh"} w={isLargerThan549 ? "50%" : "80%"} m={"0 auto"}>
      <Doughnut data={data} options={options} />
    </Flex>
  );
};

export default GlobalStats;
