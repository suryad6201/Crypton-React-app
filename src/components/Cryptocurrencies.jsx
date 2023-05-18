import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Typography } from "antd";
import Loader from "./Loader";

//Redux query hook
import { useGetCryptosQuery } from "../services/cryptoAPI";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, search]);

  if (isFetching) return <Loader />;

  return (
    <>
      <div className="cryptocurrencies-title">
        <Typography.Title className="crypto-title" level={3}>
          Cryptocurrencies
        </Typography.Title>
        {!simplified && (
          <div className="search-crypto">
            <Input
              placeholder="Search Crypto currency"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        )}
      </div>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            key={currency.uuid}
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                className="cards"
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    className="crypto-image"
                    alt="Crypto icon"
                    src={currency.iconUrl}
                  />
                }
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.price)}</p>
                <p>Price Change: {millify(currency.price)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
