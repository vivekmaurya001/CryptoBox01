import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Plot from "react-plotly.js";
import { useGetCryptoQuery } from "../../CryptoApi/Api";

const PlotlyChart = () => {
  const { data: List, isLoading } = useGetCryptoQuery();
  const [coinList, setCoinlist] = useState(List?.data?.coins);
  const labels = coinList.slice(0, 10).map((coin) => coin.name);
  const marketCaps = coinList
    .slice(0, 10)
    .map((coin) => parseFloat(coin.marketCap));

  const data = [
    {
      type: "pie",
      labels,
      values: marketCaps,
      marker: {
        colors: coinList.slice(0, 10).map((coin) => coin.color),
      },
      hoverinfo: "label+percent",
    },
  ];

  const layout = {
    title: "Market Cap Distribution",
    showlegend: true,
    legend: {
      x: 0,
      y: -0.5,
      orientation: "h",
    },
    paper_bgcolor: "rgba(0, 0, 0, 0)", // Set the background color to transparent
    plot_bgcolor: "rgba(0, 0, 0, 0)", // Set the plot area background color to transparent
    font: {
      family: "Arial, sans-serif",
      size: 14,
      color: "#333", // Customize font color
    },
  };

  return (
    <Box>
      <h2>Market Cap Distribution</h2>
      <Plot data={[data]} layout={layout} />
    </Box>
  );
};

export default PlotlyChart;
