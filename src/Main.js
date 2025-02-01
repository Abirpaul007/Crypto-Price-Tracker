import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const images = [
  { src: '/images/bitcoin1.jpg', name: "BITCOIN(BTC)",  des: "Bitcoin is a decentralized digital currency that enables peer-to-peer transactions without a central authority, using blockchain technology for security." },
  { src: '/images/ethe.jpg', name: "ETHEREUM(ETH)",  des: "Ethereum is a decentralized blockchain platform that enables smart contracts and decentralized applications (dApps) using its native cryptocurrency, Ether (ETH)." },
  { src: '/images/xrp1.jpg', name: "XRP(XRP)",  des: "XRP is a fast, low-cost cryptocurrency designed for cross-border payments and remittances, powered by the XRP Ledger." },
  { src: '/images/usdt1.jpg', name: "TETHER(USDT)",  des: "Tether (USDT) is a stablecoin pegged to the US dollar, designed to maintain a 1:1 value ratio for stability in crypto transactions." },
  { src: '/images/8350968.jpg', name: "SOLANA(SOL)",  des: "Solana is a high-performance blockchain platform designed for fast, low-cost, and scalable decentralized applications (dApps) and cryptocurrencies." },
  { src: '/images/crypto-binance-coin-bnb.jpg', name: "BHB(BNB)",  des: "BNB (Binance Coin) is the native cryptocurrency of Binance, used for trading fee discounts, payments, and DeFi applications." },
  { src: '/images/usdc1.jpg', name: "USDC(USDC)",  des: "USD Coin (USDC) is a regulated, fiat-backed stablecoin pegged 1:1 to the US dollar, issued by Circle." },
  { src: '/images/image.png', name: "DOGECOIN(DOGE)",  des: "Dogecoin is a decentralized, peer-to-peer cryptocurrency featuring the Shiba Inu meme, known for its low fees and fast transactions." },
  { src: '/images/ada1.jpg', name: "CARDANO(ADA)", des: "Cardano is a decentralized blockchain platform using a proof-of-stake consensus mechanism for secure and scalable smart contracts." },
  { src: '/images/steth1.jpg', name: "LIDO STAKED ETHER(STETH)", des: "Lido is a decentralized staking platform that allows users to stake cryptocurrencies like Ethereum while maintaining liquidity through tokenized staking derivatives." }
];

const Main = () => {
  const [index, setIndex] = useState(0);
  const timeAutoNext = 7000;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, timeAutoNext);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div className="list">
        {images.map((img, i) => (
          <div
            key={i}
            className={`item ${i === index ? "active" : ""}`}
            style={{ 
              backgroundImage: `url(${img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            <div className="content">
              <div className="title">CRYPTO</div>
              <div className="name">{img.name}</div>
              <div className="des">{img.des}</div>
              {/* See More Button */}
               
            </div>
           
          </div>
        ))}
      </div>
      
      {/* Fixed button to navigate to a new page */}
      <div className="fixed-btn">
        <Link to="/new-page">
          <button>Check Price</button>
        </Link>
      </div>

      {/* Arrows for navigation */}
      <div className="arrows">
        <button className="prev" onClick={prevSlide}>&lt;</button>
        <button className="next" onClick={nextSlide}>&gt;</button>
      </div>

      {/* Time progress bar */}
      <div className="timeRunning"></div>
    </div>
  );
};

export default Main;
