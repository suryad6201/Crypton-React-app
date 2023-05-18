import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button, Menu, Typography } from "antd";
//AntDesign Icons
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const menuItems = [
  {
    label: <Link to="/">Home</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
    key: "cryptocurrencies",
    icon: <FundOutlined />,
  },
  {
    label: <Link to="/news">News</Link>,
    key: "news",
    icon: <BulbOutlined />,
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(true);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }, [screenSize]);

  let href = window.location.href.split("/");
  href = href[3];
  console.log(href);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypton</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setMenu(!menu)}
        >
          <MenuOutlined style={{ color: "#fff" }} />
        </Button>
      </div>
      {menu && (
        <Menu
          theme="dark"
          items={menuItems}
          mode="inline"
          defaultSelectedKeys={href}
        />
      )}
    </div>
  );
};

export default Navbar;
