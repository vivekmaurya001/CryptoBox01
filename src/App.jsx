import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import "./App.css";
import { ethers } from "ethers";

import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/MainPage/HomePage";
import CryptoCurrencies from "./components/MainPage/CryptoCurrencies";
import Exchanges from "./components/MainPage/Exchanges";
import News from "./components/MainPage/News";
import CoinDetails from "./components/MainPage/CoinDetails";
import SellNft from "./components/BuySellNft/SellNft";
import { useEffect, useState } from "react";
import Pay from "./components/PayEther/Pay";

function App() {
  const [account, setAccount] = useState("");

  const loadBlockchainData = async () => {
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    //  const contractABI = abi.abi;
    try {
      const { ethereum } = window;

      if (window.ethereum !== "undefined") {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        const provider1 = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider1.getSigner();
      } else {
        alert("Please install metamask");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadBlockchainData();
  }, []);
  return (
    <Flex
      overflowY={"scroll"}
      overflowX={"hidden"}
      h={"100vh"}
      w="100vw"
      position={"relative"}
      className="Mainbox"
    >
      <Sidebar account={account} setAccount={setAccount} />
      <Routes>
        <Route exact path="/" element={<HomePage account={account} />} />
        {/* <Route exact path="/Sell" element={<SellNft />} /> */}
        {/* <Route exact path="/pay" element={<Pay />} /> */}
        {/* <Route exact path="/CryptoCurrencies" element={<CryptoCurrencies />} /> */}
        {/* <Route exact path="/Exchanges" element={<Exchanges />} /> */}
        {/* <Route exact path="/News" element={<News />} /> */}
        {/* <Route exact path="/crypto/:coinId" element={<CoinDetails />} /> */}
      </Routes>
    </Flex>
  );
}

export default App;
