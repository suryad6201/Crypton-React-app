import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Typography, Layout, Space, ConfigProvider } from "antd";

import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components/modules";

import "./App.css";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Poppins, sans-serif",
        },
      }}
    >
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route
                  exacts
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route
                  exact
                  path="/crypto/:coinId"
                  element={<CryptoDetails />}
                />
                <Route exact path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title
              level={4}
              style={{ color: "white", textAlign: "center" }}
            >
              Crypto
              <br />
              All Rights Reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/cryptocurrencies">Crypto Currency</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default App;
