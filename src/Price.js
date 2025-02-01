import React, { useState, useEffect } from "react";
import axios from "axios";
import './Price.css';

const Price = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets", {
            params: {
                vs_currency: "usd",
                order: "market_cap_desc",
                per_page: 10,
                page: 1,
                sparkline: false,
            },
        })
        .then(response => setCryptoData(response.data))
        .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className={darkMode ? "container dark-mode py-5" : "container py-5"}>
            {/* Dark Mode Toggle Button positioned in the top-left corner */}
            <div className="position-fixed top-0 start-0 m-3">
                <button className="btn btn-outline-primary" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-display" viewBox="0 0 16 16">
                            <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-display-fill" viewBox="0 0 16 16">
                            <path d="M6 12q0 1-.25 1.5H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-.75Q10 13 10 12h4c2 0 2-2 2-2V4c0-2-2-2-2-2H2C0 2 0 4 0 4v6c0 2 2 2 2 2z"/>
                        </svg>
                    )}
                    Mode
                </button>
            </div>

            <h2 className="text-center mb-4"> Crypto Price Today</h2>
            
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Coin</th>
                            <th>Price (USD)</th>
                            <th>24h Change</th>
                            <th>Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cryptoData.map((coin, index) => (
                            <tr key={coin.id} className={darkMode ? "dark-row" : ""}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={coin.image} alt={coin.name} width="20" /> {coin.name} ({coin.symbol.toUpperCase()})
                                </td>
                                <td>${coin.current_price.toFixed(2)}</td>
                                <td style={{ color: coin.price_change_percentage_24h >= 0 ? "green" : "red" }}>
                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                </td>
                                <td>${coin.market_cap.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Price;
