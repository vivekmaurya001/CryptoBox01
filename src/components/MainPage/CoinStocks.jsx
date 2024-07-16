import React from "react";
// import { Chart, CandlestickController, CategoryScale } from "chart.js";
// import { Candlestick } from "react-chartjs-2";

// // Register necessary elements
// Chart.register(CandlestickController, CategoryScale);

const CoinStocks = () => {
  const ohlcData = [
    {
      t: 1641427200, // Unix timestamp (startingAt)
      o: 43639.170052896734, // Open price
      h: 43830.15844443845, // High price
      l: 42679.105282492994, // Low price
      c: 43253.82606224523, // Close price
    },
    // Add more data points as needed
  ];

  const options = {
    scales: {
      x: {
        type: "category", // Use category scale for timestamps
        labels: ohlcData.map((dataPoint) =>
          new Date(dataPoint.t * 1000).toLocaleDateString()
        ),
      },
      y: {
        beginAtZero: false, // Adjust as needed
      },
    },
  };
  return (
    <div>
      {/* <Candlestick
        data={{ datasets: [{ data: ohlcData }] }}
        options={options}
      /> */}
    </div>
  );
};

export default CoinStocks;
