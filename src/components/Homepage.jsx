import React from "react";
import { Link } from "react-router-dom";
//millify to shrink the larger number into letters
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import Loader from "./Loader";

//Redux query hook
import { useGetCryptosQuery } from "../services/cryptoAPI";

//Components
import { Cryptocurrencies, News } from "../components/modules";

const { Title } = Typography;

const Homepage = () => {
  //query hook automatically fetches data
  const { data, isFetching } = useGetCryptosQuery(10);
  if (isFetching) return <Loader />;

  //?. Optional chaining to make undefined instead of throwing error if no data available.
  const globalStats = data?.data?.stats;
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Crypto Currencies in the world.
        </Title>
        <Title level={5} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified={true} />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto news
        </Title>
        <Title level={5} className="show-more">
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
